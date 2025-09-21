from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name='home'),
    path('lista_projetos/', views.lista_projetos, name='lista_projetos'),
    path('projeto/<str:id_projeto>',views.detalhes_projeto,name='detalhes_projeto'),
    path('site/port/templates/index.html',views.home_english,name='english_home'),
]