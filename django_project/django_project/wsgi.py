import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_project.settings')

<<<<<<< HEAD
application = get_wsgi_application()
=======
application = get_wsgi_application()

app = application
>>>>>>> 5c100b10978ac34cad152d9f5ad50b48efb55758
