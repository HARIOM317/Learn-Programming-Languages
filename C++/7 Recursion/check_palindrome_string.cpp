#include <iostream>

using namespace std;

bool isStringPalindrome(string str, int start, int end)
{
    if (str[start] != str[end])
        return false;
    if (start > end)
        return true;
    return isStringPalindrome(str, start + 1, end - 1);
}

int main()
{
    string str = "abcdcba";
    cout << "String: " << str << endl;

    cout << "Is Palindrome: " << (isStringPalindrome(str, 0, str.length() - 1) ? "Yes" : "No") << endl;

    return 0;
}