from django.contrib import admin
from .models import Realtors


@admin.register(Realtors)
class RealtorAdmin(admin.ModelAdmin):
    display_list = ('id', 'name', 'email', 'phone',)
    display_list_links = ('id', 'name',)
    search_fields = ('name',)
