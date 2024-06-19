// function fetcher(url,functions){
//     fetch(url)
//         .then(response => response.json()) 
//         .then(json => {
//             functions(json);
//         })
//         .catch(error => console.error('Error fetching data:', error));
//     }
//     function toHTML(json) {
//         const ul = document.querySelector('ul');
//         ul.innerHTML = '';
//         json.data.forEach(item => {
//             const li = document.createElement('li');
//             li.textContent = item.Name; 
//             ul.appendChild(li);
//         });
//     }

// function getpreviousperson_ID(json){
//     const imgOn_homepage = document.querySelectorAll("");
    
// }

// function convertToJson() {
//     // Get values from input fields
//     var new_acc_id = 
//     var name = document.getElementById('new_name').value;
//     var surname = document.getElementById('new_surname').value;
//     var email = document.getElementById('new_email').value;
//     var address = document.getElementById('new_address').value;



//     // Create JSON object
//     var jsonObject = {
//         // "Account_ID": , get ID form the recent Person
//         "First_Name": name,
//         "Last_Name": surname,
//         "Email": email,
        
//         // "address": address--> go to table address
//     };

//     // Convert JSON object to string
//     var jsonString = JSON.stringify(jsonObject);

//     console.log(jsonString);
// }

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('new_name').value;
    const surname = document.getElementById('new_surname').value;
    const address = document.getElementById('new_address').value;
    const email = document.getElementById('new_email').value;
  
    // Prepare the data to send (consider using a FormData object for complex data)
    const data = { name, surname, address, email };
  
    try {
      const response = await fetch('/save_profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Adjust if sending different data types
        body: JSON.stringify(data), // Convert data to JSON string
      });
  
      if (response.ok) {
        // Handle successful data submission (e.g., show a success message)
        console.log('Profile data saved successfully!');
      } else {
        // Handle errors (e.g., show an error message)
        console.error('Error saving profile data:', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
