from django.db import models
import uuid
# Create your models here.
class CarBrand(models.Model):
    """docstring for CarBrand"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    brand_name = models.CharField(max_length=100, help_text="Enter The Car Brand Name")
    banner_image = models.ImageField(upload_to='images/banner/', help_text="Upload The Image For The Banner")
    def __str__(self):
        return self.brand_name
class CarModel(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	brand = models.ForeignKey(CarBrand, on_delete=models.CASCADE, help_text="Select The CarBrand")
	model_name = models.CharField(max_length=100, help_text="Enter The Model Name")
	model_image = models.ImageField(upload_to='images/model/', help_text="Upload The Image For The Car Model", blank=True)
	def __str__(self):
		return self.model_name
# class YearForModel(models.Model):
# 	model = models.ForeignKey(CarModel, on_delete=models.CASCADE, help_text="Select The CarModel")
# 	year_name = models.CharField(max_length=100, help_text="Enter The Year Name")
# 	year_image = models.ImageField(upload_to='year/', help_text="Upload The Image For The Car Yearly", blank=True)
class CarEngine(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	model = models.ForeignKey(CarModel, on_delete=models.CASCADE, help_text="Select The CarModel")
	year_name = models.CharField(max_length=100, help_text="Enter The Year Name")
	engine_name = models.CharField(max_length=100, help_text="Enter The Engine Name")
	engine_type = models.CharField(blank=True, max_length=100, help_text="Enter The Engine Type", choices=[('gas', 'Gasoline'), ('disel', 'Diesel Micro Hybrid'), ('hybrid', 'Hybrid')])
	engine_status = models.CharField(max_length=100, blank=True, null=True, help_text="Enter The Engine Status", choices=[('new', 'New'), ('indev', 'In development')])
	power_graph = models.ImageField(upload_to='images/engine/', help_text="Upload The Image For The Power Graph")
	# ECO
	eco_torque_origin = models.IntegerField(help_text="Enter The Origin Value(Nm)", blank=True, null=True)
	eco_torque_difference = models.IntegerField(help_text="Enter The Difference Value(Nm)", blank=True, null=True)
	eco_estimated_fuel_reduction = models.IntegerField(help_text="Enter The Estimated Fuel Reduction(%)", blank=True, null=True)
	eco_price = models.IntegerField(help_text="Enter The Price(€)", blank=True, null=True)
	eco_description = models.TextField(help_text="Enter The Description For the ECO", blank=True, null=True)
	# Stage 1
	stage1_torque_origin = models.IntegerField(help_text="Enter The Origin Value(Nm)", blank=True, null=True)
	stage1_torque_difference = models.IntegerField(help_text="Enter The Difference Value(Nm)", blank=True, null=True)
	stage1_power_origin = models.IntegerField(help_text="Enter The Origin Value(hp)", blank=True, null=True)
	stage1_power_difference = models.IntegerField(help_text="Enter The Difference Value(hp)", blank=True, null=True)
	stage1_price = models.IntegerField(help_text="Enter The Price(€)", blank=True, null=True)
	stage1_description = models.TextField(help_text="Enter The Description For the ECO", blank=True, null=True)
	# Stage 2
	stage2_torque_origin = models.IntegerField(help_text="Enter The Origin Value(Nm)", blank=True, null=True)
	stage2_torque_difference = models.IntegerField(help_text="Enter The Difference Value(Nm)", blank=True, null=True)
	stage2_power_origin = models.IntegerField(help_text="Enter The Origin Value(hp)", blank=True, null=True)
	stage2_power_difference = models.IntegerField(help_text="Enter The Difference Value(hp)", blank=True, null=True)
	stage2_price = models.IntegerField(help_text="Enter The Price(€)", blank=True, null=True)
	stage2_description = models.TextField(help_text="Enter The Description For the ECO", blank=True, null=True)
	# DSG
	dsg_torque_origin = models.IntegerField(help_text="Enter The Origin Value(Nm)", blank=True, null=True)
	dsg_torque_difference = models.IntegerField(help_text="Enter The Difference Value(Nm)", blank=True, null=True)
