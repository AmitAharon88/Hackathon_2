from django.urls import path
from . import views

urlpatterns = [
    path('expenses/', views.ExpenseListView.as_view(), name='expense-list'),
]