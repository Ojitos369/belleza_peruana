from django.urls import path

from apis.api import GuardarUsuario

urlpatterns = [
    path('guardar_usuario/', GuardarUsuario.as_view(), name='guardar_usuario'),
]