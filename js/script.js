void function(){
'use strict';

let calculator = {
    read(num1, num2){
        this.number1 = num1;
        this.number2 = num2;
    },
    sum(){
        return this.number1 + this.number2;
    },
    mul(){
        return this.number1 * this.number2;
    }
}
calculator.read(3, 2);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());

}()