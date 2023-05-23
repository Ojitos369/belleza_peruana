from django.urls import path, include

app_name = 'apis'
urlpatterns = [
    path('user/', include('apis.user.urls')),
]