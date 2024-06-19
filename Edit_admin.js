function toEditInfoAdmin(json) {
    const Name = document.querySelector("#new_name");
    const surName = document.querySelector("#new_surname");
    const account_id = document.querySelector("#new_Account_ID");
    const Img_path = document.querySelector("#profileimg");
    const Email = document.querySelector("#new_email");
    const Address = document.querySelector("#new_address");
    const Username = document.querySelector("#new_UserName");


    account_id.value = json.data[0].Account_ID;
    Name.value = json.data[0].First_Name;
    surName.value = json.data[0].Last_Name;
    Email.value = json.data[0].Email;
    Address.value = json.data[0].address;
    Img_path.setAttribute("src", json.data[0].Image_Path);
    Username.value = json.data[0].Username;

}

function toApply() {
    const Name = document.querySelector("#new_name");
    const surName = document.querySelector("#new_surname");
    const account_id = document.querySelector("#new_Account_ID");
    const Img_path = document.querySelector("#profileimg");
    const Email = document.querySelector("#new_email");
    const Address = document.querySelector("#new_address");
    const Username = document.querySelector("#new_UserName");
    const Password = document.querySelector("#new_Password");
    const User = {
        "User": {
            "Account_ID": account_id.value,
            "First_Name": Name.value,
            "Last_Name": surName.value,
            "Email": Email.value,
            "Image_Path": Img_path.src
        }
    };
    const address = {
        "address": {
            "Account_ID": account_id.value,
            "address": Address.value
        }
    }

    const Login_Info = {
        "Login_Information": {
            "Username": Username.value,
            "Password": Password.value,
            "Account_ID": account_id.value,
        }
    }
    const Edit = {
        "edit": {
            "Account_ID": account_id.value,
        }
    }

    fetcher_put('http://localhost:3000/editAdmnin-User', "PUT", JSON.stringify(User));
    fetcher_put('http://localhost:3000/editAdmnin-address', "PUT", JSON.stringify(address));
    fetcher_put('http://localhost:3000/editAdmnin-edit', "PUT", JSON.stringify(Edit));
    fetcher_put('http://localhost:3000/editAdmnin-Login_Information', "PUT", JSON.stringify(Login_Info));
};

function toDelete() {
    const id = document.querySelector("#new_Account_ID");
    const product = {
        "Account_ID": id.value
    };

    const jsonString = JSON.stringify(product);
    fetcher_put('http://localhost:3000/deleteAdmnin-address', "DELETE", jsonString);
    fetcher_put('http://localhost:3000/deleteAdmnin-edit', "DELETE", jsonString);
    fetcher_put('http://localhost:3000/deleteAdmnin-Login_Information', "DELETE", jsonString);
    fetcher_put('http://localhost:3000/deleteAdmnin-User', "DELETE", jsonString);
}


function toCreate() {
    const Name = document.querySelector("#new_name");
    const surName = document.querySelector("#new_surname");
    const account_id = document.querySelector("#new_Account_ID");
    const Img_path = document.querySelector("#profileimg");
    const Email = document.querySelector("#new_email");
    const Address = document.querySelector("#new_address");
    const Username = document.querySelector("#new_UserName");
    const Password = document.querySelector("#new_Password");

    const User = {
        "User": {
            "Account_ID": account_id.value,
            "First_Name": Name.value,
            "Last_Name": surName.value,
            "Email": Email.value,
            "Image_Path": Img_path.src
        }
    };
    const address = {
        "address": {
            "Account_ID": account_id.value,
            "address": Address.value
        }
    }
    const Login_Info = {
        "Login_Information": {
            "Username": Username.value,
            "Password": Password.value,
            "Account_ID": account_id.value,
        }
    }
    const Edit = {
        "edit": {
            "Product_ID": "pro001",
            "Account_ID": account_id.value
        }
    }
    fetcher_put('http://localhost:3000/newAdmnin-User', "POST", JSON.stringify(User));
    fetcher_put('http://localhost:3000/newAdmnin-address', "POST", JSON.stringify(address));
    fetcher_put('http://localhost:3000/newAdmnin-Login_Information', "POST", JSON.stringify(Login_Info));
    fetcher_put('http://localhost:3000/newAdmnin-edit', "POST", JSON.stringify(Edit));
}




function fetcher_put(url, method, json) {
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: json,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


const key = window.location.search;
const urlParams = new URLSearchParams(key);
const id = urlParams.get('id');

if (id) {
    fetcher(`http://localhost:3000/admin_all_user_pass/${id}`, toEditInfoAdmin);
}