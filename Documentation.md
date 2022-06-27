# Introduction

The project is divided into three main sections:

1. [The C++ source code (model)](https://github.com/ThierryBeaulieu/Chess/blob/dev/Documentation.md#the-c-source-code-model)
2. [The Python source code for the server (controller)](https://github.com/ThierryBeaulieu/Chess/blob/dev/Documentation.md#the-python-source-code-for-the-server-controller)
3. [The React front-end (view)](https://github.com/ThierryBeaulieu/Chess/blob/dev/Documentation.md#the-react-front-end-view)

To make a long story short, the C++ source code serves as the backbone of the web application. C++ is used so that the object oriented development can be more easy that on Python where the concept of classes doesn't really exists.

The Python is used to make the link between the C++ model and the React front-end. Python is used because of the multiple libraries available. This makes it the right choice because it allows programmers to easly create a server and to bind its logic with C++ code.

React is used because it's well known and easy to learn. This makes it the right choice for what we need to do.

## The C++ source code (model)


In this first section, you will learn that the C++ source code serves as a model. The C++ code is develop as a library accessible to Python. The library uses [CMake](https://cmake.org/install/), a cross platform solution to generate Makefiles, Xcode projects, Visual studio solutions, etc. The main library ChessLib is tested via two executables:

- TestExecutable
- Chess

TestExecutable uses the Google Test as a framework to run its tests. Chess is only to verify that ChessLib is working as expected. If you want to contribute to the C++ source code, you will need to run the executable Chess without the macro PYBIND. This can be done in the main.cpp or in the CMakeLists.txt file in the ```server/``` directory.

## The Python source code for the server (controller)

In this first section, you will learn that the [Python](https://www.python.org/downloads/) server is used to create an http-server with [Flask](https://pypi.org/project/Flask/) framework. Python also uses [Pybind11](https://github.com/pybind/pybind11) to make the C++ code accessible to Python.

## The React front-end (view)

React is a powerfull front-end library used for web developpment. This section isn't started yet, but it will be soon.


