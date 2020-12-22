from django.contrib import admin
from .models import CarBrand, CarModel, CarEngine
from django.contrib.auth.models import Group
# admin.site.site_header = "My Product Inventory ";
# Register your models here.
class CarBrandAdmin(admin.ModelAdmin):
	list_display = ['brand_name',]
	list_per_page = 10
	search_fields = ['brand_name',]
	fields = [('brand_name'), ('banner_image'),]
class CarModelAdmin(admin.ModelAdmin):
	list_display = ['brand', 'model_name',]
	list_per_page = 10
	search_fields = ['model_name',]
	list_filter = ('brand',)
	fields = [('brand'), ('model_name','model_image'),]
class CarEngineAdmin(admin.ModelAdmin):
	list_display = ['model', 'year_name', 'engine_name', 'engine_type']
	list_per_page = 10
	search_fields = ['engine_name',]
	list_filter = ('model',)
	fieldsets = (
		(None, {
            'fields': [('model', 'year_name'), ('engine_name', 'engine_type', 'engine_status'), ('power_graph')]
        }), 
        ('ECO', {
            'fields': [('eco_torque_origin', 'eco_torque_difference', 'eco_estimated_fuel_reduction'), ('eco_price', 'eco_description')]
        }),        
        ('Stage 1', {
            'fields': [('stage1_torque_origin', 'stage1_torque_difference'), ('stage1_power_origin', 'stage1_power_difference'), ('stage1_price', 'stage1_description')]
        }),
        ('Stage 2', {
            'fields': [('stage2_torque_origin', 'stage2_torque_difference'), ('stage2_power_origin', 'stage2_power_difference'), ('stage2_price', 'stage2_description')]
        }),
        ('DSG', {
            'fields': [('dsg_torque_origin', 'dsg_torque_difference'),]
        }),
    ) 
admin.site.register(CarBrand, CarBrandAdmin)
admin.site.register(CarModel, CarModelAdmin)
admin.site.register(CarEngine, CarEngineAdmin)


# Unregister your models here
admin.site.unregister(Group)

# Add Header Title
admin.site.site_header = "Car Tuning Service Admin Panel"
admin.site.site_title = " Running River Investment LLC"
admin.site.index_title = "Tuning Admin"
# admin.site.site_url