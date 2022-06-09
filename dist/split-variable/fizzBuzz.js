"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzz = void 0;
class FizzBuzz {
    constructor(n) {
        let isFizz = n % 5 == 0;
        let isBuzz = n % 3 == 0;
        if (isBuzz && isFizz) {
            this._message = 'FizzBuzz';
        }
        else if (isFizz) {
            this._message = 'Fizz';
        }
        else if (isBuzz) {
            this._message = 'Buzz';
        }
        else {
            this._message = n + '';
        }
    }
}
exports.FizzBuzz = FizzBuzz;
