#include <iostream>

using namespace std;

class BankAccount
{
    long long accountNumber;
    static int balance;

public:
    BankAccount(long long accountNumber)
    {
        this->accountNumber = accountNumber;
    }

    void deposit(int amount)
    {
        balance += amount;
        cout << "Rs. " << amount << " deposited successfully!" << endl;
    }

    void withdraw(int amount)
    {
        if (amount <= balance)
        {
            balance -= amount;
            cout << "Withdrawn Rs. " << amount << endl;
            return;
        }
        cout << "Insufficient balance!" << endl;
    }

    int getBalance()
    {
        return this->balance;
    }
};

int BankAccount::balance = 0;

int main()
{
    BankAccount b1(978000125478);

    cout << "Balance : " << b1.getBalance() << "\n\n";

    b1.deposit(50000);
    b1.withdraw(30000);
    cout << "Balance : " << b1.getBalance() << "\n\n";

    b1.withdraw(25000);
    cout << "Balance : " << b1.getBalance() << "\n\n";

    b1.deposit(25000);
    cout << "Balance : " << b1.getBalance() << "\n\n";

    return 0;
}