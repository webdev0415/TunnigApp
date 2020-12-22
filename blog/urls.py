from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import CategoryView, PostView

router = routers.DefaultRouter()
router.register(r'category', CategoryView, 'category')
router.register(r'post', PostView, 'post')

urlpatterns = [
    path('', include(router.urls)),
]
