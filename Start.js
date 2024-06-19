const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(express.static(path.join(__dirname, '../sec2_gr11_src')));
app.use(cookieParser());

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)


const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2");
const { error } = require("console");
const e = require("express");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});


/* Connect to DB */
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected DB: ${process.env.MYSQL_DATABASE}`);
});


router.get('/homepage', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'homepage.html'));
});



router.get('/', (req, res) => {
    res.redirect('/homepage')
});

router.get('/edit_admin', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'new_admin.html'));
});

router.get('/product_detail', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'product_detail.html'));
});

router.get('/product_buy', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'product_buy.html'));
});

//product

router.get('/add_product', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'add_product.html'));
});

router.get('/edit_product', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'edit_product.html'));
});

//Admin

router.get('/new_admin', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'new_admin.html'));
});

router.get('/profile_adim', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'profile_adim.html'));
});

router.get('/pro_manage', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'pro_manage.html'));
});

router.get('/admin_manage', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'admin_management.html'));
});


//login

router.get('/login', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'login.html'));
});


// map


router.get('/Com_Location', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'Com_Location.html'));
});

router.get('/member', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'member.html'));
});

router.get('/create_admin', (req, res) => {
    res.status = 200
    res.sendFile(path.join(__dirname, 'create_admin.html'));
});



//////////////////////////////////// WEB SERIVICE ///////////////////////////////////////////

router.get('/homepage_wth_pic', function (req, res) {
    // let id = req.params.id;
    connection.query(`SELECT * FROM Products`, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Student retrieved' });
    });
});

router.get('/test/:id', function (req, res) {
    let id = req.params.id;
    connection.query(`SELECT * FROM User where Account_ID=?`, id, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Student retrieved' });
    });
});


router.get('/product/:name', function (req, res) {
    const name = req.params.name
    connection.query(`SELECT * FROM Products where Name LIKE ?`, "%" + name + "%", function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Product getted' });
    });
});

router.get('/product_id/:id', function (req, res) {
    const id = req.params.id
    connection.query(`SELECT * FROM Products where Product_ID = ?`, id, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Product getted' });
    });
});

router.get('/product/price/:minprice/:maxprice', function (req, res) {
    const min = req.params.minprice;
    const max = req.params.maxprice;
    connection.query(`SELECT * FROM Products WHERE Price BETWEEN ? AND ?`, [min, max], function (error, results) {
        if (error) {
            throw error;
        } else {
            return res.send({ error: false, data: results, message: 'Products fetched' });
        }
    });
});

router.get('/product/price/:minprice/:maxprice/:name/:category', function (req, res) {
    const min = req.params.minprice;
    const max = req.params.maxprice;
    const name = req.params.name;
    const category = req.params.category;

    connection.query(`SELECT * FROM Products WHERE Price BETWEEN ? AND ? and Name like ? AND Categories = ?;`, [min, max, `%${name}%`, `${category}`], function (error, results) {
        if (error) {
            throw error;
        } else {
            return res.send({ error: false, data: results, message: 'Products fetched' });
        }
    });
});

router.get('/product/price/:minprice/:maxprice/:category', function (req, res) {
    const min = req.params.minprice;
    const max = req.params.maxprice;
    const category = req.params.category;

    connection.query(`SELECT * FROM Products WHERE Price BETWEEN ? AND ? AND Categories = ?;`, [min, max, `${category}`], function (error, results) {
        if (error) {
            throw error;
        } else {
            return res.send({ error: false, data: results, message: 'Products fetched' });
        }
    });
});

router.get('/product/price/:minprice/:maxprice/empty/cat/:name', function (req, res) {
    const min = req.params.minprice;
    const max = req.params.maxprice;
    const name = req.params.name;

    connection.query(`SELECT * FROM Products WHERE Price BETWEEN ? AND ? AND Name like ?;`, [min, max, `%${name}%`], function (error, results) {
        if (error) {
            throw error;
        } else {
            return res.send({ error: false, data: results, message: 'Products fetched' });
        }
    });
});




router.get('/product_all', function (req, res) {
    connection.query(`SELECT * FROM Products`, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Products getted' });
    });
});

router.get('/login/:username/:password', function (req, res) {
    const username = req.params.username;
    const password = req.params.password;
    connection.query(`select * from Login_Information where Username = ? AND Password = ?;`, [username, password], function (err, results) {
        if (err) {
            throw err;
        } else {
            return res.send({ error: false, data: results, message: 'Login fetched' })
        }
    })
});


router.get('/admin_all/:acc_id', function (req, res) {
    const acc_id = req.params.acc_id;
    connection.query(`SELECT * FROM User u JOIN address a ON u.Account_ID = a.Account_ID WHERE u.Account_ID = ?;`, [acc_id], function (err, results) {
        if (err) {
            throw err;
        } else {
            return res.send({ error: false, data: results, message: 'Login fetched' })
        }
    })
});

router.get('/admin_all_user_pass/:acc_id', function (req, res) {
    const acc_id = req.params.acc_id;
    connection.query(`SELECT * FROM User AS u INNER JOIN address AS a ON u.Account_ID = a.Account_ID INNER JOIN Login_Information AS li ON u.Account_ID = li.Account_ID WHERE u.Account_ID = ?;`, [acc_id], function (err, results) {
        if (err) {
            throw err;
        } else {
            return res.send({ error: false, data: results, message: 'Login fetched' })
        }
    })
});
//product management
router.get('/product_manage_all', function (req, res) {
    connection.query(`SELECT * FROM Products;`, function (err, results) {
        if (err) {
            throw err;
        } else {
            return res.send({ error: false, data: results, message: 'Login fetched' })
        }
    })
});
router.get('/product_detail/product_buy/:product_id', function (req, res) {
    const product_id = req.params.product_id;
    connection.query(`SELECT Product_ID,Name,Price,Description FROM Products WHERE Product_ID = ?;`, [product_id], function (err, results) {
        if (err) {
            throw err;
        } else {
            return res.send({ error: false, data: results, message: 'Login fetched' })
        }
    })
});

// admin management
router.get('/admin_manage_all', function (req, res) {
    connection.query(`SELECT * FROM User u JOIN Login_Information l ON u.Account_ID = l.Account_ID;`, function (err, results) {
        if (err) {
            throw err;
        } else {
            return res.send({ error: false, data: results, message: 'All admin informations are shown' })
        }
    })
});

// admin add
router.post('/newAdmnin-User', function (req, res) {
    let User = req.body.User;

    if (!User) {
        return res.status(400).send({ error: true, message: 'Please provide User infomation' });
    }
    connection.query("Insert INTO User SET ?", User, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New User is added !' });
    });
});

router.post('/newAdmnin-address', function (req, res) {
    let Address = req.body.address;

    if (!Address) {
        return res.status(400).send({ error: true, message: 'Please provide address infomation' });
    }

    connection.query("Insert INTO address SET ?", Address, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New Address is added !' });
    });

});

router.post('/newAdmnin-Login_Information', function (req, res) {
    let Login_Info = req.body.Login_Information;

    if (!Login_Info) {
        return res.status(400).send({ error: true, message: 'Please provide Login_Information infomation' });
    }

    connection.query("Insert INTO Login_Information SET ?", Login_Info, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New Login_infomation is added !' });
    });

});

router.post('/newAdmnin-edit', function (req, res) {
    let Edit = req.body.edit;


    if (!Edit) {
        return res.status(400).send({ error: true, message: 'Please provide Edit infomation' });
    }

    connection.query("Insert INTO edit SET ?", Edit, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New Edit is added !' });
    });
});


///////////////////////DELETE-ADMIN//////////////////////
router.delete('/deleteAdmnin-User', function (req, res) {
    let Account_ID = req.body.Account_ID;

    if (!Account_ID) {
        return res.status(400).send({ error: true, message: 'Please provide account infomation' });
    }
    connection.query('Delete FROM User WHERE Account_ID = ?', Account_ID, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'Deleted This account from user table!' })
    });
});

router.delete('/deleteAdmnin-Login_Information', function (req, res) {
    let Account_ID = req.body.Account_ID;

    if (!Account_ID) {
        return res.status(400).send({ error: true, message: 'Please provide account infomation' });
    }
    connection.query('Delete FROM Login_Information WHERE Account_ID = ?', Account_ID, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'Deleted This account from login Information table!' })
    });
});

router.delete('/deleteAdmnin-edit', function (req, res) {
    let Account_ID = req.body.Account_ID;

    if (!Account_ID) {
        return res.status(400).send({ error: true, message: 'Please provide account infomation' });
    }
    connection.query('Delete FROM edit WHERE Account_ID = ?', Account_ID, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'Deleted This account from edit table!' })
    });
});

router.delete('/deleteAdmnin-address', function (req, res) {
    let Account_ID = req.body.Account_ID;

    if (!Account_ID) {
        return res.status(400).send({ error: true, message: 'Please provide account infomation' });
    }
    connection.query('Delete FROM address WHERE Account_ID = ?', Account_ID, function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'Deleted This account from address' })
    });

});
///////////////////////DELETE-ADMIN//////////////////////


///////////////////EDIT-ADMIN///////////////////////////
router.put('/editAdmnin-User', function (req, res) {
    const User = req.body.User;
    if (!User) {
        return res.status(400).send({ error: true, message: 'Please provide Product infomation' });
    }
    connection.query("UPDATE User SET ? WHERE Account_ID=?", [User, User.Account_ID], function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New User is added !' });
    });
});



router.put('/editAdmnin-address', function (req, res) {
    const address = req.body.address;
    if (!address) {
        return res.status(400).send({ error: true, message: 'Please provide Product infomation' });
    }
    connection.query("UPDATE address SET ? WHERE Account_ID=?", [address, address.Account_ID], function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New Address is added !' });
    });
});

router.put('/editAdmnin-edit', function (req, res) {
    const edit = req.body.edit;
    if (!edit) {
        return res.status(400).send({ error: true, message: 'Please provide Product infomation' });
    }
    connection.query("UPDATE edit SET ? WHERE Account_ID=?", [edit, edit.Account_ID], function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New edit is added !' });
    });
});

router.put('/editAdmnin-Login_Information', function (req, res) {
    const Login_Information = req.body.Login_Information;
    if (!Login_Information) {
        return res.status(400).send({ error: true, message: 'Please provide Product infomation' });
    }
    connection.query("UPDATE Login_Information SET ? WHERE Account_ID=?", [Login_Information, Login_Information.Account_ID], function (err, results) {
        if (err) throw err;
        return res.send({ error: false, data: results.affectedRows, message: 'New Login_Information is added !' });
    });
});
///////////////////EDIT-ADMIN///////////////////////////




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


//////////////////////////////////// WEB SERIVICE ///////////////////////////////////////////



/* Run Server */
app.listen(process.env.PORT, function () {
    console.log(`Server listening port:${process.env.PORT}`)
});




