from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
import datetime
import uuid

class Category(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	name = models.CharField(max_length=100)
	def __str__(self):
		return self.name
class Post(models.Model):
	id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
	title = models.CharField(max_length=300)
	display_image = models.ImageField(upload_to='images/blog/')
	content = RichTextField()
	published = models.DateTimeField(auto_now_add=True, editable=False)
	modified = models.DateTimeField(auto_now=True)
	category = models.CharField(max_length=300)
	admin_approval = models.BooleanField()
	author = models.CharField(max_length=300, null = True, blank = True)
	def __str__(self):
		return self.title
	def save(self, *args, **kwargs):
		if self.author is None:
			self.admin_approval = False
		else:
			test = User.objects.filter(username=self.author)[0]
			if test.is_superuser:
				self.admin_approval = True
			else:
				self.admin_approval = False
		super(Post, self).save(*args, **kwargs)
