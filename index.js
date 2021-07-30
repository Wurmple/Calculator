//List of additions to be made:
//add one variable to keep track of previous operation, so after pressing =, cannot delete answer, and cannot concat to answer
// make answer fit in the box by rounding off answer
//can add syntax error


let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue="";
screen.value = "0";

for(item of buttons) {
    item.addEventListener('click',(e)=>{

        buttonText=e.target.innerText;

        if(buttonText=='C') {
            screenValue= "";
            screen.value = "0";
        }
        else if(buttonText=='DEL') {
            screenValue = screenValue.substr(0,screenValue.length-1);
            if(screenValue=="") {
                screen.value="0";
            }
            else {
            screen.value = screenValue;
            }
        }
        else if(buttonText=='=') {
            screen.value = eval(screenValue);
            screenValue=eval(screenValue).toString();
        }
        else {
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        }
    })
}