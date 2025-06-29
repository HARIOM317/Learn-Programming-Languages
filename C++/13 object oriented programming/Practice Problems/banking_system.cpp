#include <iostream>

using namespace std;

class Account
{
private:
    string accountHolder;
    int accountNumber;
    double balance;

public:
    // Constructor
    Account(string name, int accNo, double bal) : accountHolder(name), accountNumber(accNo), balance(bal) {}

    // to deposite money
    void deposite(double amount)
    {
        balance += amount;
        cout << "Deposited: Rs. " << amount << ", New Balance: " << balance << endl;
    }

    // to withdraw money
    void withdraw(double amount)
    {
        if (amount > balance)
        {
            cout << "Insufficient fund!\n";
        }
        else
        {
            balance -= amount;
            cout << "Withdrawn: Rs. " << amount << ", Remaining Balance: " << balance << endl;
        }
    }

    // to check balance
    void checkBalance()
    {
        cout << "Balance: Rs. " << balance << endl;
    }

    // to display account details
    void display() const
    {
        cout << "\nAccount : " << accountHolder << endl;
        cout << "Account Number : " << accountNumber << endl;
        cout << "Balance : " << balance << "\n\n";
    }
};

int main()
{
    Account acc1("Hariom", 1000995, 5000.00);

    acc1.display();
    acc1.deposite(2000);
    acc1.withdraw(1000);
    acc1.checkBalance();

    return 0;
}