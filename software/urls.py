from django.urls import path, include
from rest_framework import routers
from .views import DownloadableSoftwareSerializerView, FAQSerializerView, TopCarouseInHomeSerializerView, YoutubeLinkSerializerView, TikTokLinkSerializerView, TeamCarouselSerializerView

router = routers.DefaultRouter()
router.register(r'downloadable-software', DownloadableSoftwareSerializerView, 'downloadable-software')
router.register(r'faq', FAQSerializerView, 'faq')
router.register(r'top-carousel', TopCarouseInHomeSerializerView, 'top-carousel')
router.register(r'youtube', YoutubeLinkSerializerView, 'youtube')
router.register(r'tiktok', TikTokLinkSerializerView, 'tiktok')
router.register(r'teamcarousel', TeamCarouselSerializerView, 'teamcarousel')

urlpatterns = [
    path('', include(router.urls)),
]