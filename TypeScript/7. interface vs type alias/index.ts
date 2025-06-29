// _____ 1. Interface _____
interface User {
  name: string;
  phone: number;
}

interface User {
  age: number;
}

interface Customer extends User {
  address: string;
}

let myCustomer: Customer = {
  name: "Ajay",
  phone: 8900652345,
  address: "XYZ, 61, India",
  age: 20,
};

// _____________________________________________

// _____ 2. Type Alias _____
type Vehicles = {
  name: string;
  model: string;
};

// Error : duplicate identifier
// type Vehicles = {
//   price: number;
// };

// & -> intersection type
type Car = Vehicles & {
  isElectric: boolean;
};

let myCar: Car = {
  isElectric: true,
  name: "Mahindra EV",
  model: "XUV",
};

// Use of Type Alias
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";
// let userStatus2: Status = "activated";  // Error
