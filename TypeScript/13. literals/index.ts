// _____ literal types _____

// string literal
type OrderStatus = "delivered" | "pending" | "cancelled";
let order: OrderStatus = "pending";

let answer: "yes" | "no";
answer = "no";

// number literal
let count: 0 | 1 | 2;
count = 1;

// boolean literal
let isVisible: true | false;
isVisible = true;

// _____ with functions _____
function printStatus(status: "success" | "error" | "loading"): void {
  console.log(`Current state is ${status}`);
}

printStatus("success");
// printStatus("success1"); // Error

// _____ with interface _____
interface ButtonConfig {
  size: "small" | "medium" | "large";
  color: "red" | "green" | "blue";
}

const btn: ButtonConfig = {
  size: "medium",
  color: "blue",
};
