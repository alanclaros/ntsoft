from django.urls import path
from pages.views import index, productos, servicios, contacto, acerca_de, send_message

urlpatterns = [
    path('', index, name='index'),
    path('productos/', productos, name='productos'),
    path('servicios/', servicios, name='servicios'),
    path('contacto/', contacto, name='contacto'),
    path('acerca_de/', acerca_de, name='acerca_de'),
    path('send_message/', send_message, name='send_message'),
]
