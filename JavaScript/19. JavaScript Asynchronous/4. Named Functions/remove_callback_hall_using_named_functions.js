function getUser(userId, callback) {
  setTimeout(() => {
    console.log("User fetched!");

    // callback function to get user order
    callback({ id: userId, name: "Hariom Mewada" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("Order fetched for user :", userId);

    // callback function to get order details
    callback([
      { id: 101, item: "Laptop" },
      { id: 102, item: "Phone" },
    ]);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    console.log("Order details fetched for order :", orderId);

    // callback function to process order
    callback({ id: orderId, item: "Laptop", price: 50000 });
  }, 1000);
}

function processOrder(orderDetails, callback) {
  setTimeout(() => {
    console.log("Processing order :", orderDetails);

    // callback function if order processed successfully
    callback("Order processed successfully!");
  }, 1000);
}

// Removing callback hall using Named Functions (Still leading confusion)
function handleUser(user) {
  getOrders(user.id, handleOrders);
}

function handleOrders(orders) {
  getOrderDetails(orders[0].id, handleOrderDetails);
}

function handleOrderDetails(orderDetails) {
  processOrder(orderDetails, handleProcessedOrder);
}

function handleProcessedOrder(message) {
  console.log(message);
}

// Calling the first function
getUser(1, handleUser);
