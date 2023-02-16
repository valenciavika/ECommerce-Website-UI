const handleRegisPage = () => {
    const unameRegis = document.getElementById('username').value
    const fullnameRegis = document.getElementById('fullname').value
    const emailRegis = document.getElementById('email').value
    const test = ValidateEmail(emailRegis)
    console.log(test)

    const passwordRegis = document.getElementById('password').value
    const confirmpassRegis = document.getElementById('confirmpass').value
    const dateRegis = document.getElementById('date').value

    const male = document.querySelector('#male')
    const female = document.querySelector('#female')

    const checkRegis = document.querySelector('#check')
   
    if(unameRegis === '' || fullnameRegis==='' || emailRegis === '' ||passwordRegis === '' ||
       confirmpassRegis === '' || dateRegis === '' ){
        alert('all input are required!')
       }
    else if(passwordRegis != confirmpassRegis) {
        alert('Please re-enter your password!')
    }
    else if(!test){
        alert('Please enter your valid email address!')
    }
    else if(male.checked===false && female.checked===false){
        alert('You must select one of them (Male or Female)!')

    }
    else if(checkRegis.checked===false){
        alert('You must agree to the terms!')
    }
    else{
        alert('Successfully Registered!!')
    }
}

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(inputText)
    if(inputText.match(mailformat)){
        return true;
    }
    else{ 
        return false;
    }
}
