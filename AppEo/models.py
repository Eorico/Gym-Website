from django.db import models
from django.db import models

class MyModel(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    
class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return f"Message from {self.name} ({self.email})"

class Payment(models.Model):
    name = models.CharField(max_length=100)
    gcash_number = models.CharField(max_length=20)   
    amountpay = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    

