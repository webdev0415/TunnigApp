from rest_framework import serializers
from .models import DownloadableSoftware, FAQ, TopCarouseInHome, YoutubeLink, TikTokLink, TeamCarousel

class DownloadableSoftwareSerializer(serializers.ModelSerializer):
	class Meta:
		model = DownloadableSoftware
		fields = '__all__' 
class FAQSerializer(serializers.ModelSerializer):
	class Meta:
		model = FAQ
		fields = '__all__' 
class TopCarouseInHomeSerializer(serializers.ModelSerializer):
	class Meta:
		model = TopCarouseInHome
		fields = '__all__' 
class YoutubeLinkSerializer(serializers.ModelSerializer):
	class Meta:
		model = YoutubeLink
		fields = '__all__' 
class TikTokLinkSerializer(serializers.ModelSerializer):
	class Meta:
		model = TikTokLink
		fields = '__all__' 
class TeamCarouselSerializer(serializers.ModelSerializer):
	class Meta:
		model = TeamCarousel
		fields = '__all__' 