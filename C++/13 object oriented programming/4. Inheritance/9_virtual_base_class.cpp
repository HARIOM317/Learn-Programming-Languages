#include <iostream>

using namespace std;

/*
    NOTE: A virtual base class in C++ is used in multiple inheritance to prevent multiple copies of a base class being inherited by the grandchild class.

                A
              /   \
             B     C
              \   /
                D

    ==> Virtual Base Class is used to resolve Diamond Problem occured by Multiple Inheritance in C++
*/

class A
{
public:
    int value;
    void show()
    {
        cout << "Value from A : " << value << endl;
    }
};

class B : virtual public A
{
};
class C : virtual public A
{
};

class D : public B, public C
{
public:
    void setValue(int v)
    {
        value = v; // ✅ No ambiguity — only ONE A exists now
    }

    void display()
    {
        show(); // ✅ No ambiguity
    }
};

int main()
{
    D obj;
    obj.setValue(50);
    obj.display();

    return 0;
}