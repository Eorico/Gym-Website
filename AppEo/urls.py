from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='GYMPREDATOR'),  
    path('tutorial/', views.tutorial, name='tutorial'),
    path('Pay1/', views.Pay1, name='Pay1'),
    path('Pay2/', views.Pay2, name='Pay2'),
    path('Pay3/', views.Pay3, name='Pay3'),
    path('abs/', views.abs, name='abs'),
    path('arms/', views.arms, name='arms'),
    path('back/', views.back, name='back'),
    path('chest/', views.chest, name='chest'),
    path('Fb/', views.Fb, name='Fb'),
    path('legs/', views.legs, name='legs'),
    path('submit-contact-form/', views.contact_view, name='submit_contact_form'), 
    path('payment1/', views.payment_view1, name='Payment_1'),
    path('payment2/', views.payment_view2, name='Payment_2'),
    path('payment3/', views.payment_view3, name='Payment_3'),
    path('payment/', views.payment_view, name='payment_view'),
    path('Macro/', views.macro, name='Macro'),

]