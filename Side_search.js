function fetcher(url, functions) {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            functions(json);
        })
        .catch(error => console.error('Error fetching data:', error));
}



function reAction(){
    const search = document.querySelector("#side_search");
    const Catego = document.querySelector("#category");
    const minprice = document.querySelector("#min_price");
    const max_price = document.querySelector("#max_price");
    const min = minprice.value ? minprice.value : "0";
    const max = max_price.value ? max_price.value : "9999999";
    
    if (!Catego.value && !search.value){
        fetcher(`http://localhost:3000/product/price/${min}/${max}`,toProduct);
    }
    else if (!Catego.value){
        fetcher(`http://localhost:3000/product/price/${min}/${max}/empty/cat/${search.value}`,toProduct);
    }
    else if (!search.value){
        fetcher(`http://localhost:3000/product/price/${min}/${max}/${Catego.value}`,toProduct);
    }
    else {
        fetcher(`http://localhost:3000/product/price/${min}/${max}/${search.value}/${Catego.value}`,toProduct);
    }
}
