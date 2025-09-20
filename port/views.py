from django.shortcuts import render
from .dados import habilidades, projetos

# Create your views here.
def home(request):
    return render(request, 'home.html', {'habilidades': habilidades})

def home_english(request):
    return render(request, 'index_english.html')

def lista_projetos(request):
    return render(request, 'projetos.html', {'projetos': projetos})

def detalhes_projeto(request, id_projeto):
    projeto = projetos.get(id_projeto)
    return render(request, 'detalhes_projeto.html', {'projeto':projeto})