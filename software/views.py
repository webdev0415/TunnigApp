from django.shortcuts import render
from rest_framework import viewsets 
from .serializers import DownloadableSoftwareSerializer, FAQSerializer, TopCarouseInHomeSerializer, YoutubeLinkSerializer, TikTokLinkSerializer, TeamCarouselSerializer
from .models import DownloadableSoftware, FAQ, TopCarouseInHome, YoutubeLink, TikTokLink, TeamCarousel
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
index = never_cache(TemplateView.as_view(template_name='index.html'))
class DownloadableSoftwareSerializerView(viewsets.ModelViewSet):
	serializer_class = DownloadableSoftwareSerializer
	queryset = DownloadableSoftware.objects.all()
class FAQSerializerView(viewsets.ModelViewSet):
	serializer_class = FAQSerializer
	queryset = FAQ.objects.all()
class TopCarouseInHomeSerializerView(viewsets.ModelViewSet):
	serializer_class = TopCarouseInHomeSerializer
	queryset = TopCarouseInHome.objects.all()
class YoutubeLinkSerializerView(viewsets.ModelViewSet):
	serializer_class = YoutubeLinkSerializer
	queryset = YoutubeLink.objects.all()
class TikTokLinkSerializerView(viewsets.ModelViewSet):
	serializer_class = TikTokLinkSerializer
	queryset = TikTokLink.objects.all()
class TeamCarouselSerializerView(viewsets.ModelViewSet):
	serializer_class = TeamCarouselSerializer
	queryset = TeamCarousel.objects.all()


# Serve Single Page Application

