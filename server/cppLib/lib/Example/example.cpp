#include <pybind11/pybind11.h>
#include <iostream>

void printExample()
{
    std::cout << "print Example is working correctly" << std::endl;
}

// ----------------
// Python example
// ----------------

namespace py = pybind11;

PYBIND11_MODULE(example, m)
{
    m.doc() = "pybind11 example";
    m.def("printExample", &printExample, "prints an exemple");
}
