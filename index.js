const crypto = require('crypto');

// Get the commands using process.argv
const args = process.argv.slice(2);
const operation = args[0];

// Function to perform the operations
const performOperation = (operation, args) => {
    switch (operation) {
        case 'add':
            if (args.length < 2) {
                console.log("Invalid number of arguments for addition");
            } else {
                const sum = args.reduce((acc, val) => acc + parseFloat(val), 0);
                console.log(`Result: ${sum}`);
            }
            break;

        case 'sub':
            if (args.length < 2) {
                console.log("Invalid number of arguments for subtraction");
            } else {
                const difference = args.reduce((acc, val) => acc - parseFloat(val));
                console.log(`Result: ${difference}`);
            }
            break;

        case 'mult':
            if (args.length < 2) {
                console.log("Invalid number of arguments for multiplication");
            } else {
                const product = args.reduce((acc, val) => acc * parseFloat(val), 1);
                console.log(`Result: ${product}`);
            }
            break;

        case 'divide':
            if (args.length < 2) {
                console.log("Invalid number of arguments for division");
            } else {
                const quotient = args.reduce((acc, val) => acc / parseFloat(val));
                console.log(`Result: ${quotient}`);
            }
            break;

        case 'sin':
            if (args.length !== 1) {
                console.log("Invalid number of arguments for sine");
            } else {
                const result = Math.sin(parseFloat(args[0]));
                console.log(`Result: ${result}`);
            }
            break;

        case 'cos':
            if (args.length !== 1) {
                console.log("Invalid number of arguments for cosine");
            } else {
                const result = Math.cos(parseFloat(args[0]));
                console.log(`Result: ${result}`);
            }
            break;

        case 'tan':
            if (args.length !== 1) {
                console.log("Invalid number of arguments for tangent");
            } else {
                const result = Math.tan(parseFloat(args[0]));
                console.log(`Result: ${result}`);
            }
            break;

        case 'random':
            if (args.length !== 1) {
                console.log("Provide length for random number generation.");
            } else {
                const length = parseInt(args[0]);
                const randomBytes = crypto.randomBytes(length);
                console.log(`Random Bytes: ${randomBytes.toString('binary')}`);
            }
            break;

        default:
            console.log("Invalid operation");
    }
};

performOperation(operation, args.slice(1));
