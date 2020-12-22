from django.shortcuts import render
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import ProfileSerializer, UserSerializer
from .models import Profile

class ProfileView(viewsets.ModelViewSet):
	serializer_class = ProfileSerializer
	queryset = Profile.objects.all()

class UserView(viewsets.ModelViewSet):
	serializer_class = UserSerializer
	queryset = User.objects.all()