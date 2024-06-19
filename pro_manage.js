

function toTable(json) {


    const tbody = document.querySelector("#table_body");
    tbody.innerHTML = '';

    json.data.forEach(e => {
        var newRow = document.createElement('tr');
        var productNameCell = document.createElement('td');
        productNameCell.textContent = e.Name;

        var productIDCell = document.createElement('td');
        productIDCell.textContent = e.Product_ID;

        var categoryCell = document.createElement('td');
        categoryCell.textContent = e.Categories;

        var priceCell = document.createElement('td');
        priceCell.textContent = e.Price;

        // Create a link element for editing
        var editLinkCell = document.createElement('td');
        var editLink = document.createElement('a');
        editLink.href = `edit_product?id=${e.Product_ID}`;
        editLink.textContent = "Edit";
        editLink.style.textDecoration = "none"; // Adding style to remove underline
        editLinkCell.appendChild(editLink);

        // Append the cells to the row
        newRow.appendChild(productNameCell);
        newRow.appendChild(productIDCell);
        newRow.appendChild(categoryCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(editLinkCell);
        tbody.appendChild(newRow);
    });

}

fetcher(`http://localhost:3000/product_manage_all`,toTable);