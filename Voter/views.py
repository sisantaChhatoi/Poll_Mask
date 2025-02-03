from django.shortcuts import render
# from rest_framework.renderers  import JSONRenderer
from rest_framework.decorators import  api_view,renderer_classes
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

# from django.utils.decorators import api_view()





# Create your views here.
@api_view(['GET'])
@renderer_classes([JSONRenderer])
def voter_view(request):
    from rest_framework import renderers
    return Response("POLL_MASK")