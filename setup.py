# -*- coding: utf-8 -*-
import setuptools    
from distutils.core import setup
setup(
    name="ege-django-theme",
    package_data={'ege-django-theme': [
        'ege-django-theme/*',
        'ege-django-theme/migrations/*',
        'ege-django-theme/templates/*'
    ],},
    version="0.2",
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
