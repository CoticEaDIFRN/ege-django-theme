# -*- coding: utf-8 -*-
import setuptools    
from distutils.core import setup
setup(
    name="ege_django_theme",
    description="EGE Django Theme",
    license='MIT',
    author="Luiz Antonio Freitas de Assis",
    author_email="luizvpc@gmail.com",
    url="https://github.com/CoticEaDIFRN/ege-django-theme",
    packages=['ege_django_theme', 'ege_django_theme/migrations', 'ege_django_theme/static', 'ege_django_theme/templates', 'ege_django_theme/templatetags'],
    include_package_data=True,
    # install_requires=[],
    version="0.4",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ]
)
