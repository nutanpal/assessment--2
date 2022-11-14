///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce((accumulator, current) => {
    return accumulator + current.price }, 0);
  console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
  let finalPrice = cartTotal + (cartTotal * tax)-couponValue;
  return finalPrice;
}
console.log(calcFinalPrice(summedPrice, 5, 0.06));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

*/
id : customer id provided , number datatype, identifier and serial number for service order and billing
name : customers name, string data , need for id and billing 
phone:customers phone no , number data type, important for messaging and alerts
email: customer email, string data , imp for sending alerts and invoice
address: customers billing address , string data type , imp for billing 
PaybyCreditCard:  boolean true if paid by card or false if by cash
takeout: true or false , Boolean
text/sms : boolean , customer tells if he  wants text alerts in phone.  true/ yes 
tableFor: number data, tells how many people are there in this reservation
/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const Customer ={id: 10, name: "Jessy",  phone: 289-979-6546, email: "jessy@gmail.com", address:765 Olive StorageEvent: Iowa,payment:card, PaybyCreditCard: true,takeout:true,  text: yes, tableFor:6};

console.log(Customer);
///////////////////////////