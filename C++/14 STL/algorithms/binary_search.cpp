#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
    vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    cout << binary_search(v.begin(), v.end(), 5) << endl;

    return 0;
}