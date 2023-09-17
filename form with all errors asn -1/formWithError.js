let data = [];
function validateForm(form) {
    let name = form.candidatename.value;
    let email = form.candidateemail.value;
    let number = form.candidatenumber.value;
    let gender = form.candidategender.value;
    let qualification= form.candidatequalification.value;
    let job= form.candidatetext.value;

    let errors = "There are the errors:\n";
    let totalErrors = 0;
    let namePattern = /[0-9@#%.$^]/;
    
    let emailPattern = /^[a-zA-Z0-9.-]{3,10}@[a-zA-Z0-9]{3,10}\.(com|co.in|org|gov.in|edu|usa)$/;
    if (name === "") {
        totalErrors++;
        errors += totalErrors + ". Name is required.\n"; 

    } else {
        if (namePattern.test(name)) {
            totalErrors++;
            errors += totalErrors + ". Only characters are allowed in Name.\n"; 
        } else if (name.length < 3) {
            totalErrors++;
            errors += totalErrors + ". Minimum 3 chars are required in Name.\n";
        } else {

        }
    }           

    if (email === "") {
        totalErrors++;
        errors += totalErrors + ". Email is required.\n";
    } else {
        if (!emailPattern.test(email)) {
            totalErrors++;
            errors += totalErrors + ". Invalid email given.\n";
        }
    }

    if (number === "") {
        totalErrors++;
        errors += totalErrors + ". Number is required.\n";
    } else {
        if (isNaN(number)) {
            totalErrors++;
            errors += totalErrors + ".  Must be a number.\n";
        } else {
            if (rank.length > 11) {
                totalErrors++;
                errors += totalErrors + ". Enter only 10 digits.\n";
            }
        }
    }

    if (gender === "") {
        totalErrors++;
        errors += totalErrors + ". Gender is required.\n";
    }


    if (qualification === 'Choose') {
        totalErrors++;
        errors += totalErrors + ". Please select an qualification.\n";
    }


    if(job===""){
        totalErrors++;
        errors += totalErrors + ". Write something.\n";
    }

    if (totalErrors === 0) {
        data.push({ name,email,number,gender,qualification,job });
        return true;
    } else {
        alert(errors);
        return false;
    }

}
