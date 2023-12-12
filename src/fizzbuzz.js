//Hometask 3

function fizzBuzz(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result += 'FizzBuzz ';
        } else if (i % 3 === 0) {
            result += 'Fizz ';
        } else if (i % 5 === 0) {
            result += 'Buzz ';
        } else {
            result += i + ' ';
        }
    }

    console.log(result);
}

fizzBuzz(100);