import os
from django.contrib.auth.hashers import make_password
from app.core.bases.commands import MyBaseCommand, pj, pln, TF, get_d
from apis.models import User, UserPermisos

class Command(MyBaseCommand):
    def main(self, *args, **options):
        users = User.objects.filter(correo='admin@admin.com')
        if users:
            raise self.MYE('Ya se ha creado este usuario')
        user = User()
        user.nombre = 'admin'
        user.apellido = 'admin'
        user.correo = 'admin@admin.com'
        user.password = make_password('admin')
        user.telefono = None
        user.activo = True
        user.save()
        
        permiso = UserPermisos()
        permiso.user = user
        permiso.permiso = 'adm'
        permiso.save()

        print(f'Se creo el usuario Correctamente con 1 permiso')

