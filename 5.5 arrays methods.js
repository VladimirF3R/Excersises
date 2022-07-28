function ex1(input)
{
    function camelize(str)
    {
        return str.split("-").map((word,index)=>{if (index==0) return word; else return word[0].toUpperCase() + word.slice(1)}).join("");
    }
    input.forEach(item=>console.log(camelize(item)));
    
}

function ex2()
{

}

ex1(["background-color", "list-style-image","-webkit-transition"]);