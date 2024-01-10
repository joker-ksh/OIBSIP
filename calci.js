
const display = document.getElementById("upper-input");
const final = document.getElementById("lower-input");
const button = document.getElementsByClassName("button");
let currentValue = "";


// button[0].addEventListener('click',function(){
//     console.log("yay you clicked the firat button");
// })
function evaluateResult(){
    try{
        currentValue = currentValue
         .replace("x","*")
         .replace("÷","/")
         .replace("%","0.01")
         .replace("√", 'Math.sqrt');  
        let result = eval(currentValue);
        currentValue = result.toString();
        final.innerText = currentValue;
        display.innerText = "";

    }catch (error) {
        // Handle the error, for example, display an error message
        currentValue = "";
        display.innerText = "Error";
        console.error(error);
    }
}
for(let i=0;i<button.length;i++)
{
    button[i].addEventListener('click',function(){
        // console.log("button clicked is : ",button[i].innerHTML);
        let value = "";
        value = button[i].innerText;
        // console.log(value);
        if(value == "clear")
        {
            currentValue = "";
            display.innerText = currentValue;
            final.innerText = "";
        }
        else if(value == "ENTER" || value =="ans")
        {
            evaluateResult();
        }
        else if(value == "del")
        {
            currentValue = currentValue.split('');
            currentValue.pop(); // Remove the last element
            currentValue = currentValue.join('');
            display.innerText = currentValue;
        }
        else
        {
            currentValue += value;
            display.innerText = currentValue;
            console.log(currentValue);    
        }
        
    })
}
  
    
  
  
