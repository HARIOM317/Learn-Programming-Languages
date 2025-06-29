#include <bits/stdc++.h>

using namespace std;

class Library
{
public:
    string books[100];
    int noOfBooks = 0;

    Library()
    {
        string defaultBooks[] = {"Advanced Java", "Python", "Zero to One", "Let's code", "OOPs"};

        for (int i = 0; i < 5; i++)
        {
            books[i] = defaultBooks[i];
            noOfBooks++;
        }
    }
};

class Book : public Library
{
public:
    void addBook(string bookName)
    {
        this->books[noOfBooks] = bookName;
        noOfBooks++;
        cout << "Successufully added Book (" << bookName << ")" << endl;
    }

    void showBooks()
    {
        if (noOfBooks == 0)
        {
            cout << "\nSorry, No any book available!\n"
                 << endl;
        }
        else
        {
            cout << "\n\n_____ Available Books _____\n\n";
            int n = 1;
            for (int i = 0; i < noOfBooks; i++)
            {
                if (books[i] == "")
                {
                    continue;
                }
                cout << n << ". " << books[i] << endl;
                n++;
            }
            cout << endl;
        }
    }

    void issueBook(string bookName, string studentName)
    {
        for (int i = 0; i < noOfBooks; i++)
        {
            if (this->books[i] == "")
            {
                continue;
            }
            if (this->books[i] == bookName)
            {
                cout << "Book (" << bookName << ") issued ---> " << studentName << "" << endl;
                this->books[i] = "";
                return;
            }
        }
        cout << "Sorry, book " << bookName << " is currently not available!" << endl;
    }

    void returnBook(string bookName, string studentName)
    {
        this->books[noOfBooks] = bookName;
        noOfBooks++;
        cout << studentName << " Returned ---> " << "Book (" + bookName << ")" << endl;
    }
};

int main()
{
    Book b1;
    b1.showBooks();
    b1.addBook("The power of Bhagvat Geeta");
    b1.addBook("The History of India");
    b1.addBook("Quantum Physics");
    b1.showBooks();

    b1.issueBook("Python", "Abhishek");
    b1.issueBook("OOPs", "Hariom");
    b1.showBooks();

    b1.returnBook("OOPs", "Hariom");
    b1.showBooks();

    return 0;
}