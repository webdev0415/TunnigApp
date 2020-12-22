"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from rest_auth.registration.views import VerifyEmailView, RegisterView
from allauth.account.views import confirm_email as allauthemailconfirmation
from software.views import index
from ftpserver.views import download_link_from_ftp

urlpatterns = []
news_patterns = ([
    path('product/', include('product.urls')),
    path('blog/', include('blog.urls')),
    path('submission/', include('submission.urls')),
    path('software/', include('software.urls')),
    path('user/', include('userprofile.urls')),
], 'apis')
urlpatterns += i18n_patterns(
    path('special/', download_link_from_ftp),
    path('admin/', admin.site.urls),
    re_path(r'^rest-auth/registration/account-confirm-email/(?P<key>[-:\w]+)/$', allauthemailconfirmation,  name='account_confirm_email'),
    path('accounts/', include('allauth.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),  
    path('apis/', include(news_patterns, namespace='apis')), prefix_default_language=False,
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [
    re_path(r'^$', index),
    re_path(r'[_\w]+$', index),
]


