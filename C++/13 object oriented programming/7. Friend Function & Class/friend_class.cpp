#include <iostream>

using namespace std;

class A
{
private:
    string secret = "secret data";
    friend class B; // making class B friend class of A
};

class B
{
public:
    void showSecret(A &obj)
    {
        // can access private data (because it is now friend class of A)
        cout << obj.secret << endl;
    }
};

int main()
{
    A a1;
    B b1;

    b1.showSecret(a1);

    return 0;
}