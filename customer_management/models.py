# customer_management/models.py
from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)