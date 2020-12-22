from django.db import models
import datetime
import uuid
from software.ftp import FTPStorage
fs = FTPStorage()
# Create your models here.
def case_upload_software_location(instance, filename):
    case_name = instance.name.lower().replace(" ", "-")
    file_name = filename.lower().replace(" ", "-")
    return "downloadable_files/{}/{}".format(case_name, file_name)
class FAQ(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	question = models.CharField(max_length=300)
	answer = models.TextField()
	def __str__(self):
		return self.question
class DownloadableSoftware(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100)
	downloadable_file = models.CharField(max_length=100)
	price = models.IntegerField()
	def save(self, *args, **kwargs):		
		super(DownloadableSoftware, self).save(*args, **kwargs)
class TopCarouseInHome(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100)
	image = models.ImageField(upload_to='images/home/', help_text="Upload The Image For The Home Carousel", blank=True)
	def __str__(self):
		return self.name
class YoutubeLink(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100)
	link = models.URLField(max_length=200)
	imgsrc = models.URLField(max_length=200, blank=True)
class TikTokLink(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100)
	video_id = models.CharField(max_length=200)
	link = models.URLField(max_length=200)
	imgsrc = models.URLField(max_length=200, blank=True)
class TeamCarousel(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100)
	imgsrc = models.ImageField(upload_to='images/home/team', help_text="Upload The Image For The Team Carousel", blank=True)
	def __str__(self):
		return self.name

