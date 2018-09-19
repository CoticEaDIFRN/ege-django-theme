# EGE Django Theme

```
pip install ege-django-theme
```

Adicione o aplicativo ao ```settings.py``` na variável de configuração ```INSTALLED_APPS``` antes das aplicações do django:

```
INSTALLED_APPS = 'ege_django_theme',
                 'django.contrib.admin',
                 'django.contrib.auth',
                 ......................
```

Ainda ao ```settings.py``` adicione/altere a variável ```STATIC_URL = '/static/admin/'```.

Em ```urls.py``` inclua a url do Tema:

```
from django.conf.urls import include,
.......

urlpatterns = [
    path('', include('ege_django_theme.urls')),
    ........
```
