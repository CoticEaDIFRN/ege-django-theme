#!/usr/bin/env bash

if [ $# -eq 0 ]
  then
    echo "NAME
       release

SYNOPSIS
       ./release.sh [-d|-p|-g] <version>

DESCRIPTION
       Create a new release to ege_theme python package.

OPTIONS
       -d         Deploy to Github and PyPI
       -p         Deploy to PyPI
       -g         Deploy to Github
       <version>  Release version number

EXAMPLES
       o   Build to local usage only:
                  ./release.sh 1.1
       o   Build and deploy to both Github and PyPI:
                  ./release.sh -d 1.1
       o   Build and deploy to PyPI only:
                  ./release.sh -p 1.1
       o   Build and deploy to Github only:
                  ./release.sh -g 1.1
"
fi


create_setup_cfg_file() {
    echo """# -*- coding: utf-8 -*-
from distutils.core import setup
setup(
    name='ege_theme',
    description='EGE Theme',
    long_description='EGE Theme',
    license='MIT',
    author='Luiz Antonio Freitas de Assis',
    author_email='luizvpc@gmail.com',
    packages=['ege_theme', 'ege_theme/migrations', 'ege_theme/static', 'ege_theme/templates', 'ege_theme/templatetags'],
    include_package_data=True,
    version='$1',
    download_url='https://github.com/CoticEaDIFRN/ege_theme/releases/tag/$1',
    url='https://github.com/CoticEaDIFRN/ege_theme',
    keywords=['EGE', 'JWT', 'Django', 'Auth', 'SSO', 'client', ],
    # install_requires=['PyJWT==1.7.1', 'requests==2.21.0', 'django>=2.0,<3.0'],
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ]
)
""" > setup.py
    docker build -t ifrn/ege.theme --force-rm .
    docker run --rm -it -v `pwd`:/src ifrn/ege.theme python setup.py sdist
}

if [[ $# -eq 1 ]]
  then
    echo "Build to local usage only. Version: $1"
    echo ""
    create_setup_cfg_file $1
fi

if [[ $# -eq 2 ]] && [[ "$1" == "-d" || "$1" == "-g" || "$1" == "-p" ]]
  then
    echo "Build to local. Version: $2"
    echo ""
    create_setup_cfg_file $2

    if [[ "$1" == "-d" || "$1" == "-g" ]]
      then
        echo ""
        echo "GitHub: Pushing"
        echo ""
        git add setup.py
        git commit -m "Release $2"
        git tag $2
        git push --tags origin master
    fi

    if [[ "$1" == "-d" || "$1" == "-p" ]]
      then
        echo ""
        echo "PyPI Hub: Uploading"
        echo ""
        docker run --rm -it -v `pwd`:/src ifrn/ege.theme twine upload dist/ege_theme-$2.tar.gz
    fi
fi

echo ""
echo "Done."
