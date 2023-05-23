from django.urls import path

from apis.user.api import (
    GuardarUsuario, Login
)

app_name = 'apis_user'
urlpatterns = [
    path('guardar_usuario/', GuardarUsuario.as_view(), name='guardar_usuario'),
    path('login/', Login.as_view(), name='login'),
]