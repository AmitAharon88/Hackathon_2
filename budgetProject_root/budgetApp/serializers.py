from rest_framework import serializers
from .models import *

class AccountInfoSerializer(serializers.ModelSerializer) :
    class Meta :
        model = AccountInfo
        fields = ('first_name', 'last_name', 'username', 'password')
        
class MonthlyBudgeSerializer(serializers.ModelSerializer) :
    class Meta :
        model = MonthlyBudget
        fields = ('first_name', 'month', 'budget')

class CategorySerializer(serializers.ModelSerializer) :
    class Meta :
        model = Category
        fields = ('month', 'type')

class ExpenseSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Expense
        fields = ('month', 'category', 'type', 'amount')