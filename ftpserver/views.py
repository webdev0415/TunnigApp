from django.shortcuts import render
from django.contrib.auth.models import User
from contextlib import closing
import urllib.request as rq
import os
from django.conf import settings
import shutil
from django.http import HttpResponse
from mimetypes import guess_type
# import mimetypes
# Create your views here.
def _get_file_from_blueHost_ftp(fileName):
    print(">>>>>>>>>>>>>>>>>>>>", "calling function............")
    FTP = "ftp.ibridgepy.com"
    ID = "igor@ibridgepy.com"
    PASSWORD = "developer"
    PORT = 21
    with closing(rq.urlopen('ftp://%s:%s@%s:%s/manuals/%s' % (ID, PASSWORD, FTP, PORT, fileName))) as r:
        fl_path = os.path.join(settings.MEDIA_ROOT, fileName)
        print("------------------------fl_path------------------------", fl_path)
        with open(fl_path, 'wb+') as f:
            shutil.copyfileobj(r, f)

def download_link_from_ftp(request):
    # if request.method == 'GET':
    #     user = get_object_or_404(User, username=request.user)
    #     print("=============user==============", user)
    fileName = request.GET['download_url']
    fl_path = os.path.join(settings.MEDIA_ROOT, fileName)
    print("===========fl_path===========", fl_path)
    if not os.path.isfile(fl_path):
        print("===new=====")
        _get_file_from_blueHost_ftp(fileName)
    
    fl = open(fl_path, 'rb')  # 'rb' = force to read in files as bytes
    mime_type = guess_type(fl_path)
    response = HttpResponse(fl, content_type=mime_type)
    response['Content-Disposition'] = "attachment; filename=%s" % (fileName,)
    return response
