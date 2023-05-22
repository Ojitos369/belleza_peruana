# Python
from datetime import datetime

# Django
from django.db import models


class User(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    correo = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    telefono = models.CharField(max_length=255)
    activo = models.BooleanField(default=True)
    
    class Meta:
        db_table = 'users'


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        db_table = 'categorias'


class Product(models.Model):
    name = models.CharField(max_length=255)
    photo = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)
    date_created = models.DateTimeField(default=datetime.now)
    
    class Meta:
        db_table = 'productos'


class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
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
    date_issued = models.DateTimeField(default=datetime.now)
    
    class Meta:
        db_table = 'ordenes'


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    # name = models.CharField(max_length=255)
    # price = models.DecimalField(max_digits=5, decimal_places=2)
    count = models.IntegerField()
    date_added = models.DateTimeField(default=datetime.now)
    
    class Meta:
        db_table = 'items_ordene'

    
class Adrress(models.Model):
    address_line_1 = models.CharField(max_length=255)
    address_line_2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=255)
    state_province_region = models.CharField(max_length=255)
    postal_zip_code = models.CharField(max_length=20)
    country_region = models.CharField(max_length=255)
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
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    cantidad = models.IntegerField(default=0)
    
    class Meta:
        db_table = 'wish_list'
