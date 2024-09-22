let passbox = document.getElementById("passbox");
let inputslider = document.getElementById("inputslider")
let sliderValue = document.getElementById("sliderValue")
let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let number = document.getElementById("number")
let symbol = document.getElementById("symbol")
let genBtn = document.getElementById("genBtn")
let copyIcon = document.getElementById("copyIcon")

sliderValue.textContent = inputslider.value; 
inputslider.addEventListener('input',()=>{
    sliderValue.textContent = inputslider.value; 
})

genBtn.addEventListener('click', ()=>{
    passbox.value = getPassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"; 

function getPassword(){
    let genPassword = "";
    let allchars = "";

    allchars += lowercase.checked ? lowerChars : "";
    allchars += uppercase.checked ? upperChars : "";
    allchars += number.checked ? allNumbers : "";
    allchars += symbol.checked? allSymbols : "";

  if(allchars == "" || allchars.length ==0){
    return genPassword;
  }

  let i=1;
  while(i<=inputslider.value){
    genPassword += allchars.charAt(Math.floor(Math.random()* allchars.length));
    i++;
  }
   return genPassword;


    // genPassword = upperChars.charAt(Math.floor(Math.random()*upperChars.length))
    // return genPassword
}

copyIcon.addEventListener('click',()=>{
    if(passbox.value!="" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerHTML = "check";
        copyIcon.title = "password copied";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 2000);

    }
})
