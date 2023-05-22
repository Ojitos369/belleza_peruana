# Python
import os
import json

# Ojitos369
from ojitos369.utils import get_d

# User
from app.core.bases.apis import PostApi, GetApi

class HelloWorld(GetApi):
    def main(self):
        self.response = {
            'message': 'Hello World'
        }


class GuardarDatos(PostApi):
    def main(self):
        username = self.data['username']
        password = self.data['password']
        print(f'username: {username}')
        print(f'password: {password}')

        self.response = {
            'message': 'Datos guardados'
        }