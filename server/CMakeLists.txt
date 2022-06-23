cmake_minimum_required(VERSION 3.6)

set(This "server")

set(Sources
    server.cpp
)

set(Header
    httplib.h
)

add_executable(
    ${This}
    ${Sources}
    ${Headers}
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