int n;
    cout << "Enter a number: ";
    cin >> n;

    cout << "Reverse = " << reverse(n) << endl;
    cout << "Power of 2 = " << (powerOf2(n) == 1 ? "Yes" : "No") << endl;

    cout << "Fibonacci Series: " << endl;
    printFibonacci(n);

    cout << "\nNext Fibonacci Term = " << nextFibonacciTerm(n) << endl;

    cout << "Is Prime Number: " << (isPrime(n) ? "Yes" : "No") <