from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(AccountInfo)
admin.site.register(MonthlyBudget)
admin.site.register(Category)
admin.site.register(Expense)
