#include <iostream>

using namespace std;

class A
{
    // Empty class (class size = 1 byte)
};

class B
{
    // property
    int size; // size = 4 bytes
};

class C
{
    // properties (Total size: 12 bytes)
    int size;     // 4 bytes
    char gender;  // 1 byte + 3 byte padding
    float height; // 4 bytes
};

class D
{
    // class size = 1 byte
public:
    // Behaviour (No size)
    void dance()
    {
        cout << "I can dance" << endl;
    }
    void play()
    {
        cout << "I can play" << endl;
    }
};

class E
{
    // properties (Total size: 32 bytes)

    int size; // 4 bytes

    char gender; // 1 byte + 3 bytes padding (to align next data)

    char firstName[8]; // 8 bytes (naturally aligned, no padding needed)

    char lastName[10]; // 10 bytes + 2 bytes padding (to align next float height)

    float height; // 4 bytes (aligned correctly, uses the padding above)

    float weight; // 4 bytes

public:
    // Behaviour (No size in object; stored in code segment)
    void dance()
    {
        cout << "I can dance" << endl;
    }
    void play()
    {
        cout << "I can play" << endl;
    }
};

int main()
{
    A a;
    B b;
    C c;
    D d;
    E e;

    cout << "Size of empty class A : " << sizeof(a) << endl;
    cout << "Size of class B with one variable : " << sizeof(b) << endl;
    cout << "Size of class C with many variable : " << sizeof(c) << endl;
    cout << "Size of class D with behaviour/methods : " << sizeof(d) << endl;
    cout << "Size of class E with properties and behaviour : " << sizeof(e) << endl;

    return 0;
}