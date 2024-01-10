let str = "";
const digits = document.querySelectorAll('.input');
Array.from(digits).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        str = str + e.target.innerHTML;
        document.querySelector('#upper-input').innerHTML = str;
    })
})







