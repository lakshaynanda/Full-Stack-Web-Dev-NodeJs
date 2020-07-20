function getGreeting(greetings){
    function greet(name){
        console.log(greetings,name())
    }
    return greet
}
function getname()
{
    return document.getElementById('namebox').value
}
let g1=getGreeting('Good Morning')
let g2=getGreeting('Good Evening')
