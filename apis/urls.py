from django.urls import path

from apis.api import HelloWorld, GuardarDatos

urlpatterns = [
    path('hello_world/', HelloWorld.as_view(), name='hello_world'),
    path('guardar_datos/', GuardarDatos.as_view(), name='guardar_datos')
]