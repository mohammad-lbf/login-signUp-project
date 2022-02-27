const logInBtn = document.querySelector(".log-in");
const signInBtn = document.querySelector(".sign-in");
const logInForm = document.querySelector(".log-in-form");
const signInForm = document.querySelector(".sign-in-form");
const formTitle = document.querySelector(".form-title p1");
const logInEmailInput  = document.querySelector("#log-in-email-input");
const logInPasswordInput  = document.querySelector("#log-in-password-input");
const randomCode1 = document.querySelector(".security-code1");
const randomCode2 = document.querySelector(".security-code2");
const SignInEmailInput  = document.querySelector("#sign-in-email-input");
const signInpassWordInput = document.querySelector("#sign-in-password-input");
const passwordAgainInput = document.querySelector("#password-again-input");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const passwordAgainValidation = document.querySelector(".password-again-validation");
const logInemailValidation = document.querySelector(".log-in-email-validation");
const logInpasswordValidation = document.querySelector(".log-in-password-validation");
const logInsecurityCodeValidation = document.querySelector(".log-in-security-code-validation");
const signInemailValidation = document.querySelector(".sign-in-email-validation");
const signInpasswordValidation = document.querySelector(".sign-in-password-validation");
const signInsecurityCodeValidation = document.querySelector(".sign-in-security-code-validation");
const logInSecurityCodeInput = document.querySelector(".log-in-security-code-input")
const signInSecurityCodeInput = document.querySelector(".sign-in-security-code-input");

// ***********security code panel********************
function securityCodeChooser(){
    const alphabet = ["a" , "b" , "c" , "d" , "e" , "f" , "g"];
    const numbers = [1,2,3,4,5,6,7,8,9];
let char1 = alphabet[Math.floor(Math.random() * 7)];
let char2 = numbers[Math.floor(Math.random() * 9)];
let char3 = alphabet[Math.floor(Math.random() * 7)];
let char4 = alphabet[Math.floor(Math.random() * 7)];
let char5 = numbers[Math.floor(Math.random() * 9)];
let char6 = numbers[Math.floor(Math.random() * 9)];
let code1 = `${char1}${char2}${char3}${char4}${char5}${char6}`
let code2 = `${char2}${char6}${char1}${char5}${char3}${char4}`
randomCode1.innerText = code1;
randomCode2.innerText = code2
}
securityCodeChooser();
// *******************************************************************
let users = [];
class newUserConstructor{
user(id,userName,passWord){
    this.id = id;
    this.userName = userName;
    this.passWord = passWord;

}
}






// *********************************************************************

logInBtn.addEventListener("click" , (event) =>{
event.preventDefault();
signInForm.style.display = "none";
logInForm.style.display = "flex";
logInBtn.style.backgroundColor = "#ffffff";
signInBtn.style.backgroundColor = "#cecece";
formTitle.innerText = "ورود به پنل کاربری";
securityCodeChooser();



})
signInBtn.addEventListener("click" , (event) =>{
    event.preventDefault();
    signInForm.style.display = "flex";
    logInForm.style.display = "none";
    signInBtn.style.backgroundColor = "#ffffff"
    logInBtn.style.backgroundColor = "#cecece";
    formTitle.innerText = "ثبت نام";
    securityCodeChooser();
    })

// *************------------------------------------------------

button1.addEventListener("click" , (e) =>{
 e.preventDefault();
     let userEmail = logInEmailInput.value;
     let userPassword = logInPasswordInput.value;
     let securityCode = logInSecurityCodeInput.value;
    if(userEmail.indexOf("@") === -1 || userEmail.indexOf(".") === -1 || userEmail.length < 4){
        logInemailValidation.innerText = "ایمیل شما نامعتبر است*";

    }
    // else if()
    else{
        logInemailValidation.innerText =""
    }
   if( securityCode === randomCode1.innerText){
       logInsecurityCodeValidation.innerText = "";
   }else{
       logInsecurityCodeValidation.innerText = "کد امنیتی نادرست است*"
       securityCodeChooser();
   }
   if(!(userEmail.indexOf("@") === -1 || userEmail.indexOf(".") === -1 || userEmail.length < 4) && !( securityCode != randomCode1.innerText)){
    users.forEach(element =>{
    
        

        if(element.userName === userEmail){
            if(element.passWord === userPassword){
 fetch("https://jsonplaceholder.typicode.com/posts" , {
method:'post',body:JSON.stringify({userName: userEmail , passWord: userPassword}),headers:{'content-type':'application/json'}
            })
        .then(() =>{
logInsecurityCodeValidation.innerText = "!با موفقیت وارد شدید";
logInpasswordValidation.innerText = ""
logInsecurityCodeValidation.style.color = "green"
        })
        .catch(()=>{
logInsecurityCodeValidation.innerText = ".ارتباط با سرور برقرار نشد.دوباره امتحان کنید";
logInpasswordValidation.innerText = ""
logInsecurityCodeValidation.style.color = "red"})

            }
            else{
                logInpasswordValidation.innerText = "نام کاربری یا رمز عبور اشتباه است"
                logInsecurityCodeValidation.style.color = "red"
            }
        }
        else{
            logInsecurityCodeValidation.innerText = "حساب کاربری با مشخصات وارد شده وجود ندارد";
            logInsecurityCodeValidation.style.color = "red"
        }
    })
   }

})

// ------------------------------------------------------------------------------

button2.addEventListener("click" , (e) =>{
e.preventDefault();
let userEmail = SignInEmailInput.value;
let userPassword = signInpassWordInput.value;
let againPassword = passwordAgainInput.value;
let securityCode = signInSecurityCodeInput.value;
if(userEmail.indexOf("@") === -1 || userEmail.indexOf(".") === -1 || userEmail.length < 4){
    signInemailValidation.innerText = "ایمیل شما نامعتبر است*";
}

else{
    signInemailValidation.innerText ="";
}
if(userPassword.length <= 4){
    signInpasswordValidation.innerText = "رمز عبور خیلی کوتاه است*";
}
else if(userPassword.length > 4){
    signInpasswordValidation.innerText = "";
    
}

userPassword = signInpassWordInput.value;
    if(userPassword == againPassword){
        passwordAgainValidation.innerText ="";
    }
    else if(userPassword != againPassword){
        passwordAgainValidation.innerText = "با رمز عبور ورودی همخوانی ندارد";
    }


if( securityCode === randomCode2.innerText){
    signInsecurityCodeValidation.innerText = "";
}else{
    signInsecurityCodeValidation.innerText = "کد امنیتی نادرست است*";
    signInsecurityCodeValidation.style.color = "red";
    securityCodeChooser();
}
if(!(userEmail.indexOf("@") === -1 || userEmail.indexOf(".") === -1 || userEmail.length < 4) 
&& !(userPassword.length <= 4) && !(userPassword != againPassword) && !( securityCode != randomCode2.innerText)){
    users.forEach(e =>{
        if(e.userName === userEmail){
            signInemailValidation.innerText = "این آدرس ایمیل برای حساب دیگری ثبت شده است";
        }
        else{
fetch("https://jsonplaceholder.typicode.com/posts" , {
            method:'post',body:JSON.stringify({userName: userEmail , passWord: userPassword}),headers:{'content-type':'application/json'}
        })
        .then(() =>{  signInsecurityCodeValidation.innerText = "ثبت نام شما با موفقیت انجام شد";
        signInsecurityCodeValidation.style.color = "green";
        const newUser = new newUserConstructor();
        newUser.user(users.length + 1 , userEmail ,userPassword);
        users.push(newUser);
        saveToLocal(newUser);})
        .catch(() =>{
            signInsecurityCodeValidation.innerText = "ارتباط با سرور برقرار نشد.دوباره امتحان کنید";
            signInsecurityCodeValidation.style.color = "red";
        })
        }
    })
    
}

})

function saveToLocal(e){
    let savingArray;
    if(localStorage.getItem("users") === null){
        savingArray = [];
    }
    else{
      savingArray = JSON.parse(localStorage.getItem("users"));
    }
    savingArray.push(e);
    localStorage.setItem("users" , JSON.stringify(savingArray));
    }
    document.addEventListener("DOMContentLoaded" , pageLoader);
    function pageLoader(){
        let savingArray;
            if(localStorage.getItem("users") === null){
                savingArray = [];
            }
            else{
              savingArray = JSON.parse(localStorage.getItem("users"));
            }
            savingArray.forEach((el) => {
                users.push(el);
                return users;
            })
        }