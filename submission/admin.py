from django.contrib import admin
from .models import Submission
# Register your models here.
from django.conf import settings
from django.http import HttpResponse
# from django.utils import translation

class SubmissionAdmin(admin.ModelAdmin):
	list_display = ['car_vin_number', 'car_brand', 'car_model', 'user_message', 'created_on']
	list_per_page = 5
	search_fields = ['car_vin_number', 'car_brand', 'car_model',]
	list_editable = ('user_message',)
	list_filter = ('car_model', 'car_brand', 'created_on')
	fieldsets = (
		(None, {
            'fields': [('car_vin_number', 'car_brand', 'car_model', 'car_build'), ('engine_type', 'engine_power', 'year', 'tuning_level'), ('reading_method', 'ecu_type', 'car_plate_num'), ('user_message',)]
        }), 
        ('Upload Files', {
            'fields': [('file1', 'file2', 'file3', 'file4'),]
        }),
    ) 

admin.site.register(Submission, SubmissionAdmin)
