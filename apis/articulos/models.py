from django.db import models

class Articulo(models.Model):
    # Definir los campos del artículo
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    # Otros campos...

    def __str__(self):
        return self.titulo
