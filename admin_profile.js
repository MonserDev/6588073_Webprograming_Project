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

function toName(json){
    const admin_pic = document.querySelectorAll("#Admin_pic");
    const acc_id = document.querySelectorAll("#Admin_ID");
    const fname = document.querySelectorAll("#Admin_name");
    const lname = document.querySelectorAll("#Admin_surname");
    const email = document.querySelector("#Admin_email");
    const Address = document.querySelector("#Admin_Address");

    if (admin_pic) {
        acc_id.forEach(e => {
            e.innerHTML = "ID: " + json.data[0].Account_ID;
        })
    }
    if (acc_id) {
        fname.forEach(e => {
            e.innerHTML = json.data[0].First_Name;
        });
    }
    if (lname) {
        lname.forEach(e => {
            e.innerHTML = json.data[0].Last_Name;
        })
    }
    if (email) {
        email.innerHTML = json.data[0].Email;
    }
    if (Address) {
        Address.innerHTML = json.data[0].address;
    }
    if (admin_pic) {
        admin_pic.forEach(e => {
            e.setAttribute('src', json.data[0].Image_Path);
        })
    }


}

function get_cookies(){
    const cookies = document.cookie.split("; "); 
    for (let i = 0; i < cookies.length; i++) {
        const element = cookies[i];
        if (element.indexOf("User") === 0) {
            const userCookie = element.split("=")[1];
            if (userCookie) {
                return userCookie;
            }
            return 0; // Return 0 if the user cookie is not found
        }
    }
    return null; // Return null if no user cookie is found
}


fetcher(`http://localhost:3000/admin_all/${get_cookies()}`,toName );