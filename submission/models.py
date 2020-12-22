from django.db import models
from submission.fields import ContentTypeRestrictedFileField
from django.core.mail import send_mail
from django.utils.html import strip_tags
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib.auth.models import User
import uuid
# Create your models here.
def case_upload_location(instance, filename):
    case_name = instance.car_vin_number.lower().replace(" ", "-")
    file_name = filename.lower().replace(" ", "-")
    return "submission_files/{}/{}".format(case_name, file_name)

class Submission(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	car_vin_number = models.CharField(max_length=100)
	car_brand = models.CharField(max_length=100)
	car_model = models.CharField(max_length=100)
	car_build = models.CharField(max_length=100)
	engine_type = models.CharField(max_length=100)
	engine_power = models.CharField(max_length=100)
	year = models.CharField(max_length=100)
	tuning_level = models.CharField(max_length=100)
	user_message = models.TextField(max_length=100, null=True, blank=True)
	reading_method = models.CharField(max_length=100, null=True, blank=True)
	ecu_type = models.CharField(max_length=100, null=True, blank=True)
	car_plate_num = models.CharField(max_length=100)
	created_on = models.DateTimeField(auto_now_add=True, editable=False)
	file1 = ContentTypeRestrictedFileField(upload_to=case_upload_location, content_types=['application/octet-stream'], max_upload_size=10485760, blank=True)
	file2 = ContentTypeRestrictedFileField(upload_to=case_upload_location, content_types=['application/octet-stream'], max_upload_size=10485760, blank=True)
	file3 = ContentTypeRestrictedFileField(upload_to=case_upload_location, content_types=['application/octet-stream'], max_upload_size=10485760, blank=True)
	file4 = ContentTypeRestrictedFileField(upload_to=case_upload_location, content_types=['application/octet-stream'], max_upload_size=10485760, blank=True)
	author = models.ForeignKey(User, on_delete=models.CASCADE, null = True, blank = True)
	def __str__(self):
		return self.car_vin_number
	def save(self, *args, **kwargs):
		to_emails = []
		for c in User.objects.filter(is_superuser=True):
			to_emails.append(c.email)
		context = {
			'car_vin_number': self.car_vin_number,
			'car_brand': self.car_brand,
			'car_build': self.car_build,
			'car_model': self.car_model,
			'engine_type': self.engine_type,
			'engine_power': self.engine_power,
			'year': self.year,
			'tuning_level': self.tuning_level,
			'reading_method': self.reading_method,
			'ecu_type': self.ecu_type,
			'car_plate_num': self.car_plate_num,
			'file1': self.file1,
			'file2': self.file2,
			'file3': self.file3,
			'file4': self.file4,
			'reporter': self.author
		}
		html_message = render_to_string('submission/send_email_template.html', {'context': context})
		plain_message = strip_tags(html_message)
		send_mail(
			'Submission Information',
			plain_message,
			settings.EMAIL_HOST_USER,
			to_emails,
			fail_silently=False
		)
		super(Submission, self).save(*args, **kwargs)


