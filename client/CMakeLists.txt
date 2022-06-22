cmake_minimum_required(VERSION 3.6)

set(This "client")

set(Sources
    client.cpp
)

add_executable(
    ${This}
    ${Sources}
)

target_include_directories(${PROJECT_NAME} PUBLIC ${PROJECT_SOURCE_DIR}/lib)

target_link_libraries(
    ${This}
    PUBLIC
    ChessLib
)

add_test(
    NAME ${This}
    COMMAND ${This}
)