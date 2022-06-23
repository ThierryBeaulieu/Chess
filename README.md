# Chess ♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖

Welcome to this chess project! If you want to install this project, you can clone it on your computer with:

```
git clone https://github.com/ThierryBeaulieu/Chess
```

Once that this is done, I invite you to continue your reading to learn more about the mains sections of this project.

## Overview

The project is divided into three main sections:

1. The C++ source code (model)
2. The Python source code for the server (controller)
3. The React front-end (view)

To make a long story short, the C++ source code serves as the backbone of the web application. C++ is used so that the object oriented development can be more easy that on Python where the concept of classes doesn't really exists.

The Python is used to make the link between the C++ model and the React front-end. Python is used because of the multiple libraries available. This makes it the right choice because it allows programmers to easly create a server and to bind its logic with C++ code.

React is used because it's well known and easy to learn. This makes it the right choice for what we need to do.

## The C++ source code

### Summary

In this first section, you will learn that the C++ source code serves as a model. The C++ code is develop as a library accessible to Python. The library uses [CMake](https://cmake.org/install/), a cross platform solution to generate Makefiles, Xcode projects, Visual studio solutions, etc. The main library ChessLib is tested via two executables:

- TestExecutable
- Chess

TestExecutable uses the Google Test as a framework to run its tests. Chess is only to verify that ChessLib is working as expected. If you want to contribute to the C++ source code, you should make the following installation.

### Prerequisites and installation

If you haven't already I encourage you to install this repository.

```
git clone https://github.com/ThierryBeaulieu/Chess
```

The project depends on [CMake](https://cmake.org/install/). For beginners, CMake can be used to generate Visual Studio solutions (Windows), projects for XCode (Mac), Makefiles (Linux), etc. You can generate and build your project from the platform that you want. I recommend you to download the CMake GUI if possible (it makes things that much easier!). Once you're done with that bit, you should also download or fork this github repository.

If you are using the CMake GUI, you need to select as a root:

```
Chess/server/cppLib/
```

After that, you need to specify the location of the build folder (this can be anywhere on your computer, but I recommend you keep it somewhat close, as this is where the generated files will end up). Let's say:

```
Chess/server/cppLib/build/
```

The last thing that you need to do is to specify your project's configuration. You should have a Chess game working on your computer.

## Python server

### Summary

In this first section, you will learn that the [Python](https://www.python.org/downloads/) server is used to create an http-server with [Flask](https://pypi.org/project/Flask/) framework. Python also uses [Pybind11](https://github.com/pybind/pybind11) to make the C++ code accessible to Python.

### Prerequisites and installation

If you haven't already I encourage you to install this repository.

```
git clone https://github.com/ThierryBeaulieu/Chess
```

Once that this is doen, you will need to install the Python requirements contained in the requirements.txt file.

First, let's create a server repository:

```
Chess>cd server
Chess\server>cd ChessServer
Chess\server\ChessServer>mkdir python_venv
```

Then, we will need to create a virtual envrionnement:

```
Chess\server\ChessServer>python -m venv python_venv\venv
```

You should be able to activate your virtual environnement using the following command:

```
Chess\server\ChessServer>python_venv\venv\Scripts\activate
```

We are now able to install the requirements:

```
(venv) Chess\server\ChessServer>pip install -r requirements.txt
```

You should now be able to see the same dependencies contained in the requirements.txt file using the command line:

```
(venv) Chess\server\ChessServer>pip list
```

If the libraries are correctly installed, you can close the command line window or use deactivate your virtual environnement.

```
(venv) Chess\server\ChessServer>deactivate
```

### Running your code

For running the python web server, you will first need to activate the virtual envrionnement if it's not already done. Once that this is done, you should be able to execute ```app.py```.

```
Chess\server\ChessServer>python_venv/venv/Scripts/activate
(venv) Chess\server\ChessServer> python app.py
```

You should now be able to connect yourself to the localhost written in the terminal.

# React front-end

### Summary

React is a powerfull front-end library used for web developpment. This section isn't started yet, but it will be soon.

### Prerequisites and installation

React depends on [Node.js](https://nodejs.org/en/download/). Once that this is done, you should be able to have access to npm. A [React](https://reactjs.org/docs/getting-started.html) project should already be present. You will simply need to install its dependencies.

To start the front-end, you can use the following command in your terminal:

```
Chess>cd client
Chess\client>npm start
```

The front-end server should be running accordingly.
