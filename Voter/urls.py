from .models import Voter
from . import views
from django.urls import include,path

urlpatterns = [
    path('', views.voter_view),
]



