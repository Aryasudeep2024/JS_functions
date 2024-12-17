let inputNum = prompt("Enter your Numer : ")
document.write("<br/>");
document.write(" Entered number is  : " + inputNum)

let i
let sum = 0;
for (i = 1; i <= inputNum; i++) {

    if (i % 2 == 0) {


             
             const sumOfEvens = (i) =>sum += i
             
        
        console.log("total" + sumOfEvens(i));
    
    }
}
document.write("<br/>")
document.write("<br/>");
document.write('The Sum of even numbers up to  '+inputNum+ '  is  : '+sum)
