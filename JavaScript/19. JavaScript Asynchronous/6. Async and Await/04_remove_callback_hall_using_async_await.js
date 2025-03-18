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

// Async function to chain the operations (Best Approach)
async function processOrders() {
  try {
    const user = await getUser(1);
    const orders = await getOrders(user.id);
    const orderDetails = await getOrderDetails(orders[0].id);
    const message = await processOrder(orderDetails);
    console.log(message);
  } catch (error) {
    console.log("Error :", error);
  }
}

// call async function
processOrders();
