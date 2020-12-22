from django.contrib import admin
from .models import DownloadableSoftware, FAQ, TopCarouseInHome, YoutubeLink, TikTokLink, TeamCarousel
# Register your models here.
class DownloadableSoftwareAdmin(admin.ModelAdmin):
	list_display = ['name',]
	list_per_page = 10
	search_fields = ['name',]
	def save_model(self, request, obj, form, change):
		obj.name = obj.downloadable_file
		obj.save()

class FAQAdmin(admin.ModelAdmin):
	list_display = ['question',]
	list_per_page = 10
	search_fields = ['question', 'answer']

class TopCarouseInHomeAdmin(admin.ModelAdmin):
	list_display = ['name',]
	list_per_page = 10
class YoutubeLinkAdmin(admin.ModelAdmin):
	list_display = ['name',]
	list_per_page = 10
class TikTokLinkAdmin(admin.ModelAdmin):
	list_display = ['name',]
	list_per_page = 10
class TeamCarouselAdmin(admin.ModelAdmin):
	list_display = ['name',]
	list_per_page = 10

admin.site.register(DownloadableSoftware, DownloadableSoftwareAdmin)
admin.site.register(FAQ, FAQAdmin)
admin.site.register(TopCarouseInHome, TopCarouseInHomeAdmin)
admin.site.register(YoutubeLink, YoutubeLinkAdmin)
admin.site.register(TikTokLink, TikTokLinkAdmin)