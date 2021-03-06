// We have to Create an array in which we have to show userId, userName, orders key by using two given arrays

/** My Approach
 * Create a loop of iteration.
 * Create two blank arrays (res and orderDetails).
 * Now push the value of Id and name from user array to "res" array with two keys - userId and userName.
 * Create an If condition in which -
 * if id of users is equals to customerId of orders
 * then push the details of order in orderDetails array.
 * and make a new key in res with the value of orderDetails.
 */

const users = [
  { id: 123, name: "Sagar", city: "Indore" },
  { id: 124, name: "Arun", city: "Morena" },
  { id: 125, name: "Nikhil", city: "Dhule" },
];

const orders = [
  { id: 1234, name: "iPhone 13 Pro Max", price: "123000", customerId: 123 },
  { id: 1235, name: "Apple iWatch", price: "49000", customerId: 124 },
];

// const result = [ {userId: 123, userName: "Sagar",
//                  orders: [{orderId: 1234, productName: "iPhone 13 Pro Max",  productPrice: "123000",},],}  ,

//                 {userId: 124, userName: "Arun",
//                 orders:  [{orderId: 1235, productName: "Apple iWatch", productPrice: "49000", },],}  ,

//                 {userId: 125, userName: "Nikhil", orders: [],},
//                 ];

const res = [];
for (let i = 0; i < users.length; i++) {
  const newObj = { userId: users[i].id, userName: users[i].name };

  if (orders[i] && users[i].id === orders[i].customerId) {
    newObj.order = {
      orderId: orders[i].id,
      productName: orders[i].name,
      productPrice: orders[i].price,
    };
  } else newObj.order = [];
  res.push(newObj);
}
console.log(res);
