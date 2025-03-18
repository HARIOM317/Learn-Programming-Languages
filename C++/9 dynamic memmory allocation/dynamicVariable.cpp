#include <iostream>

using namespace std;

int main()
{
    int *n = new int;
    char *ch = new char;
    double *f = new double;

    cout << "Enter value of n, ch and f: ";

    cin >> *n >> *ch >> *f;

    cout << "n = " << *n << endl;
    cout << "ch = " << *ch << endl;
    cout << "f = " << *f << endl;

    // release variables memory from heap
    delete n;
    delete ch;
    delete f;

    // setting null pointers
    n = nullptr;
    ch = nullptr;
    f = nullptr;

    // trying to print after memory release - print garbage values
    cout << "\nAfter release memory-" << endl;
    cout << "n = " << *n << endl;
    cout << "ch = " << *ch << endl;
    cout << "f = " << *f << endl;

    return 0;
}