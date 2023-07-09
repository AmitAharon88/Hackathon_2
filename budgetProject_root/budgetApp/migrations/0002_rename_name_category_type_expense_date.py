# Generated by Django 4.2.3 on 2023-07-07 15:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('budgetApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='name',
            new_name='type',
        ),
        migrations.AddField(
            model_name='expense',
            name='date',
            field=models.DateField(default=datetime.date(2023, 7, 7)),
        ),
    ]