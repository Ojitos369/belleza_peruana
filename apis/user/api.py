# Python
import os
import json

# Django
from django.contrib.auth.hashers import make_password, check_password
from django.forms.models import model_to_dict as md

# User
from app.core.bases.apis import PostApi, GetApi, get_d, pln

# Models
from apis.models import User, Sessions
from app.core.tools.functions import generate_token

class GuardarUsuario(PostApi):
    def main(self):
        pln('GuardarUsuario')
        nombre = get_d(self.data, 'nombre', default=None)
        apellido = get_d(self.data, 'apellido', default=None)
        correo = get_d(self.data, 'correo', default=None)
        password = get_d(self.data, 'password', default=None)
        telefono = get_d(self.data, 'telefono', default=None)
        activo = True
        
        users = User.objects.filter(correo=correo)
        if users:
            raise self.MYE('Ya existe un usuario con ese correo')
        
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
        

class Login(PostApi):
    def main(self):
        pln('Login')
        correo = get_d(self.data, 'correo', default=None)
        password = get_d(self.data, 'password', default='')

        users = User.objects.filter(correo=correo, activo=True)
        if not users:
            self.status = 400
            self.response = {
                'message': 'Usuario o contraseña incorrectos'
            }
            return
        user = users[0]
        if not check_password(password, user.password):
            self.status = 400
            self.response = {
                'message': 'Usuario o contraseña incorrectos'
            }
            return
        token = generate_token()
        
        sesion = Sessions()
        sesion.user = user
        sesion.token = token
        sesion.save()
        del user.password
        del user.activo
        user = md(user)
        user['token'] = token
        
        self.response = {
            'user': user
        }
        
        