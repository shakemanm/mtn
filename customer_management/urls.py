

# customer_management/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.customer_list, name='customer_list'),  # Define the root path
    path('customer/list/', views.customer_list, name='customer_list'),
    path('customer/add/', views.add_customer, name='add_customer'),
    path('customer/edit/<int:pk>/', views.edit_customer, name='edit_customer'),
    path('customer/delete/<int:pk>/', views.delete_customer, name='delete_customer'),
]
