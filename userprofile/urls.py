from django.urls import path, include
from .views import ProfileView, UserView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'userprofile', ProfileView, 'userprofile')
router.register(r'users', UserView, 'users')

urlpatterns = [
    path('', include(router.urls))
]
