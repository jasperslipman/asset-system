from django.contrib import admin
from django.urls import path
from django.http import JsonResponse

def hello_api(request):
    return JsonResponse({"message": "Django + React, Working in harmony!"})

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/hello/', hello_api,) # API endpoint for testing 
]
