let num = 2678;
let rem;
let val = 0;

while (num >= 1){
    rem = num % 10;
    val = val * 10 + rem;
    num = math.floor(num / 10);
}
console.log(val);