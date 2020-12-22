from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import CarBrandView, CarModelView, CarEngineView

router = routers.DefaultRouter()
router.register(r'carbrand', CarBrandView, 'carbrand')
router.register(r'carmodel', CarModelView, 'carmodel')
router.register(r'engine', CarEngineView, 'engine')

urlpatterns = [
    path('', include(router.urls)),
]
