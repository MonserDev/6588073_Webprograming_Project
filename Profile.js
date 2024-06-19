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
        const acc_id = document.querySelectorAll("#acc_id");
        const fname = document.querySelectorAll("#Fname");
        const lname = document.querySelectorAll("#Lname");
        fname.forEach(e =>{
            e.innerHTML = json.data[0].First_Name;
        });
        lname.forEach(e =>{
            e.innerHTML = json.data[0].Last_Name;
        })
        acc_id.forEach(e =>{
            e.innerHTML = "ID: " + json.data[0].Account_ID;
        })
    }


    document.addEventListener("DOMContentLoaded", function() {
        fetcher('http://localhost:3000/test/kb001',toName);
    });
    