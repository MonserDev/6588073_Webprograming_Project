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

function toHomepage(json){
    const imgOn_homepage = document.querySelectorAll("#img_homepage");
    const nameOnHomepage = document.querySelectorAll("#productname_on_homepage");
    const a_href = document.querySelectorAll("#href_a_Pdbuy");
    let i = 0;
    let j = 0;
    let k = 0;

    a_href.forEach(e =>{
        e.setAttribute('href',`/product_buy?id=${json.data[k].Product_ID}`);
        k+=1;
    })
    nameOnHomepage.forEach(e =>{
        e.innerHTML = json.data[i].Name;
        i+=1;
    })
    imgOn_homepage.forEach(e =>{
        e.setAttribute('src', json.data[j].Image_Path);
        j+=1;
        
    })
}

fetcher(`http://localhost:3000/homepage_wth_pic`,toHomepage);


