from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class AccountInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    def __str__(self):
       return self.user.username
   
class Category(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
       return self.name

class Month(models.Model):
    month = models.CharField(max_length=50)
    
    def __str__(self):
       return self.month
    
class MonthlyBudget(models.Model):
    user = models.ForeignKey(AccountInfo, on_delete=models.CASCADE, blank=True, null=True)
    month = models.ForeignKey(Month, on_delete=models.CASCADE)
    budget = models.IntegerField()

    def __str__(self):
       return self.user.username
    
class Expense(models.Model):
    user = models.ForeignKey(AccountInfo, on_delete=models.CASCADE, blank=True, null=True)
    day = models.DateField(default=timezone.now().date())
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    type = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    
    def __str__(self):
       return f"{self.day} - {self.category} - {self.type} - {self.amount}"