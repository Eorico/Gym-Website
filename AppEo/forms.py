from django import forms
from .models import Contact, Payment


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'message']

class PaymentForm(forms.ModelForm):
    class Meta:
        model = Payment
        fields = ['name', 'gcash_number', 'amountpay']
