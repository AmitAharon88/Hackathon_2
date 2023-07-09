from rest_framework import serializers
from .models import *

class AccountInfoSerializer(serializers.ModelSerializer) :
    class Meta :
        model = AccountInfo
        fields = ('first_name', 'last_name', 'username', 'password')
        
class MonthSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Month
        fields = ('month')

class CategorySerializer(serializers.ModelSerializer) :
    class Meta :
        model = Category
        fields = ('name')

class MonthlyBudgetSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Expense
        fields = ('username','month', 'budget')
        
class ExpenseSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Expense
        fields = ('day', 'category', 'type', 'amount')
    