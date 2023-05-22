# Python
import os
import json

# Django
from django.contrib.auth.hashers import make_password

# User
from app.core.bases.apis import PostApi, GetApi, get_d, pln

# Models
from apis.models import User


class GuardarUsuario(PostApi):
    def main(self):
        pln('GuardarUsuario')
        nombre = get_d(self.data, 'nombre', default=None)
        apellido = get_d(self.data, 'apellido', default=None)
        correo = get_d(self.data, 'correo', default=None)
        password = get_d(self.data, 'password', default=None)
        telefono = get_d(self.data, 'telefono', default=None)
        activo = True
        
        if password:
            password = make_password(password)
        
        usuario = User()
        usuario.nombre = nombre
        usuario.apellido = apellido
        usuario.correo = correo
        usuario.password = password
        usuario.telefono = telefono
        usuario.activo = activo
        
        usuario.save()
        
        self.response = {
            'message': 'Usuario guardado correctamente'
        }
        
