# Python
from datetime import datetime

# Django
from django.db import models
from django.utils import timezone

# User
from .articulos.models import Articulo


class User(models.Model):
    nombre = models.CharField(max_length=255, default=None, null=True, blank=True)
    apellido = models.CharField(max_length=255, default=None, null=True, blank=True)
    correo = models.CharField(max_length=255, default=None, null=True, blank=True)
    password = models.CharField(max_length=255, default=None, null=True, blank=True)
    telefono = models.CharField(max_length=255, default=None, null=True, blank=True)
    activo = models.BooleanField(default=True, null=True, blank=True)
    
    class Meta:
        db_table = 'users'


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    lower_name = models.CharField(max_length=255, unique=True, default=None, null=True, blank=True)

    class Meta:
        db_table = 'categorias'


class CategoryArticulo(models.Model):
    articulo = models.ForeignKey(Articulo, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'categorias_articulos'


class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    articulo = models.ForeignKey(Articulo, on_delete=models.CASCADE)
    count = models.IntegerField()
    
    class Meta:
        db_table = 'carritos'


class FixedPriceCoupon(models.Model):
    name = models.CharField(max_length=255, unique=True)
    discount_price = models.DecimalField(max_digits=5, decimal_places=2)
    
    class Meta:
        db_table = 'descuentos_precio'


class PercentageCoupon(models.Model):
    name = models.CharField(max_length=255, unique=True)
    discount_percentage = models.IntegerField()

    class Meta:
        db_table = 'descuentos_porcentaje'


class Order(models.Model):
    # status = models.CharField(max_length=50, choices=OrderStatus.choices, default=OrderStatus.not_processed)
    status = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction_id = models.CharField(max_length=255, unique=True)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    full_name = models.CharField(max_length=255)
    telephone_number = models.CharField(max_length=255)
    # shipping_name = models.CharField(max_length=255)
    # shipping_time = models.CharField(max_length=255)
    # shipping_price = models.DecimalField(max_digits=5, decimal_places=2)
    date_issued = models.DateTimeField(default=timezone.now)
    
    class Meta:
        db_table = 'ordenes'


class OrderItem(models.Model):
    articulo = models.ForeignKey(Articulo, on_delete=models.DO_NOTHING)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    # name = models.CharField(max_length=255)
    # price = models.DecimalField(max_digits=5, decimal_places=2)
    count = models.IntegerField()
    date_added = models.DateTimeField(default=timezone.now)
    
    class Meta:
        db_table = 'items_ordene'

    
class Adrress(models.Model):
    address_line_1 = models.CharField(max_length=255, default=None, null=True, blank=True)
    address_line_2 = models.CharField(max_length=255, default=None, null=True, blank=True)
    city = models.CharField(max_length=255, default=None, null=True, blank=True)
    state_province_region = models.CharField(max_length=255, default=None, null=True, blank=True)
    postal_zip_code = models.CharField(max_length=20, default=None, null=True, blank=True)
    country_region = models.CharField(max_length=255, default=None, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True


class DireccionCompra(Adrress):
    class Meta:
        db_table = 'direccion_compra'

class DireccionPago(Adrress):
    class Meta:
        db_table = 'direccion_pago'


class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    articulo = models.ForeignKey(Articulo, on_delete=models.CASCADE)
    cantidad = models.IntegerField(default=0)
    
    class Meta:
        db_table = 'wish_list'


class Sessions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    token = models.CharField(max_length=255)
    date_created = models.DateTimeField(default=timezone.now)
    
    class Meta:
        db_table = 'sesiones'


class UserPermisos(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    permiso = models.CharField(max_length=255)
    
    class Meta:
        db_table = 'permisos_usuarios'