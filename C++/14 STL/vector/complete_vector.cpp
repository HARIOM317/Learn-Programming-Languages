#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> v;
    vector<int> v2 = {1, 2, 3, 4, 5};
    vector<int> v3(10);     /// creating 10 size of vector
    vector<int> v4(10, 20); // 10 size vector with each value 20

    // push_back() - to insert an element at the end of vector
    // Every time we add an element in a vector then its capacity becomes double of current capacity if it is less then vector size.
    v.push_back(10);  // size: 1, capacity: 1
    v.push_back(20);  // size: 2, capacity: 2
    v.push_back(30);  // size: 3, capacity: 4
    v.push_back(40);  // size: 4, capacity: 4
    v.push_back(50);  // size: 5, capacity: 8
    v.push_back(60);  // size: 6, capacity: 8
    v.push_back(70);  // size: 7, capacity: 8
    v.push_back(80);  // size: 8, capacity: 8
    v.push_back(90);  // size: 9, capacity: 16
    v.push_back(100); // size: 10, capacity: 16

    // emplace_back() - Similar to push_back() and add an element at the end of vector
    v.emplace_back(110);

    // begin() - To insert an element at any specific index
    v.insert(v.begin() + 5, 55);

    cout << "Size: " << v.size() << endl;
    cout << "Capacity: " << v.capacity() << endl;

    // For Each Loop
    cout << "\nThe vector is: ";
    for (int val : v)
    {
        cout << val << " ";
    }

    // pop_back() - To delete the last element
    v.pop_back();
    v.pop_back();

    // erase() - To remove an element at any index
    v.erase(v.begin());                    // removing first element (10)
    v.erase(v.begin() + 1, v.begin() + 4); // removing from index 1 to index 3 elements (30, 40, 50)

    // For Each Loop
    cout << "\nAfter deletion the vector is: ";
    for (int val : v)
    {
        cout << val << " ";
    }

    // We can also access the vector value by index like an array or using .at() function.
    cout << "\nv[0]: " << v[0] << endl;
    cout << "v[1]: " << v[1] << endl;
    cout << "v.at(2): " << v.at(2) << endl;
    cout << "v.at(3): " << v.at(3) << endl;

    // front() - To get first element of vector
    cout << "\nv.front(): " << v.front();

    // back() - To get last element of vector
    cout << "\nv.back(): " << v.back() << endl;

    // clear() - to remove all elements from vector
    v.clear();
    cout << "v.size() after clearing all elements: " << v.size() << endl;
    cout << "v.capacity() after clearing all elements: " << v.capacity() << endl;

    // empty() - To check that the vector is empty or not?
    cout << "\nIs vector empty? " << (v.empty() ? "Yes" : "No") << endl;

    // Vector iterator
    // 1. v.begin() - return location of first element of the vector.
    // 2. *(v.begin()) - return the value of first element of the vector.
    // 3. v.end() - return location of last+1 element of the vector which contain a garbage value.
    // 4. *(v.end()) - return a garbage value.
    cout << "\nv2.begin(): " << *(v2.begin());
    cout << "\nv2.end(): " << *(v2.end() - 1);

    vector<int>::iterator itr;
    cout << "\nGetting vector v2 elements using forward iterator: ";
    for (itr = v2.begin(); itr != v2.end(); itr++)
    {
        cout << *(itr) << " ";
    }

    cout << "\nGetting vector v2 elements using backward iterator: ";
    for (auto itr2 = v2.rbegin(); itr2 != v2.rend(); itr2++)
    {
        cout << *(itr2) << " ";
    }

    return 0;
}