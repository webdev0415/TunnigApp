from django.shortcuts import render
from .models import Category, Post
from rest_framework import viewsets 
from .serializers import CategorySerializer, PostSerializer
# Create your views here.
class CategoryView(viewsets.ModelViewSet):
	serializer_class = CategorySerializer
	queryset = Category.objects.all()
class PostView(viewsets.ModelViewSet):
	serializer_class = PostSerializer
	def get_queryset(self):
		queryset = Post.objects.filter(admin_approval=True)
		return queryset
