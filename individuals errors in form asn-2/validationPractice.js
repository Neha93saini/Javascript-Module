let player=[];


// player array push the value of all controls if there is no error found
//  name validation

function validateForm(myform){
    let candidatename= myform.candidatename.value
    let candidateemail= myform.candidateemail.value
    let candidatenumber= myform.candidatenumber.value
    let candidategender = myform.candidategender.value
    let candidatequalification = myform.candidatequalification.value
    let candidatetext = myform.candidatetext.value

    let namePattern = /[0-9@#%.$^]/;
    let emailPattern = /^[a-zA-Z0-9.-]{3,10}@[a-zA-Z0-9]{3,10}\.(com|co.in|org|gov.in|edu|usa)$/;

    let nameErrorId = document.getElementById('nameErrorId');
    let nameErros = "";
    let errorFound = 0;
    if(candidatename ==""){
        errorFound ++ 
        nameErros += "<i class='fa-solid fa-xmark'></i>  " +  "Name is required"
        // nameErros += "<i class='fa-solid fa-xmark'></i>" + "Name is required.<br>"; 
        nameErrorId.innerHTML = nameErros;

    } else {
        if(candidatename.length <= 3) {
            errorFound ++ 
            nameErros += "<i class='fa-solid fa-xmark'></i>  " + "name length is smaller that 3.<br>";
            nameErrorId.innerHTML = nameErros;
        } else if(namePattern.test(candidatename)) {
            errorFound ++ 
            nameErros += "<i class='fa-solid fa-xmark'></i>  " + "Only characters are allowed.<br>";
            nameErrorId.innerHTML = nameErros;
        }
    }
    let emailErrorId = document.getElementById("emailErrorId");
    let emailErrors="";
    let errorfound1 =0;
    if(candidateemail == ""){
        errorfound1++
        emailErrors+= "<i class='fa-solid fa-xmark'></i>  " + "E-mail is required.<br>"; 
        emailErrorId.innerHTML=emailErrors
    }
    else{
        if(!emailPattern.test(candidateemail)){
            errorfound1++
            emailErrors+= "<i class='fa-solid fa-xmark'></i>  " + "Invalid email given.<br>"; 
            emailErrorId.innerHTML=emailErrors

        }
    }

    let numberErrorId =document.getElementById("numberErrorId");
    let numberErrors ="" ;
    let errorfound2 =0;
    if(candidatenumber==""){
        errorfound2++;
        numberErrors+="<i class='fa-solid fa-xmark'></i>  " + "Number is required.<br>"; 
        numberErrorId.innerHTML=numberErrors
    }else{
        if(isNaN(candidatenumber)){
            errorfound2++;
            numberErrors+= "<i class='fa-solid fa-xmark'></i>  " + "only numbers are required."
            numberErrorId.innerHTML=numberErrors
        }
    }

    let candidateErrorId = document.getElementById("candidateErrorId");
    let candidateErrors=" ";
    let errorfound3 =0;
    if(candidategender==""){
        errorfound3 ++;
        candidateErrors+= "<i class='fa-solid fa-xmark'></i>  " + "Please select a gender";
        candidateErrorId.innerHTML=candidateErrors;
    }

    let candidateSelectErrorId = document.getElementById("qualificationErrorId");
    let candidateSelectErrors=" ";
    let errorfound4 =0;
    if(candidatequalification === 'Choose'){
        errorfound4 ++;
        candidateSelectErrors+= "<i class='fa-solid fa-xmark'></i>  " + "Please select a qualifiations";
        candidateSelectErrorId.innerHTML=candidateSelectErrors;
    }

    let textErrorId = document.getElementById("textErrorId");
    let textErrror="";
    let errorfound5 =0;
    if(candidatetext.trim() === ""){
        errorfound5 ++;
        textErrror += "<i class='fa-solid fa-xmark'></i>  " + "Please write something about yourself.";
        textErrorId.innerHTML=textErrror;
    }


    if (errorFound ===0 && errorfound1===0 && errorfound3===0 && errorfound4===0 && errorfound2===0){
        player.push([{name: candidatename, email: candidateemail, phoneNum:candidatenumber, gender:candidategender, qualification:candidatequalification, text:errorfound5}])
        
    }else{
        return false;
    }
    
}



