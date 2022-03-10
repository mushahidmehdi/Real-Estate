
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # rest_framework cofiguration 
    path('api-auth/', include('rest_framework.urls')),
     
    # Djoser url cofig
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),

    # Apps url cofig
    path('api/accounts/', include('accounts.api.urls')),
    path('api/realtors/', include('realtors.api.urls')),
    path('api/listings/', include('listing.api.urls')),
    path('api/contacts/', include('contacts.api.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

