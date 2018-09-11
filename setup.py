import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="ege-django-theme",
    version="1",
    author="Luiz Antonio",
    author_email="luizvpc@gmail.com",
    description="EGE Django Theme",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/CoticEaDIFRN/ege-django-theme",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
)
