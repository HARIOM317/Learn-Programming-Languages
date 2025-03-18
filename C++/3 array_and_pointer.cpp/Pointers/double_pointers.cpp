#include <iostream>

using namespace std;

int main()
{
    int a = 50;
    int *ptr1 = &a;
    int **ptr2 = &ptr1;
    int ***ptr3 = &ptr2;
    int ****ptr4 = &ptr3;

    cout << "ptr1 = " << ptr1 << endl;
    cout << "ptr2 = " << ptr2 << endl;
    cout << "ptr3 = " << ptr3 << endl;
    cout << "ptr4 = " << ptr4 << endl
         << endl;

    cout << "*ptr1 = " << *ptr1 << endl;
    cout << "*ptr2 = " << *ptr2 << endl;
    cout << "*ptr3 = " << *ptr3 << endl;
    cout << "*ptr4 = " << *ptr4 << endl
         << endl;

    cout << "**ptr2 = " << **ptr2 << endl;
    cout << "**ptr3 = " << **ptr3 << endl;
    cout << "**ptr4 = " << **ptr4 << endl
         << endl;

    cout << "***ptr3 = " << ***ptr3 << endl;
    cout << "***ptr4 = " << ***ptr4 << endl
         << endl;

    cout << "****ptr4 = " << ****ptr4 << endl
         << endl;

    return 0;
}