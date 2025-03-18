#include <iostream>
#include <set>

using namespace std;

int main()
{
  multiset<int, greater<int>> set_1;

  set_1.insert(502);
  set_1.insert(506);
  set_1.insert(555);
  set_1.insert(507);
  set_1.insert(502);

  cout << "\nThe multiset elements are: ";
  for (auto i : set_1)
  {
    cout << i << " ";
  }
}