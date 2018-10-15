# EGE Django Theme

```
pip install ege-django-theme
```

Em ```settings.py```:

  1. Adicione a aplicação,```ege_django_theme```, à variável de configuração ```INSTALLED_APPS``` antes das aplicações do django:

  ```
  INSTALLED_APPS = 'ege_django_theme',
                   'django.contrib.admin',
                   'django.contrib.auth',
                   ......................
  ```
  2. Adicione ```libraries``` às ```OPTIONS``` da variável ```TEMPLATES```:
  
  ```
  TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        .................
        'OPTIONS': {
            'context_processors': [
            ....................
            ],
            'libraries': {
                'common_utils': 'my_admin.templatetags.common_utils',
            },
        },
    },
  ]
  ```
  
Certifique-se de que está setada a variável ```STATIC_URL = '/static/'```.
