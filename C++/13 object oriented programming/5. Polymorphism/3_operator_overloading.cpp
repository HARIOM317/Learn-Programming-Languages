#include <iostream>

using namespace std;

class Complex
{
    int real;
    int img;

public:
    Complex(int r, int i)
    {
        this->real = r;
        this->img = i;
    }

    void showNum()
    {
        if (img < 0)
        {
            cout << real << " - " << -img << "i" << endl;
        }
        else
        {
            cout << real << " + " << img << "i" << endl;
        }
    }

    // Operator overloading to add Complex Numbers
    Complex operator+(Complex &c2)
    {
        int resReal = this->real + c2.real;
        int resImg = this->img + c2.img;

        Complex c3(resReal, resImg);
        return c3;
    }

    // Operator overloading to subtract Complex Numbers
    Complex operator-(Complex &c2)
    {
        int resReal = this->real - c2.real;
        int resImg = this->img - c2.img;

        Complex c3(resReal, resImg);
        return c3;
    }
};

int main()
{
    Complex c1(5, 2);
    Complex c2(3, 4);

    c1.showNum();
    c2.showNum();

    Complex addition = c1 + c2;
    cout << "\nAddition : ";
    addition.showNum();

    Complex subtraction = c1 - c2;
    cout << "Subtraction : ";
    subtraction.showNum();

    return 0;
}