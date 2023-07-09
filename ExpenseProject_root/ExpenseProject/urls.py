from django.contrib import admin
from django.urls import path, include
from ExpenseApp.views import home
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/expense/', include('ExpenseApp.urls')),
    path('home/', home, name='home'),
]


if settings.DEBUG:
   urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
