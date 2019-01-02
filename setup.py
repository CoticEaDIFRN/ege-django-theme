# -*- coding: utf-8 -*-
from distutils.core import setup
setup(
    name='ege_django_theme',
    description='EGE Django Theme',
    long_description='EGE Django Theme',
    license='MIT',
    author='Luiz Antonio Freitas de Assis',
    author_email='luizvpc@gmail.com',
    packages=['ege_django_theme', 'ege_django_theme/migrations', 'ege_django_theme/static', 'ege_django_theme/templates', 'ege_django_theme/templatetags'],
    include_package_data=True,
    version='0.4.8',
    download_url='https://github.com/CoticEaDIFRN/ege_django_theme/releases/tag/0.4.8',
    url='https://github.com/CoticEaDIFRN/ege_django_theme',
    keywords=['EGE', 'JWT', 'Django', 'Auth', 'SSO', 'client', ],
    # install_requires=['PyJWT==1.7.1', 'requests==2.21.0', 'django>=2.0,<3.0'],
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ]
)

