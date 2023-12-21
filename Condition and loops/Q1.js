/*
Conditon Statement:
    Condiotion statement is use to chech condition true oe false 
    it chech throught 'if' and 'else' 
    when condiotion becomes true then 'if' block execute
    and when conditoin become flase than 'false' block execute
    There are three type of condition staement:
        1.If....else 
        2.Else....If
        3.Switch
        
    1.If...else statment:
        it condiotion when condiotion is true than if patr execut else else part execute
        Syntex:
            if(condition)
            {
                body part
            }
            else
            {
                body part
            }
    2.Else....IF statement:
        it use you have many type of condition than you can use Else..If statement 
        Syntex:
            if(condition)
            {
                body part
            }
            else if(condition)
            {
                body patr
            }
            else
            {
                body part
            }
    3.Switch case:
            switch case is use to chech many condion useing case:

            switch(condition)
            {
                case:
                     body part
                     break;

                case:
                     body part
                     break;
                    
            }
*/

let a = 6

if (a > 5) {
    console.log("A is greater than 5");
}
else {
    console.log("A is lessthan than 5");
}

let num = 200
let num2 = 300
let num3 = 40
if(num > num2 && num > num3)
{
    console.log("Number 1 Is Greater Then ");
}
else if (num2 > num && num2>num3) {
    console.log("Number 2 Is greater than");
} 
else {
    console.log("Number 3 is greater than");
}

let day = 1;

switch (day) {
    case 0:
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wensday");
        break;

    case 4:
        console.log("Thustday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Invalid");
        break;
}