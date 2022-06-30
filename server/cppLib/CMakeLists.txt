cmake_minimum_required(VERSION 3.6)

# activate PYBIND macro for C++
add_compile_definitions(PYBIND)

# set the path of the output library
# set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/server/flask/)

# Set the build directory
set(CMAKE_C_STANDARD 99)
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

# This macro defines DEBUG
add_compile_definitions(DEBUG)

# verify if the generator can create multiple executables.
if(NOT SET_UP_CONFIGURATIONS_DONE)
    set(SET_UP_CONFIGURATIONS_DONE TRUE)

    # the generator needs to be a multiconfig generator
    get_property(isMultiConfig GLOBAL PROPERTY GENERATOR_IS_MULTI_CONFIG)
    if(isMultiConfig)
        set(CMAKE_CONFIGURATION_TYPES "Debug;Release;" CACHE STRING "" FORCE) 
    else()
        if(NOT CMAKE_BUILD_TYPE)
        message( FATAL_ERROR "CMake will exit, the generator is not a multiconfig generator")
        endif()
        set_property(CACHE CMAKE_BUILD_TYPE PROPERTY HELPSTRING "Choose the type of build")
        # set the valid options for cmake-gui drop-down list
        set_property(CACHE CMAKE_BUILD_TYPE PROPERTY STRINGS "Debug;Release;")
    endif()
    # now set up the Profile configuration
    set(CMAKE_C_FLAGS_PROFILE "...")
    set(CMAKE_CXX_FLAGS_PROFILE "...")
    set(CMAKE_EXE_LINKER_FLAGS_PROFILE "...")
endif()

# Indicates the conguration type of the project.
message("Generated with config types: ${CMAKE_CONFIGURATION_TYPES}")

# subdirectorys
add_subdirectory(src)
add_subdirectory(lib)
add_subdirectory(tests)

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
add_subdirectory(${PROJECT_SOURCE_DIR}/server/cppLib/externals/pybind11)

pybind11_add_module(example ${PROJECT_SOURCE_DIR}/server/cppLib/lib/Example/example.cpp)