let input = document.querySelector("input");
let allbtn = document.querySelectorAll("button");
for(let i  = 0; i <allbtn.length; i++){
    allbtn[i].addEventListener("click",function(e){
        let text = e.target.textContent;
        if(text == "AC"){
            input.value = '';
        }else if(text == "="){
            input.value = eval(input.value);
        }
        else{
            input.value += text;

        }
    })
}