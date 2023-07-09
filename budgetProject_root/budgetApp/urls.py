from django.urls import path
from .views import *

urlpatterns = [
    path('expense-history', ExpenseListView.as_view(), name = 'expenseHistory'),
    path('add-expense/', ExpenseCreateView.as_view(), name = 'addExpense'),
    # path('expense/<pk>', ExpenseDetailView.as_view(), name = 'expenseDetail')
]