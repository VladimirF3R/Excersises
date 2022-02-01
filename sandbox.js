function Main(){
    var window = undefined;
    this.customScript = new Function("","alert('inside custom script - ' + window);");
}

var window = undefined;
let main = new Main();
main.customScript();