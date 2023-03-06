/* SETTING UP LOGIN FUNCTION FOR USER AND PASSWORD */
const loginBtn = document.getElementById("submitBtn");
const userName = document.getElementById('userNameInput');
var userNameInput;

userName.addEventListener('change', e => {
    userNameInput = e.target.value;
    console.log(userNameInput);
})


loginBtn.addEventListener("click", () =>{
    const userName = document.getElementById('userNameInput').value;
    const password = document.getElementById('passwordInput').value;
    loginFunction(userName, password);
    
})

/* CHECKING PASSWORD AND WELCOMING, THEN CLOSING  - OR - ASKING TO TRY AGAIN IF WRONG PASSWORD */
function loginFunction(userName, password){
    if (password === "PassW") {
        console.log(password);
        alert('Welcome '+userName +'!')
        loginBtn.setAttribute("data-bs-dismiss", "modal");
        loginBtn.click();
}
else{
    alert('Please try again')
}
}



