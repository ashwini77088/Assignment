//var let and const
var x=1
var x=2
console.log(x);
//global scope
var x=1;
let y=2;
const z=3;
//local scope
{
    let y=4;

}
//local scope
function myFunction(){
    const z=5;
    console.log(x);
}
