/** Pears are accepted to the warehouse, there is a function that returns the result of adding the number of accepted pears */

let pearsStock = 0;

async function addDelivery (stock, quantityArrived){
    return stock + quantityArrived;
};

addDelivery(pearsStock, 100).then((result) =>{
    console.log('Pears stock is, kg: ', (result));
});

/** The name is saved in the payment terminal, there is a function to define the name in the terminal 
 * (if you enter saved name, then hello + name, if not, then there is no such name) */

let savedName = 'Alina';

async function checkName(enteredName) {
    if (savedName == enteredName){
        return 'Hello + " " + enteredName';
    } else {
        return 'There is no such a name';
    }
};

checkName('Alin').then((result) =>{
    console.log((result));
});

/** There is a function for calculating the type of argument*/

async function defineTypeOfArgument(argument){
    let typeOfArgument = typeof(argument);
    return typeOfArgument;
};

defineTypeOfArgument(5).then((result) =>{
    console.log('Type of argument is:', (result));
});