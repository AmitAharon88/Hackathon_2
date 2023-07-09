from django.shortcuts import render
from .models import *
from django.urls import reverse_lazy
from .serializers import *
from rest_framework.generics import (CreateAPIView, ListAPIView, RetrieveAPIView)
from rest_framework.permissions import (AllowAny,IsAuthenticated)


# Create your views here.
def home(request):
   return render(request, 'index.html')

def addExpense(request):
   return render(request, 'addExpense.html')

class ExpenseCreateView(CreateAPIView) :
   queryset = Expense.objects.all()
   serializer_class = ExpenseSerializer

   
class ExpenseListView(ListAPIView):
   queryset = Expense.objects.all()
   serializer_class = ExpenseSerializer
   permission_classes = (AllowAny, )

class ExpenseDetailView(RetrieveAPIView):
   queryset = Expense.objects.all()
   serializer_class = ExpenseSerializer
   permission_classes = (AllowAny, )

def expense_detail(request, pk):
   return render(request, 'expenseDetail.html')