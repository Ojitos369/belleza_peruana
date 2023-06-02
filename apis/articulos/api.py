# Python
import os
import json

# Django
from django.forms.models import model_to_dict as md

# User
from app.core.bases.apis import PostApi, GetApi, NoSession, get_d, pln

# Models
from apis.articulos.models import Articulo
from apis.models import Category, CategoryArticulo


class ArticuloCreate(PostApi):
    def main(self):
        pln('ArticuloCreate')

        art = Articulo()
        art.titulo = get_d(self.data, 'titulo', default=None)
        art.descripcion = get_d(self.data, 'descripcion', default=None)
        art.url = get_d(self.data, 'url', default=None)
        art.precio = float(get_d(self.data, 'precio', default=0))
        art.cantidad = float(get_d(self.data, 'cantidad', default=0))
        art.save()
        
        old_cat_art = CategoryArticulo.objects.filter(articulo=art)
        for old in old_cat_art:
            old.delete()
        
        categorias = get_d(self.data, 'categorias', default=[])
        for cat in categorias:
            cat = cat.strip().lower()
            try:
                c = Category.objects.get(name=cat)
            except:
                c = Category()

            c.name = cat
            c.save()
            
            cat_art = CategoryArticulo()
            cat_art.articulo = art
            cat_art.category = c
            cat_art.save()

        model = md(art)
        model['categorias'] = categorias
        self.response = model
        


class ArticuloUpdate(PostApi):
    def main(self):
        pln('ArticuloUpdate')

        # from self.kwargs
        id = get_d(self.kwargs, 'art_id', default=None)
        art = Articulo.objects.get(id=id)
        art.titulo = get_d(self.data, 'titulo', default=art.titulo)
        art.descripcion = get_d(self.data, 'descripcion', default=art.descripcion)
        art.url = get_d(self.data, 'url', default=art.url)
        art.precio = float(get_d(self.data, 'precio', default=art.precio))
        art.cantidad = float(get_d(self.data, 'cantidad', default=art.cantidad))
        art.save()
        
        old_cat_art = CategoryArticulo.objects.filter(articulo=art)
        for old in old_cat_art:
            old.delete()
        
        categorias = get_d(self.data, 'categorias', default=[])
        for cat in categorias:
            cat = cat.strip().lower()
            try:
                c = Category.objects.get(name=cat)
            except:
                c = Category()
            
            c.name = cat
            c.save()
            
            cat_art = CategoryArticulo()
            cat_art.articulo = art
            cat_art.category = c
            cat_art.save()

        model = md(art)
        model['categorias'] = categorias
        self.response = model


class ArticuloList(NoSession, GetApi):
    def main(self):
        pln('ArticuloList')
        
        art = Articulo.objects.all()
        articulos = []
        for a in art:
            categories = CategoryArticulo.objects.filter(articulo=a)
            categorias = []
            
            for c in categories:
                categorias.append(c.category.name)
            
            model = md(a)
            model['categorias'] = categorias
            articulos.append(model)

        self.response = articulos


class ArticuloDetail(NoSession, GetApi):
    def main(self):
        pln('ArticuloDetail')

        id = get_d(self.kwargs, 'art_id', default=None)
        art = Articulo.objects.get(id=id)
        
        categories = CategoryArticulo.objects.filter(articulo=art)
        categorias = []
        
        for c in categories:
            categorias.append(c.category.name)
        
        model = md(art)
        model['categorias'] = categorias

        self.response = model


