/*
what are loops:
if you want to print number and anything agin and agin (repeat) you can use the loops

Use:
    If we have a number and we print many time and we have a function and calll many time 
    we can use the function
    Advantage is our code becomes small and clean

There are three type of loops
    1.While Loop
    2.Do....while Loop
    3.For loop

    syntex:
        1.while loop:
            while(condition)
            {
                Body part 
                increment
            }

        2.Do....while:
            do
            {
                Body part
                increment
            }while(condition)
        
        3.For loop:
            for(variable = value(start);condition;increment)
            {
                body part
            }
*/
console.log("While Loop example");
let num = 0

while(num!=10)
{
    console.log(num);
    num++;
}
console.log("For Loop example");

for (let i = 0; i < 10; i++) {
    console.log("Hello word");
    
}