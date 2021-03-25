from rest_framework import serializers
from .models import CarBrand, CarModel, CarEngine

class CarBrandSerializer(serializers.ModelSerializer):
	class Meta:
		model = CarBrand
		fields = '__all__'
class CarModelSerializer(serializers.ModelSerializer):
	brand = CarBrandSerializer()
	class Meta:
		model = CarModel
		fields = ['id', 'brand', 'model_name', 'model_image']
	def create(self, validated_data):
		carbrand_data = validated_data.pop('brand')
		carmodel = CarModel.objects.create(**validated_data)
		CarBrand.objects.create(carmodel=carmodel, **carbrand_data)
		return carmodel
class CarEngineSerializer(serializers.ModelSerializer):
	model = CarModelSerializer()
	class Meta:
		model = CarEngine
		fields = '__all__'