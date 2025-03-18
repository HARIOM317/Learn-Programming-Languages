#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    vector<int> v2 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // reverse() - To reverse the vector or array
    reverse(v.begin(), v.end());

    reverse(v2.begin() + 2, v2.begin() + 7); // to reverse a range of vector only

    for (auto i : v)
    {
        cout << i << " ";
    }

    cout << "\nReverse Range: ";
    for (auto i : v2)
    {
        cout << i << " ";
    }

    return 0;
}