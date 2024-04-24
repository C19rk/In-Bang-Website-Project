from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class Command(BaseCommand):
    help = 'Generates tokens for existing users'

    def handle(self, *args, **options):
        users = User.objects.all()
        for user in users:
            if not Token.objects.filter(user=user).exists():
                Token.objects.create(user=user)
                self.stdout.write(self.style.SUCCESS(f"Token generated for user: {user.username}"))
            else:
                self.stdout.write(self.style.WARNING(f"Token already exists for user: {user.username}"))
