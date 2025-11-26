//---Program 1:
const myPromise = new Promise((resolve, reject) => {
  console.log("Promise executed!");
  setTimeout(() => {
    const i = 1;
    resolve(i);
    console.log(`Resolve Response: ${i}`);
  }, 2000);
});

myPromise
  .then((response) => {
    return ++response;
    // throw new Error("Error occured!!!");
  })
  .then((next) => {
    return ++next;
  })
  .then((last) => {
    console.log(last);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Program end!");

//---Program 2:

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
  .then((orderStatus) => {
    console.log(orderStatus); // "🍕 Pizza is ready!"
    return "Delivering your food...";
  })
  .then((delivery) => {
    console.log(delivery);
    return "✅ Food delivered!";
  })
  .then((finalStatus) => {
    console.log(finalStatus);
  })
  .catch((error) => {
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
