cmake_minimum_required(VERSION 3.0)

set(This Chess)
project(${This} C CXX)

# Set the build directory
set(CMAKE_C_STANDARD 99)
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_POSITION_INDEPENDENT_CODE ON)

# Indicates the conguration type of the project.
message("Generated with config types: ${CMAKE_CONFIGURATION_TYPES}")

# subdirectorys
add_subdirectory(src)
add_subdirectory(lib)
add_subdirectory(tests)
add_subdirectory(server)

# Google Test
enable_testing()

include(FetchContent)

FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/609281088cfefc76f9d0ce82e1ff6c30cc3591e5.zip
)

set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)

FetchContent_MakeAvailable(googletest)

