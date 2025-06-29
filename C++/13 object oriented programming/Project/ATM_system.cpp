#include <iostream>
#include <fstream>
#include <unordered_map>
#include <string>
using namespace std;

class UserAccount
{
private:
    string name;
    int pin;
    double balance;

public:
    UserAccount(string name = "", int pin = 0, double bal = 0.0) : name(name), pin(pin), balance(bal) {}

    bool verifyPIN(int enteredPIN)
    {
        return enteredPIN == pin;
    }

    void deposit(double amount)
    {
        balance += amount;
        cout << "Deposit successful. New balance: ₹" << balance << endl;
    }

    void withdraw(double amount)
    {
        if (amount > balance)
        {
            cout << "Insufficient balance.\n";
        }
        else
        {
            balance -= amount;
            cout << "Withdrawal successful. New balance: ₹" << balance << endl;
        }
    }

    void showBalance()
    {
        cout << "Current Balance: ₹" << balance << endl;
    }

    string getName() const
    {
        return name;
    }

    double getBalance() const
    {
        return balance;
    }

    int getPIN() const
    {
        return pin;
    }

    string serialize() const
    {
        return name + "," + to_string(pin) + "," + to_string(balance);
    }

    static UserAccount deserialize(const string &line)
    {
        string name;
        int pin;
        double balance;

        size_t pos1 = line.find(',');
        size_t pos2 = line.rfind(',');

        name = line.substr(0, pos1);
        pin = stoi(line.substr(pos1 + 1, pos2 - pos1 - 1));
        balance = stod(line.substr(pos2 + 1));

        return UserAccount(name, pin, balance);
    }
};

class ATMSystem
{
private:
    unordered_map<int, UserAccount> users;
    const string dataFile = "users.txt";

    void loadUsers()
    {
        ifstream file(dataFile);
        string line;
        while (getline(file, line))
        {
            UserAccount u = UserAccount::deserialize(line);
            users[u.getPIN()] = u;
        }
    }

    void saveUsers()
    {
        ofstream file(dataFile);
        for (const auto &pair : users)
        {
            file << pair.second.serialize() << endl;
        }
    }

public:
    ATMSystem()
    {
        loadUsers();
    }

    ~ATMSystem()
    {
        saveUsers();
    }

    void mainMenu()
    {
        int choice;
        do
        {
            cout << "\n----- ATM SYSTEM -----\n";
            cout << "1. Login\n";
            cout << "2. Register\n";
            cout << "3. Exit\n";
            cout << "Enter choice: ";
            cin >> choice;

            if (choice == 1)
                login();
            else if (choice == 2)
                registerUser();
        } while (choice != 3);
    }

    void registerUser()
    {
        string name;
        int pin;
        cout << "Enter name: ";
        cin >> name;
        cout << "Set 4-digit PIN: ";
        cin >> pin;

        if (users.find(pin) != users.end())
        {
            cout << "PIN already exists!\n";
            return;
        }

        users[pin] = UserAccount(name, pin, 0.0);
        cout << "Registration successful!\n";
    }

    void login()
    {
        int pin;
        cout << "Enter PIN: ";
        cin >> pin;

        if (users.find(pin) == users.end())
        {
            cout << "Invalid PIN!\n";
            return;
        }

        UserAccount &user = users[pin];
        userMenu(user);
    }

    void userMenu(UserAccount &user)
    {
        int choice;
        do
        {
            cout << "\nWelcome, " << user.getName() << endl;
            cout << "1. Check Balance\n2. Deposit\n3. Withdraw\n4. Logout\n";
            cout << "Enter choice: ";
            cin >> choice;

            if (choice == 1)
                user.showBalance();
            else if (choice == 2)
            {
                double amt;
                cout << "Enter amount: ";
                cin >> amt;
                user.deposit(amt);
            }
            else if (choice == 3)
            {
                double amt;
                cout << "Enter amount: ";
                cin >> amt;
                user.withdraw(amt);
            }
        } while (choice != 4);
    }
};

int main()
{
    ATMSystem atm;
    atm.mainMenu();
    return 0;
}
