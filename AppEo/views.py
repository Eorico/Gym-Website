from django.shortcuts import render, redirect
from django.utils import timezone
from django.http import JsonResponse
from .forms import ContactForm, PaymentForm
from .models import Payment
import json


def index(request):
    return render(request, 'index.html', {'static_time': timezone.now().strftime("%Y%m%d%H%M%S")})  

def tutorial(request):
    return render(request, 'tutorialpage.html')

def Pay1(request):
    return render(request, 'Payment_1.html', {'static_time': timezone.now().strftime("%Y%m%d%H%M%S")})

def Pay2(request):
    return render(request, 'Payment_2.html', {'static_time': timezone.now().strftime("%Y%m%d%H%M%S")})

def Pay3(request):
    return render(request, 'Payment_3.html', {'static_time': timezone.now().strftime("%Y%m%d%H%M%S")})

def abs(request):
    return render(request, 'abs.html')

def arms(request):
    return render(request, 'arms.html')

def back(request):
    return render(request, 'back.html')

def chest(request):
    return render(request, 'chest.html')

def Fb(request):
    return render(request, 'full_body.html')

def legs(request):
    return render(request, 'legs.html')

def macro(request):
    return render(request, 'macro.html')

# Contact View
def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            # Return a success response
            return JsonResponse({'message': 'Form data successfully submitted to the database.'}, status=200)
        else:
            return JsonResponse({'message': 'Form submission failed.'}, status=400)

    else:
        form = ContactForm()
    return render(request, 'index.html', {'form': form})

# Payment View 1
def payment_view1(request):
    if request.method == "POST":
        form = PaymentForm(request.POST)
        if form.is_valid():
            print("Form is valid!")
            print(form.cleaned_data)  
            form.save()
             
            return redirect('Payment_1')   
        else:
            print("Form is not valid:", form.errors)  
    else:
        form = PaymentForm()
    return render(request, 'Payment_1.html', {'form': form})

# Payment View 2
def payment_view2(request):
    if request.method == "POST":
        form = PaymentForm(request.POST)
        if form.is_valid():
            print("Form is valid!")
            print(form.cleaned_data)   
            form.save()
            
            return redirect('Payment_2')  
        else:
            print("Form is not valid:", form.errors)   
    else:
        form = PaymentForm()
    return render(request, 'Payment_2.html', {'form': form})
# Payment View 3
def payment_view3(request):
    if request.method == "POST":
        form = PaymentForm(request.POST)
        if form.is_valid():
            print("Form is valid!")
            print(form.cleaned_data)   
            form.save()
             
            return redirect('Payment_3')  
        else:
            print("Form is not valid:", form.errors)  
    else:
        form = PaymentForm()
    return render(request, 'Payment_3.html', {'form': form})

def payment_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)  
            name = data.get('name')
            gcash_number = data.get('gcash_number')
            amountpay = data.get('amountpay')

            if not name or not gcash_number or not amountpay:
                return JsonResponse({'success': False, 'message': 'Missing data.'})

            payment = Payment(name=name, gcash_number=gcash_number, amountpay=amountpay)
            payment.save()

            return JsonResponse({'success': True, 'message': 'Payment processed successfully!'})

        except Exception as e:
            return JsonResponse({'success': False, 'message': f'Error: {str(e)}'})

    return JsonResponse({'success': False, 'message': 'Invalid request method.'})