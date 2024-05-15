//Exercise #3.1

//Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.001) interest fee.
//Can you help her calculate her costs?

//Return the value of what she should be paying.

const calculateCostofPayment = product => {
    return product.fee + (product.unit_price * product.interest);
  };
  
  // Example usage
  const product = { product_name: "furniture", fee: 3, unit_price: 1000, interest: 0.001 };
  const total_cost = calculateCostofPayment(product);
  console.log(`Total cost of ${product.product_name}: $${total_cost}`);



//   ## Exercise #3.2

// #### Part 1

// Ed would like a way to input 3 names of his friends.
// The output should be a console greeting to his friends saying:
// `Welcome {name1}, {name2}, {name3}.

const greet1 = (name1 , name2, name3) => `Welcome ${name1}, ${name2} , ${name3}`;
console.log(greet1('Oil', 'Ole', 'Olive'));


     

    //   #### Part 2

    //   Ed would like to create a function that takes in a birth year and returns the age.
      
    //   i.e. 1990 returns 30


const age = year => 2024 - year ;
console.log(age(1981));




//     #### Part 3

// Ed would like to create a function that prints out,
// `Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

const greetage = (name1, age1, name2, age2, name3, age3) =>
`Welcome ${name1}, you are ${age1},${name2}, you are ${age2},${name3}, you are ${age3}`;
console.log(greetage('Oil', 43, 'Ole', 36, 'Olive', 32));



      
