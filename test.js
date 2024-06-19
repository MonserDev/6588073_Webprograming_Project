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

function toBox(json){
    const ul = document.querySelector('ul');
    ul.innerHTML='';
    json.data.forEach(e =>{
        const div = document.createElement('div');
        div.classList.add('column'); // Set class attribute

        const image = document.createElement('img');
        image.setAttribute('src', './shoes/product5.jpg'); // Set src attribute
        image.setAttribute('alt', 'Product 5'); // Set alt attribute
        image.style.maxWidth = '200px'; // Set max-width style
        image.style.maxHeight = '200px'; // Set max-height style

        const h3 = document.createElement('h3');
        h3.textContent = e.Name; // Assuming e.Name holds the name of the product

        const price = document.createElement('p');
        price.textContent = e.Price; // Assuming e.Price holds the price of the product

        div.appendChild(image);
        div.appendChild(h3);
        div.appendChild(price);
        ul.appendChild(div)
    })
}

function toProduct(json){
    const container = document.querySelector('#list');
    container.innerHTML='';
    if(json.data.length == 0){
        const h = document.createElement('h1');
        h.style = "color : grey";
        h.textContent = "Not found any Products Please try again !!!";
        container.appendChild(h);
    }
    json.data.forEach(e =>{
        const div = document.createElement('div');
        div.classList.add('column'); // Set class attribute
        const a = document.createElement('a');
        a.setAttribute('href',`/product_buy?id=${e.Product_ID}`);
        a.setAttribute('style', "text-decoration: none;");
        const article = document.createElement('article');
        article.classList.add('product')
        const image = document.createElement('img');
        image.setAttribute('src', e.Image_Path); // Set src attribute
        image.setAttribute('alt', 'Product 5'); // Set alt attribute

        const h3 = document.createElement('h3');
        h3.textContent = e.Name; // Assuming e.Name holds the name of the product

        const price = document.createElement('p');
        price.textContent = e.Price; // Assuming e.Price holds the price of the product

        article.appendChild(image);
        article.appendChild(h3);
        article.appendChild(price);
        a.appendChild(article);
        div.appendChild(a);
        container.appendChild(div);
    })
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

function alt(){
    alert("eee");
}






document.addEventListener("DOMContentLoaded", function() {
    const key = window.location.search;
    const urlParams = new URLSearchParams(key);
    const serch_value = urlParams.get('search_value');
    const sex = urlParams.get('sex');

    if (!serch_value && !sex){
        fetcher(`http://localhost:3000/product_all`,toProduct);
        return 0;
    }
    if(serch_value){
        fetcher(`http://localhost:3000/product/${serch_value}`,toProduct);
    }else if (sex.length){
        fetcher(`http://localhost:3000/product/price/0/99999999/${sex}`,toProduct);
    }
    else{
        fetcher(`http://localhost:3000/product_all`,toProduct);
    }
});



