from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
import uuid
class Profile(models.Model):
    LEVEL_CHOICES = (
        ('local_shop', 'Local Shop'),
        ('subdealer', 'Subdealer'),
        ('regular_user', 'Regular User'),
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_level = models.CharField(choices=LEVEL_CHOICES, null=True, blank=True, max_length=50)
    credit_point = models.CharField(null=True, blank=True, max_length=50)
    def __str__(self):  # __unicode__ for Python 2
        return self.user.username
@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()