function getUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched.");
      resolve({ id: userId, name: "Hariom Mewada" });
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order fetched for user :", userId);
      resolve([
        { id: 101, item: "Laptop" },
        { id: 102, item: "Phone" },
      ]);
    }, 1000);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order details fetched for order :", orderId);
      resolve({ id: orderId, item: "Laptop", price: 50000 });
    }, 1000);
  });
}

function processOrder(orderDetails) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Processing order :", orderDetails);
      resolve("Order processed successfully!");
    }, 1000);
  });
}

// Promise Chaining (Better Alternative to Callback Hell)
getUser(1)
  .then((user) => getOrders(user.id))
  .then((orders) => getOrderDetails(orders[0].id))
  .then((orderDetails) => processOrder(orderDetails))
  .then((message) => console.log(message))
  .catch((error) => console.log("Error :", error));
