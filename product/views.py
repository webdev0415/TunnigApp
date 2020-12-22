from django.shortcuts import render
from rest_framework import viewsets 
from .serializers import CarBrandSerializer, CarModelSerializer, CarEngineSerializer
from .models import CarBrand, CarModel, CarEngine
# Create your views here.

class CarBrandView(viewsets.ModelViewSet):
	serializer_class = CarBrandSerializer
	queryset = CarBrand.objects.all()
class CarModelView(viewsets.ModelViewSet):
	serializer_class = CarModelSerializer
	# queryset = CarModel.objects.all()
	def get_queryset(self):
		brand_id = self.request.query_params.get('brand_id')
		queryset = CarModel.objects.filter(brand=brand_id)
		return queryset
class CarEngineView(viewsets.ModelViewSet):
	serializer_class = CarEngineSerializer
	# queryset = CarEngine.objects.all()
	def get_queryset(self):
		model_id = self.request.query_params.get('model_id')
		queryset = CarEngine.objects.filter(model=model_id)
		return queryset