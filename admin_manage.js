

function toTable(json) {

    const tbody = document.querySelector("#table_body");
    tbody.innerHTML = '';

    json.data.forEach(e => {
        var newRow = document.createElement('tr');

        var adminNameCell = document.createElement('td');
        adminNameCell.textContent = e.First_Name;

        var adminSurnameCell = document.createElement('td');
        adminSurnameCell.textContent = e.Last_Name;

        var adminIDCell = document.createElement('td');
        adminIDCell.textContent = e.Account_ID;

        var emailCell = document.createElement('td');
        emailCell.textContent = e.Email;

        var adminUsernameCell = document.createElement('td');
        adminUsernameCell.textContent = e.Username;

        // Create a link element for editing
        var editLinkCell = document.createElement('td');
        var editLink = document.createElement('a');
        editLink.href = `new_admin?id=${e.Account_ID}`;
        editLink.textContent = "Edit";
        editLink.style.textDecoration = "none"; // Adding style to remove underline
        editLinkCell.appendChild(editLink);

        // Append the cells to the row
        newRow.appendChild(adminNameCell);
        newRow.appendChild(adminSurnameCell);
        newRow.appendChild(adminIDCell);
        newRow.appendChild(emailCell);
        newRow.appendChild(adminUsernameCell);
        newRow.appendChild(editLinkCell);
        tbody.appendChild(newRow);
    });

}

fetcher(`http://localhost:3000/admin_manage_all`,toTable);