from django.shortcuts import render
from django.http import HttpResponse
from .models import Input
from django.template import loader


def index(request):
    input = Input.objects.all()
    template = loader.get_template('admin')
    context = {
        'input': input,
    }
    return HttpResponse(template.render(context, request))
