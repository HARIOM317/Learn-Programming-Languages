#include <iostream>
#include <vector>

using namespace std;

int factorial(int n)
{
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

int powerOf2(int n)
{
    if (n == 0)
        return 1;
    return 2 * powerOf2(n - 1);
}

// tail recursion (Print number in decreasing order)
void printDecreasingNumbers(int n)
{
    // base case
    if (n == 0)
        return;

    // processing
    cout << n << " ";

    // recursive relation
    printDecreasingNumbers(n - 1);
}

// head recursion (Print number in increasing order)
void printIncreasingNumbers(int n)
{
    // base case
    if (n == 0)
        return;

    // recursive relation
    printIncreasingNumbers(n - 1);

    // processing
    cout << n << " ";
}

int fibonacciSeries(int n)
{
    if (n == 0 || n == 1)
        return n;
    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
}

void extractDigits(int n)
{
    string numbers[10] = {"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};

    if (n == 0)
        return;

    extractDigits(n / 10);

    int digit = n % 10;
    cout << numbers[digit] << "\t" << digit << "\n";
}

int main()
{
    int n = 5;
    cout << "Factorial = " << factorial(n) << endl;
    cout << "Power of 2: " << powerOf2(n) << endl;

    cout << "\nDecreasing Numbers: ";
    printDecreasingNumbers(n);

    cout << "\nIncreasing Numbers: ";
    printIncreasingNumbers(n);

    cout << "\n\nnth fibonacci number: " << fibonacciSeries(n) << endl;

    int n2 = 1002003;
    cout << "\nDigits in number " << n2 << " are:" << endl;
    extractDigits(n2);

    return 0;
}