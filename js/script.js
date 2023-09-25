void function(){
'use strict';

let calculator = {
    read(num1, num2){
        this.number1 = num1;
        this.number2 = num2;
    },
    sum(){
        if ((typeof this.number1 !== 'number') || (typeof this.number2 !== 'number')){
            return 'error, not a number';
        }
        return this.number1 + this.number2;
    },
    mul(){
        if ((typeof this.number1 !== 'number') || (typeof this.number2 !== 'number')){
            return 'error, not a number';
        }
        return this.number1 * this.number2;
    }
}
calculator.read(33, 2);
console.log(calculator.sum());
console.log(calculator.mul());

}()