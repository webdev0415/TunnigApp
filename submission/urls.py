from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import SubmissionView

router = routers.DefaultRouter()
router.register(r'submission', SubmissionView, 'submission')

urlpatterns = [
    path('', include(router.urls)),
]
