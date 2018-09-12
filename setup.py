# -*- coding: utf-8 -*-
import setuptools    
from distutils.core import setup
setup(
    name="ege_django_theme",
    package_data={'ege_django_theme': [
        'ege_django_theme/*',
        'ege_django_theme/migrations/*',
        'ege_django_theme/templates/*'
    ],},
    version="0.2.1",
    author="Luiz Antonio Freitas de Assis",
    author_email="luizvpc@gmail.com",
    description="EGE Django Theme",
    url="https://github.com/CoticEaDIFRN/ege-django-theme",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ]
)
