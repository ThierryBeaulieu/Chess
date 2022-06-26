cmake_minimum_required(VERSION 3.6)

set(This Chess)
project(${This} C CXX)

# Set the build directory
set(CMAKE_C_STANDARD 99)
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

# set config types
set(CMAKE_CONFIGURATION_TYPES "Debug;Release;" CACHE STRING "" FORCE)

# Indicates the conguration type of the project.
message("Generated with config types: ${CMAKE_CONFIGURATION_TYPES}")

# subdirectorys
add_subdirectory(src)
add_subdirectory(lib)
add_subdirectory(tests)

# Default executable project is Chess on Visual Studio
set_property(DIRECTORY PROPERTY VS_STARTUP_PROJECT ${This})

# Google Test
enable_testing()

include(FetchContent)

# also possible to use an old archive file with following URL:
# URL https://github.com/google/googletest/archive/609281088cfefc76f9d0ce82e1ff6c30cc3591e5.zip
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/refs/heads/main.zip
)

set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)

FetchContent_MakeAvailable(googletest)

# pybind11
add_subdirectory(${PROJECT_SOURCE_DIR}/externals/pybind11)

pybind11_add_module(example ${PROJECT_SOURCE_DIR}/lib/Example/example.cpp)
