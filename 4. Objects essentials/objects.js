helloObject();
console.log(`${"-".repeat(40)}`);
emptyObject();
console.log(`${"-".repeat(40)}`);
sumOfSalaries();
console.log(`${"-".repeat(40)}`);
multiply();
console.log(`${"-".repeat(40)}`);

function helloObject(){
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    console.log(`${user.name} ${user.surname}`);
    user.name = "Pete";
    console.log(`${user.name} ${user.surname}`);
    delete user.name;
    console.log(`${user.name} ${user.surname}`);
};

function emptyObject(){
    function isEmpty(obj){
        for (let prop in obj) {
            return false;
        } 
        return true;
    }
    let schedule = {};
    console.log( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    console.log( isEmpty(schedule) ); // false
}

function sumOfSalaries()
{
    function calcSum(salaries){
        let sum = 0;
        for(let prop in salaries){
            sum += +salaries[prop];
        }
        return sum;
    }
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }
    console.log(calcSum(salaries));
    salaries = {};
    console.log(calcSum(salaries));
}

function multiply(){
    function multiplyNumeric(obj){
        for (let prop in obj){
            if (typeof obj[prop] == "number") {
                obj[prop] *= 2;
            }
        }
    }
    // до вызова функции
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };
      
      multiplyNumeric(menu);
      console.log (`${menu.width} \n${menu.height} \n${menu.title}`)
      // после вызова функции
      /*
      menu = {
        width: 400,
        height: 600,
        title: "My menu"
      };
      */ 
}





