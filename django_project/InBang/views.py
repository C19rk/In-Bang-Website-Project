from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth import update_session_auth_hash
from django.views.decorators.http import require_http_methods
from .serializers import UserSerializer, MyTokenObtainPairSerializer, UserSerializerWithToken, ChangePasswordSerializer, ResetPasswordSerializer, UserSettingsSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password, check_password
from rest_framework import status
from django.contrib import messages
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import UpdateAPIView
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import AppUser
from django.db.models import Q
import random
import requests
import logging

logger = logging.getLogger(__name__)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def get_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            username=data.get('username'),
            email=data.get('email'),
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            password=make_password(data.get('password')),
            is_active=True
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def change_password(request):
    user = request.user
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')
    confirm_password = request.data.get('confirm_password')

    if not user.check_password(old_password):
        return Response({'message': 'Old password is incorrect!'}, status=status.HTTP_400_BAD_REQUEST)

    if new_password != confirm_password:
        return Response({'message': 'Passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)

    user.set_password(new_password)
    user.save()
    return Response({'message': 'Password successfully updated.'}, status=status.HTTP_200_OK)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def userSettings(request):
    serializer = UserSettingsSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        user = request.user
        user.username = serializer.validated_data.get('username', user.username)
        user.email = serializer.validated_data.get('email', user.email)
        user.first_name = serializer.validated_data.get('first_name', user.first_name)
        user.last_name = serializer.validated_data.get('last_name', user.last_name)
        old_password = serializer.validated_data.get('old_password')
        new_password = serializer.validated_data.get('new_password')
        confirm_password = serializer.validated_data.get('confirm_password')

        if not user.check_password(old_password):
            return Response({'message': 'Old password is incorrect!'}, status=status.HTTP_400_BAD_REQUEST)
            
        if new_password != confirm_password:
            return Response({'message': 'Passwords do not match.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if new_password:
            user.set_password(new_password)
            update_session_auth_hash(request, user)  # Update session to prevent logout
            
        user.save()
        return Response({'message': 'User information successfully updated.'}, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def initiate_payment(request):
    # Make a request to PayPal API to initiate payment
    # Include necessary data such as amount, currency, and redirect URLs
    # Return the payment URL or details to frontend for redirection
    payment_data = {
        'amount': 100.00,
        'currency': 'USD',
        'description': 'One-time subscription payment',
        'redirect_url': 'https://example.com/payment-success',
        # Add more data as required by PayPal API
    }

    # Make API request to PayPal to initiate payment
    # Replace 'YOUR_PAYPAL_API_ENDPOINT' with the actual PayPal API endpoint
    response = requests.post('YOUR_PAYPAL_API_ENDPOINT', data=payment_data)

    # Process the response and return payment details
    return JsonResponse(response.json())

def handle_payment_confirmation(request):
    # Handle the payment confirmation from PayPal
    # Verify the payment details and process the order
    # Send email notifications to the user with product access details
    payment_status = request.POST.get('payment_status')
    
    if payment_status == 'completed':
        # Process the order and send product access details to the user
        # Send email notifications with product details
        return JsonResponse({'message': 'Payment successful'})
    else:
        # Handle payment failure or other statuses
        return JsonResponse({'message': 'Payment failed'})
