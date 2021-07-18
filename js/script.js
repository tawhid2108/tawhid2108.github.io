
// Elements

let emailEvent = document.querySelector("#email");

let phoneEvent = document.querySelector("#phoneNumber");

let postCodeEvent = document.querySelector("#postCode")

// Event Listener

emailEvent.addEventListener("click", checkEmail);

phoneEvent.addEventListener("click", checkPhone);

postCodeEvent.addEventListener("click", checkPostCode);


// Function

function checkEmail(e){
    let emailInput = prompt("Enter your Email-ID : ");

    let re = /^([a-z A-Z 0-9]\.?)+[^\.]@([a-z A-Z 0-9]\.?)+[^\.]$/ ;

    // console.log(re.test(emailInput));

    let emailResult = re.test(emailInput); 

    if(emailResult === true){
        alert("Your email ID is valid")
    } else{
        alert("Invalid email ID")
    }
}

function checkPhone(e){
    let phoneInput = prompt("Enter your Phone Number : ")

    let re = /^(\+)?(88)?01[0-9]{9}$/ ;

    // console.log(re.test(phoneInput));

    let phoneResult = re.test(phoneInput); 
    
    if(phoneResult === true){
        alert("Your Phone Number is valid")
    } else{
        alert("Invalid Phone Number")
    }
}

function checkPostCode(e){
    let postCodeInput = prompt("Enter your Post Code : ") ;

    let re = /^[0-9]{4}$/ ;

    // console.log(re.test(postCodeInput));

    let postCodeResult = re.test(postCodeInput); 

    if(postCodeResult === true){
        alert("Your Post Code is valid")
    } else{
        alert("Invalid Post Code")
    }
}