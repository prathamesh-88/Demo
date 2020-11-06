// Funtions

function validateName(fieldname) {
    var regName = /[^a-zA-Z]/;
    var name = document.getElementById(fieldname).value;
    name=name.trim();
    if (name.length <= 1 || regName.test(name)) {
        console.log(`#${fieldname}Error`)
        $(`#${fieldname}Error`).text("Enter Valid name");
        return false;
    } else {
        $(`#${fieldname}Error`).text("");
        return true;
    }
}

function validateEmail() {
    let email = $('#email').val();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(String(email).toLowerCase())
    if(email.length>=4 && result){
        $(`#emailError`).text("");
        return true;
    }else {
        $(`#emailError`).text("Enter Valid Email Address");
        return false;
    }
}

function validatePassword(){
    let pass = $('#password').val();
    if(pass.length < 8){
        $('#passError').text("Password must be at least 8 characters");
        $('#password').focus();
        return false;
    }else{
        $('#passError').text("");
        return true;
    }
}

function validateRePassword(){
    let pass = $('#password').val();
    let repass = $('#repassword').val();
    console.log(pass, repass);
    validatePassword();
    if(pass == repass){
        $('#repassError').text("");
        return true;
    }else{
        $('#repassError').text("Passwords do not match");
        return false;
    }

}

function validateForm() {
    let count = 0;
    let results = [validateName("fname"), validateName("lname"), validateEmail(), validatePassword(),
        validateRePassword()
    ];
    results.forEach((el) => {
        console.log(el);
        if (!el) {
            count++;
        }
    });
    if(count){
        alert("Check details and try again.");
        return false;
        
    }else{
        alert("Validation Successful");
        return true;
    }
    
}


//Event handlers

$("#fname").on("change",()=>{
    validateName("fname");
});


$("#lname").on("change", () => {
    validateName("lname");
});


$("#email").on("change", validateEmail);


$("#password").on("change", validatePassword);



$("#repassword").on("change",validateRePassword);

$('#validateForm').on("click",validateForm);

