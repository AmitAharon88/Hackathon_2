from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class AccountInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    def __str__(self):
       return self.user.username
    
class MonthlyBudget(models.Model):
    user = models.ForeignKey(AccountInfo, on_delete=models.CASCADE)
    month = models.CharField(max_length=50)
    budget = models.IntegerField()

    def __str__(self):
       return self.user.username
   
class Category(models.Model):
    month = models.ForeignKey(MonthlyBudget, on_delete=models.CASCADE)
    type = models.CharField(max_length=50)
    
    def __str__(self):
       return self.user.username
    
class Expense(models.Model):
    month = models.ForeignKey(MonthlyBudget, on_delete=models.CASCADE)
    Category = models.ForeignKey(Category, on_delete=models.CASCADE)
    type = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    
    def __str__(self):
       return self.month