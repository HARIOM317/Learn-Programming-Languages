#include <iostream>

using namespace std;

class A
{
private:
    string secret = "secret data";

    friend void revealSecret(A &obj); // making reveal secret friend function
};

// friend function
void revealSecret(A &obj)
{
    cout << "Secret is : " << obj.secret << endl;
}

int main()
{
    A a1;
    revealSecret(a1);

    return 0;
}