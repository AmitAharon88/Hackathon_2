from .models import *
from rest_framework.permissions import (AllowAny,IsAuthenticated)
from .serializers import *
from rest_framework.generics import (ListAPIView)
from django.shortcuts import render

def home(request):
   return render(request, 'index.html')


class ExpenseListView(ListAPIView):
   queryset = Expense.objects.all()
   serializer_class = ExpenseSerializer
   permission_classes = (AllowAny, )