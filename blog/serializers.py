from rest_framework import serializers
from .models import Category, Post

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ['id', 'name']
class PostSerializer(serializers.ModelSerializer):
	class Meta:
		model = Post
		fields = ['id', 'title', 'display_image', 'content', 'category', 'published', 'author']
