//twoConstructors();
//calculatorConstructor();
//accumulatorConstructor();
ConsoleWrapper();

function twoConstructors() {
    let obj = {name:"New object"};
    function A() { return obj }
    function B() { return obj }

    let a = new A;
    let b = new B;

    console.log( a == b ); // true
}

function calculatorConstructor(){
    function Calculator() {
        this.read = function() {
            this.num1 = +prompt("Enter 1st number");
            this.num2 = +prompt("Enter 2nd number");
        };
        this.sum = function()  {
            return this.num1 + this.num2;
        };
        this.mul = function()  {
            return this.num1 * this.num2;
        };  
    };
    calculator = new Calculator();
    calculator.read();
    console.log( calculator.sum() );
    console.log( calculator.mul() );
}

function accumulatorConstructor() {
    function Accumulator(startingValue){
        this.value = startingValue;
        this.read = function() {
             this.value = +prompt("Enter value");
        };
    }
    let accumulator = new Accumulator(1); // starting from  1
    accumulator.read(); 
    accumulator.read();
    console.log(accumulator.value);
}
function ConsoleWrapper(){
    function InternalConsole(){
        let regularConsole = console;
        this.log = function(message) {
            //regularConsole.log(message)
            //regularConsole.log(`${"-".repeat(40)}`);
            alert(message);
        };
        this.releaseConsole = function() {
            console = regularConsole;        
        }
    } 
    console = new InternalConsole(); 
    console.log("Test");
    console.releaseConsole();
    console.log("Test");

}