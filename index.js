const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é#{([|-`_@)]=}+°!§:/;.,?%*$£µ";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('passeword-output');


function generatePasseword() {
    let data = [];
    let password = "";
    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(number.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);
    if(data.length == 0){
        alert("Veuillez séléctionner des critères");
        return;
    }
    for(i = 0; i < rangeValue.value; i++) { 
        password += data[Math.floor(Math.random() * data.length)];
    }

    passwordOutput.value = password;
    navigator.clipboard.writeText(passwordOutput.value);

    generateButton.textContent = "copié";

    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe";
    },1000);
    

}

generateButton.addEventListener("click",generatePasseword);