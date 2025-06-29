#include <iostream>

using namespace std;

// Super class 1
class Camera
{
public:
    void takePhoto()
    {
        cout << "Taking photo..." << endl;
    }
};

// Super class 2
class Phone
{
public:
    void makeCall()
    {
        cout << "Calling someone..." << endl;
    }
};

// Sub class
class SmartPhone : public Camera, public Phone
{
public:
    void browseInternet()
    {
        cout << "Browsing internet..." << endl;
    }
};

int main()
{
    SmartPhone sp;
    sp.takePhoto();      // From Camera
    sp.makeCall();       // From Phone
    sp.browseInternet(); // Own method

    return 0;
}