#include <iostream>
#include <vector>
#include <tuple>

using namespace std;

int main()
{
    // __________ Example - 1 __________
    vector<tuple<int, string, float>> students; // to store {roll number, student name, marks}

    tuple<int, string, float> s1 = make_tuple(1, "Abhishek Mewada", 88.12);
    tuple<int, string, float> s2 = make_tuple(2, "Hariom Mewada", 98.87);
    tuple<int, string, float> s3 = make_tuple(3, "Pooja Mewada", 96.95);

    students.push_back(s1);
    students.push_back(s2);
    students.push_back(s3);

    for (auto student : students)
    {
        cout << get<0>(student) << "\t" << get<1>(student) << "\t\t" << get<2>(student) << endl;
    }

    // __________ Example - 2 __________
    tuple<int, double, string> myTuple = make_tuple(42, 2.718, "Unpacking Tuples");

    int a;
    double b;
    string c;

    // Unpack tuple into variables
    tie(a, b, c) = myTuple;

    cout << "\nDecompose tuple using using tie() method:" << endl;
    cout << "a = " << a << ", b = " << b << ", c = " << c << endl;

    /*
    // __________ Example - 3 __________
    tuple<int, double, string> myTuple2(42, 2.718, "Structured Bindings");

    // Unpack tuple into variables (NOTE - Work with only C++17 or later version)
    auto [p, q, r] = myTuple2;
    cout << "\nDecompose tuple using structured bindings:" << endl;
    cout << "p = " << p << ", q = " << q << ", r = " << r << endl;
    */

    return 0;
}