from django.urls import path, include
#aqui
from .articulos import views


app_name = 'apis'
urlpatterns = [
    path('user/', include('apis.user.urls')),
#aqui
    path('articulos/', views.ArticuloList.as_view(), name='articulo-list'),
    path('articulos/<int:pk>/', views.ArticuloDetail.as_view(), name='articulo-detail'),
    path('articulos/<int:pk>/update/', views.ArticuloUpdate.as_view(), name='articulo-update'),
    path('articulos/create/', views.ArticuloCreate.as_view(), name='articulo-create'),
]