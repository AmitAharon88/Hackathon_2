from rest_framework import serializers
from .models import *

class AccountInfoSerializer(serializers.ModelSerializer) :
    class Meta :
        model = AccountInfo
        fields = ('id','username', 'password')
        
class MonthSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Month
        fields = ('month')

class CategorySerializer(serializers.ModelSerializer) :
    class Meta :
        model = Category
        fields = ('name')

class ExpenseSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Expense
        fields = ('user', 'month', 'date', 'category', 'type', 'amount', 'updated')


