cmake_minimum_required(VERSION 3.0)

set(This "TestExecutable")

set(Sources
    test.cpp
)

add_executable(
    ${This}
    ${Sources}
)

target_include_directories(${PROJECT_NAME} PUBLIC ${PROJECT_SOURCE_DIR}/lib)

target_link_libraries(
    ${This}
    PUBLIC
    gtest_main
    ChessLib
)

add_test(
    NAME ${This}
    COMMAND ${This}
)