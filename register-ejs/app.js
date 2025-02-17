const express = require('express');
//const session = require('express-session');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/"))
);
app.set('view engine', 'ejs');


const userData = [
    { id: 1, fname: "John", lname: "Doe", email: "john@gmail.com", phone: '9876543210', password: "123456" }
];

const csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({ extended: true });

// Routes
app.get('/', csrfProtection, (req, res) => {
    res.render('register', { csrfToken: req.csrfToken(), userData: userData});
});

app.post('/register', parseForm, csrfProtection, (req, res) => {

    const { fname, lname, email, phone, password } = req.body;

    if (fname == "") { return res.send("Please enter first name."); }
    if (lname == "") { return res.send("Please enter last name."); }
    if (email == "") { return res.send("Please enter email."); }
    if (phone == "") { return res.send("Please enter phone."); }
    if (password == "") { return res.send("Please enter password."); }


    try {

        const addUser = {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            password: password 
        };

        userData.push(addUser);
        res.send("User Registered Successfully");
    } catch (err) {
        res.send("Error Registering User: " + err.message);
    }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
