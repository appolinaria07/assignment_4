
// IMPORT THE MODULE
import { add, subtract, divide, multiply} from "./modules/calculator.js";

let operation, num1,num2;
// COLLECT FIRST NUMBER FROM USER
do {
    num1 = parseFloat(prompt('Please enter the first number'))

// COLLECT SECOND NUMBER FROM USER
    num2 = parseFloat(prompt('Please enter the second number'))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt('What operation would you like to perform? Choose: \n + (add) \n- (subtract) \n* (multiply) \n/ (divide)')

    if (operation !=='+' && operation !== '-' && operation !== '*' && operation !== '/' ) {
        alert('You didn\'t enter the right operation.')
    }

} while (operation !=='+' && operation !== '-' && operation !== '*' && operation !== '/' )

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

switch (operation) {
    case '+':
        alert(add(num1,num2))
        break
    case '-':
        alert(subtract(num1,num2))
        break
    case '*':
        alert(multiply(num1,num2))
        break
    case '/':
        alert(divide(num1,num2))
        break
}




