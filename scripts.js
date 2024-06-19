function fetcher(url,functions){
    fetch(url)
        .then(response => response.json()) 
        .then(json => {
            functions(json);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    function toHTML(json) {
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
        json.data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.Name; 
            ul.appendChild(li);
        });
    }

function setCookie(name,value,setdate){
    const data = new Date();
    data.setTime(data.getTime() + (setdate * 24 * 60 * 60 *1000));
    let expires = "expires=" + data.toUTCString();
    document.cookie =  `${name}=${value}; ${expires}; path = /`;
}

function check_admin(){
    const cookies = document.cookie.split("; "); 
    cookies.forEach(element => {
        if(element.indexOf("rule") == 0){
            if (element.split("=")[1] = "Admin"){
                document.getElementById("Login").style.display = "none";
            }
        }
    });
}

// For login Page
function pass_check(json){
    if (json.data.length === 1){
        setCookie("rule","Admin",365);
        setCookie("User",`${json.data[0].Account_ID}`,365)
        alert("Correct");
        window.location.replace("/profile_adim");
    }else{
        alert("Incorrect");
    }
}

function passwordcheck(){
    const ID = document.querySelector("#id");
    const pass = document.querySelector("#pass");
    fetcher(`http://localhost:3000/login/${ID.value}/${pass.value}`,pass_check);
    
    // if (ID.value == test[0] && pass.value == test[1]){
    //     alert("correct")
    //     setCookie("rule","Admin",365);
    // }else{
    //     alert("wrong")
    // }
}



document.addEventListener("DOMContentLoaded", function() {
    check_admin();
});