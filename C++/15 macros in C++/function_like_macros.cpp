#include <iostream>
// function like macros
#define MAX(num1, num2) ((num1 > num2) ? num1 : num2)
#define PRINT(x) cout << "Value: " << x << endl

using namespace std;

int main()
{
    double a, b;
    cout << "Enter 2 numbers: ";
    cin >> a >> b;

    PRINT(a);
    PRINT(b);

    cout << "Max = " << MAX(a, b) << endl;

    return 0;
}