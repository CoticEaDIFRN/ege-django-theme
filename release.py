#!/usr/bin/env python
import argparse
import os


parser = argparse.ArgumentParser(description='release project')
parser.add_argument('version')
args = parser.parse_args()

with open('setup.py', 'w') as f:
    f.write("""# -*- coding: utf-8 -*-
import setuptools    
from distutils.core import setup
setup(
    name="ege_django_theme",
    description="EGE Django Theme",
    license='MIT',
    author="Luiz Antonio Freitas de Assis",
    author_email="luizvpc@gmail.com",
    url="https://github.com/CoticEaDIFRN/ege-django-theme",
    packages=['ege_django_theme', 'ege_django_theme/migrations', 'ege_django_theme/templates' ],
    include_package_data=True,
    # install_requires=[],
    version="%s",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ]
)
""" % (args.version,))

os.system("git add setup.py")
os.system("git commit -m 'Release %s'" % args.version)
os.system("git tag %s" % args.version)
os.system("git push --tags origin master")
os.system("python3 setup.py sdist")
os.system("python3 -m pip install --user --upgrade twine")
os.system("python3 -m twine upload dist/ege_django_theme-%s.tar.gz" % args.version)
