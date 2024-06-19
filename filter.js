function fetcher(url,functions){
    fetch(url)
        .then(response => response.json()) 
        .then(json => {
            functions(json);
        })
        .catch(error => console.error('Error fetching data:', error));
    }


function toFilter(json){
    const container = document.querySelector('#list');
    container.innerHTML='';
    json.data.sort((a, b) => a.Price - b.Price)
    json.data.forEach(e =>{
        const div = document.createElement('div');
        div.classList.add('column'); // Set class attribute
        const article = document.createElement('article')
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
        div.appendChild(article)
        container.appendChild(div)
    })


}  

function toSort(){
    const key = window.location.search;
    const urlParams = new URLSearchParams(key);
    const serch_value = urlParams.get('search_value');
    if (serch_value === null){
        fetcher(`http://localhost:3000/product_all`,toFilter);
        return 0;
    }
    if(serch_value.length != 0){
        fetcher(`http://localhost:3000/product/${serch_value}`,toFilter);
    }else{
        fetcher(`http://localhost:3000/product_all`,toFilter);
    }
    
}




document.addEventListener("DOMContentLoaded", function() {
});