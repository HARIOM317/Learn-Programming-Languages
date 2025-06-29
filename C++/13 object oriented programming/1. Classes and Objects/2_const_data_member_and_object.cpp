#include <iostream>
using namespace std;

class Demo
{
public:
    const int data;
    Demo(int x) : data(x)
    {
        cout << "The value of data: " << x << endl;
    }
};
int main()
{
    Demo obj(10);
    // obj.data = 5; // it shows an error.

    const Demo obj2(20);
    return 0;
}