#include <iostream>

using namespace std;

int min(int a, int b)
{
    if (a < b)
    {
        return a;
    }
    else if (b < a)
    {
        return b;
    }
    else
    {
        return 0;
    }
}

int sumOfNNumbers(int n)
{
    int sum = 0;
    for (int i = 1; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}

int factorial(int n)
{
    int fact = 1;

    for (int i = 2; i <= n; i++)
    {
        fact *= i;
    }

    return fact;
}

int sumOfDigits(int n)
{
    int sum = 0;
    while (n > 0)
    {
        int lastDigit = n % 10;
        sum += lastDigit;
        n = n / 10;
    }

    return sum;
}

int nCr(int n, int r)
{
    return factorial(n) / (factorial(r) * factorial(n - r));
}

bool isPrime(int n)
{
    if (n < 2)
    {
        return false;
    }
    for (int i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}

void allPrimeNumbers(int n)
{
    for (int i = 2; i <= n; i++)
    {
        if (isPrime(i))
        {
            cout << i << " ";
        }
    }
    cout << endl;
}

int nthFibonacciTerm(int n)
{
    int t1 = 0, t2 = 1, nextTerm;

    if (n < 2)
    {
        return n;
    }

    for (int i = 2; i <= n; i++)
    {
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    return nextTerm;
}

int main()
{
    cout << "Min = " << min(8, 8) << endl;
    cout << "Sum of N Natural Numbers = " << sumOfNNumbers(5) << endl;
    cout << "Factorial = " << factorial(4) << endl;
    cout << "Sum of Digit = " << sumOfDigits(123) << endl;
    cout << "nCr = " << nCr(5, 2) << endl;
    cout << "Is Prime = " << (isPrime(7) ? "Yes" : "No") << endl;
    cout << "All Prime Numbers:  ";
    allPrimeNumbers(50);
    cout << "nth Fibonacci Term = " << nthFibonacciTerm(6) << endl;

    return 0;
}