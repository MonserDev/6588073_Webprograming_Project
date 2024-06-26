# Shopping Website
This is a University Project.
**In this project i have learned about**

* Front-end
1. HTML
2. CSS
3. Java script
   
* Back-end 
1. Node.js
2. Java script
3. Mysql

* More
1. Session cookies
2. Rest API
3. Connect with Database


### Homepage (pull data from database)
![img](https://i.imgur.com/q8kZ8I5.png[/img])

### Search page (pull data from database)

![img](https://i.imgur.com/9ygAbjc.png[/img])

### Profilepage (Session cookies)

![img](https://i.imgur.com/iL9eGVX.png[/img])

### Add/Edit Product page (REST API)

![img](https://i.imgur.com/EnwHyXG.png[/img])

### Script set cookies
```js
function setCookie(name,value,setdate){
    const data = new Date();
    data.setTime(data.getTime() + (setdate * 24 * 60 * 60 *1000));
    let expires = "expires=" + data.toUTCString();
    document.cookie =  `${name}=${value}; ${expires}; path = /`;
}
```

 ### Script Fetcher (Fetch api)
```js
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
```

### Script Sidebar search
```js
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
```

### Script Rest API (Edit/Add/Delete Product)

```js
router.post('/newProduct', function (req, res) {
    let Product = req.body.Product;
    console.log(Product)

    if (!Product) {
        return res.status(400).send({ error: true, message: 'Please provide Product infomation' });
    }
    connection.query("Insert INTO Products SET ?", Product, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New product is created !' });
    });
});

router.delete('/deleteProduct', function (req, res) {
    let Product_ID = req.body.Product_ID;

    if (!Product_ID) {
        return res.status(400).send({ error: true, message: 'Please provide valid Product_ID' });
    }
    connection.query('Delete FROM Products WHERE Product_ID = ?', Product_ID, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'Deleted Product !' })
    });
});

router.put('/editProduct', function (req, res) {
    let Product = req.body.Product;
    let Product_ID = req.body.Product.Product_ID;

    if (!Product) {
        return res.status(400).send({ error: true, message: 'Please provide Product infomation' });
    }
    connection.query("UPDATE Products set ? WHERE Product_ID = ?", [Product, Product_ID], function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'product is Updated !' });
    });
});
```

