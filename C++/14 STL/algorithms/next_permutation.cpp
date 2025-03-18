#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    string s1 = "abc";
    string s2 = "abc";

    next_permutation(s1.begin(), s1.end());
    cout << "Next Permutation: " << s1 << endl;

    prev_permutation(s2.begin(), s2.end());
    cout << "Previous Permutation: " << s2 << endl;

    return 0;
}