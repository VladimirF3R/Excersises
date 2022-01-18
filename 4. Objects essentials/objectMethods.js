"use strict";
//whatsResult();
//whatsResult2();
//whatsResult3();
//calculatorObject();
thisKeyChain();

function whatsResult(){
    let user = {
        name: "Джон",
        go: function() { console.log(this.name) }
    } // symbol ";" missed here
    (user.go)()
}

function whatsResult2(){
    let obj, method;
    obj = {
        go: function() { 
            console.log(this); 
        }
    };
    obj.go();               // (1) [object Object]
    (obj.go)();             // (2) [object Object]
    (method = obj.go)();    // (3) undefined
    (obj.go || obj.stop)(); // (4) undefined
} 

function whatsResult3(){
    function makeUser() {
        return {
            name: "Джон",
            ref: this,
            newRef: function(){
                return this;
            },
        };
    };
    let user = makeUser();    
    console.log( user.ref.name ); // TypeError
    console.log(user.newRef().name);
}

function calculatorObject(){
    let calculator = {
        num1: 0,
        num2: 0,
        read() {
            this.num1 = +prompt("Enter 1st number");
            this.num2 = +prompt("Enter 2nd number");
        },  
        sum() {
            return this.num1 + this.num2;
        },
        mul() {
            return this.num1 * this.num2;
        },  
    };
      
      calculator.read();
      console.log( calculator.sum() );
      console.log( calculator.mul() );
}

function thisKeyChain(){
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function() { 
            console.log( this.step );
            return this;
        }
    };
    ladder.up().up().down().showStep(); // 1
}
