from django.contrib import admin
from .models import Category, Post
from ckeditor.widgets import CKEditorWidget
from django import forms

class PostAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorWidget())
    class Meta:
        model = Post
        fields = '__all__'
# Register your models here.
class PostAdmin(admin.ModelAdmin):
	form = PostAdminForm
	readonly_fields = ('published',)
	list_display = ['title', 'author', 'published', 'modified', 'admin_approval']
	exclude = ['author', 'published',]
	list_filter = ('admin_approval',)
	# list_editable = ('admin_approval',)
	list_per_page = 10
	search_fields = ['title', 'content']
	fields = [('title', 'category'), ('display_image'), ('content'), ('admin_approval')]
	def save_model(self, request, obj, form, change):
		obj.author = request.user.username
		obj.save()

admin.site.register(Category)
admin.site.register(Post, PostAdmin)