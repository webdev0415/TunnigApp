from django.shortcuts import render
from rest_framework import viewsets 
from .serializers import SubmissionSerializer
from .models import Submission
# Create your views here.
class SubmissionView(viewsets.ModelViewSet):
	serializer_class = SubmissionSerializer
	queryset = Submission.objects.all()
