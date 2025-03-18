#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

// custom comparator function to sort vector of pair on the basis of second element of pair in the ascending order
bool customComparator(pair<int, int> p1, pair<int, int> p2)
{
    if (p1.second < p2.second)
        return true;

    if (p1.second > p2.second)
        return false;

    if (p1.first < p2.first)
        return true;

    else
        return false;
}

int main()
{
    int arr[5] = {4, 8, 9, 2, 6};
    vector<int> v = {10, 15, 11, 18, 20, 35, 5, 25};
    vector<pair<int, int>> vp = {{3, 1}, {2, 1}, {7, 1}, {5, 2}}; // vector of pair

    sort(arr, arr + 5);
    sort(v.begin(), v.end());

    cout << "Sorted Array: ";
    for (auto i : arr)
    {
        cout << i << " ";
    }

    cout << "\nSorted Vector: ";
    for (auto i : v)
    {
        cout << i << " ";
    }

    sort(arr, arr + 5, greater<int>()); // To sort in descending order

    cout << "\nSorted Array in Descending Order: ";
    for (auto i : arr)
    {
        cout << i << " ";
    }

    sort(vp.begin(), vp.end()); // sort elements on the basis of first value of the pair
    cout << "\n\nSorted Vector Pairs on the basis of first element of the pair: \n";
    for (auto p : vp)
    {
        cout << "{" << p.first << ", " << p.second << "}" << endl;
    }

    sort(vp.begin(), vp.end(), customComparator); // sort elements on the basis of first value of the pair
    cout << "\n\nSorted Vector Pairs on the basis of second element of the pair: \n";
    for (auto p : vp)
    {
        cout << "{" << p.first << ", " << p.second << "}" << endl;
    }

    return 0;
}