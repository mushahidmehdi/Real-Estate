from django.contrib import admin
from .models import Listing

# Register your models here.


@admin.register(Listing)
class ListingDetailAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_publish',
                    'rent_price', 'list_date', 'realtors',)
    list_display_links = ('id', 'title',)
    list_filter = ('realtors',)
    list_editable = ('is_publish',)
    search_fields = ('title', 'realtors', 'rent_price')
