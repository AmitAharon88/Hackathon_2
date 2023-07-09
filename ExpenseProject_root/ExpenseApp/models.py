from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone


User = get_user_model()


class AccountInfo(models.Model):
   user = models.OneToOneField(User, on_delete=models.CASCADE)

   def __str__(self) -> str:
       return self.user.username

class Category(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
       return self.name

class Month(models.Model):
    month = models.CharField(max_length=50)
    
    def __str__(self):
       return self.month
   
class Expense(models.Model):
   user = models.ForeignKey(AccountInfo, on_delete=models.CASCADE)
   month = models.ForeignKey(Month, on_delete=models.CASCADE)
   date = models.DateField(default=timezone.now().date())
   category = models.ForeignKey(Category, on_delete=models.CASCADE)
   type = models.CharField(max_length=100)
   amount = models.DecimalField(max_digits=10, decimal_places=2)
   updated = models.DateTimeField(auto_now=True)


   def __str__(self):
       return f'{self.user.user.username} {self.date}'
