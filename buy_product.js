function toDetail(json){
    const Name = document.querySelector("#Name");
    const ID = document.querySelector("#Product_ID");
    const Price = document.querySelector("#Price");
    const Description = document.querySelector(".description");
    const Image = document.querySelector("#Profile_img");


    Name.innerHTML = json.data[0].Name;
    ID.innerHTML = json.data[0].Product_ID;
    Price.innerHTML = json.data[0].Price;
    Description.innerHTML = json.data[0].Description;
    Image.setAttribute('src',`${json.data[0].Image_Path}`);
}


document.addEventListener("DOMContentLoaded", function() {
    const key = window.location.search;
    const urlParams = new URLSearchParams(key);
    const id = urlParams.get('id');
    // if (serch_value === null){
    //     fetcher(`http://localhost:3000/product_all`,toProduct);
    //     return 0;
    // }
    if(id){
    fetcher(`http://localhost:3000/product_id/${id}`,toDetail);
    }else{
        window.location.replace("/")
    }
    
});