#include <iostream>

using namespace std;

int main()
{
    // With char array
    char sentence[100];
    cout << "Enter a sentence : ";
    cin.getline(sentence, 100, '.'); // sentence ends with '.'
    cout << "Sentence : " << sentence << endl;

    // With string
    string str;
    cout << "\nEnter a string : ";
    getline(cin, str, '.');
    cout << "String = " << str << endl;

    return 0;
}