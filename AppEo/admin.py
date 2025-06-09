from django.contrib import admin
from .models import MyModel, Contact, Payment

@admin.register(MyModel)
class MyModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')   
    search_fields = ('title', 'description')  
    ordering = ('title',)  

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message')   
    search_fields = ('name', 'email')

@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('name', 'gcash_number', 'amountpay')
    search_fields = ('name', 'gcash_number')
    list_filter = ('amountpay',)