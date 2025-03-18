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

// Callback Hall (Pyramid of Doom) - Leading to unreadable and unmanageable code
getUser(1, function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0].id, function (orderDetails) {
      processOrder(orderDetails, function (message) {
        console.log(message);
      });
    });
  });
});
