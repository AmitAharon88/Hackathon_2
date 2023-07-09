from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from budgetApp.views import expense_detail
from budgetApp.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('accounts.urls')),
    path('api/budget/', include('budgetApp.urls')),
    path('home/', home, name='home'),
    path('budget/expense/<pk>/', expense_detail, name='post-detail')
]

if settings.DEBUG:
   urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
