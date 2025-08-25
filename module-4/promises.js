function placeOrder(food) {
    return new Promise((resolve, reject) => {
      console.log("Placing order for:", food);
      setTimeout(() => {
        if (food === "Pizza") {
          resolve("🍕 Pizza is ready!");
        } else {
          reject("❌ Sorry, we only serve Pizza.");
        }
      }, 2000);
    });
  }
  
  placeOrder("Pizza")
    .then(orderStatus => {
      console.log(orderStatus); // "🍕 Pizza is ready!"
      return "Delivering your food..."; 
    })
    .then(delivery => {
      console.log(delivery);
      return "✅ Food delivered!";
    })
    .then(finalStatus => {
      console.log(finalStatus);
    })
    .catch(error => {
      console.error(error);
    });

// To check the normal flow of the program
let i = 1;
const timer = setInterval(() => {
  console.log(i);
  i++;

  if (i > 10) {
    clearInterval(timer);
  }
}, 500);