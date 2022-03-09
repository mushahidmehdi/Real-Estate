
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(),
         name='token_refresh_pair'),
    path('api/accounts/', include('accounts.api.urls')),
    path('api/realtors/', include('realtors.api.urls')),
    path('api/listings/', include('listing.api.urls')),
    path('api/contacts/', include('contacts.api.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns += [
#     re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
# ]
