

function toCreate(){
    const Name = document.querySelector("#productname");
    const status = document.querySelector("#status");
    const id = document.querySelector("#productid");
    const category = document.querySelector("#category");
    const Price = document.querySelector("#price");
    const Img_path = document.querySelector("#profileimg");
    const description = document.querySelector("#description");
    const product = {
        "Product": {
            "Product_ID": id.value,
            "Name": Name.value,
            "Categories": category.value,
            "Price": Price.value,
            "Status": status.value,
            "Description": description.value,
            "Image_Path": Img_path.src
        }
    };
    
    const jsonString = JSON.stringify(product);
    fetcher_put('http://localhost:3000/newProduct',"POST",jsonString)
    window.location.replace("/product_manage");
}

function fetcher_put(url,method,json){
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

if(id){
    fetcher(`http://localhost:3000/product_id/${id}`,toEditInfo);
}

