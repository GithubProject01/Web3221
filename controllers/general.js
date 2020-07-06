const express = require('express')
const router = express.Router();

// to load home route
const products = require("../models/product");
router.get("/", (req, res)=>{
    res.render("general/home",{
        title: "Home Title",
        data: products.topmeal.getAllMeals()
    })
});

// to load dashboard page after registration
router.get("/dashboard", (req, res)=>{
    res.render("general/dashboard");
});

// to load listing route
router.get("/listing", (req, res)=>{
    res.render("products/listing",{
        title: "Package Title",
        data: products.product.getAllProducts()
    })
});

// to load login route
router.get("/login", (req, res)=>{
    res.render("general/login",{
        title: "Login Title"
    })
});

//to load contact us route
router.get("/registration",(req,res)=>{

    res.render("general/registration",{
        title:"Contact Page"
    });
});

// to load contact us form when user submit form 
// it is used to send mail to the maill written in the form

router.post("/registration",(req,res)=>{
    const {firstname, lastname, email, message} = req.body;
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("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");
    const msg = {
        from: `kirtimarkan01@gmial.com`,
        to: `${email}`,
      subject: 'Welcome to Desi Tadka',
      html: `Hello ${firstname},
      we re glad you joined us.
      Hope you enjoy our food varieties and for our special service for our customers`,
    };
    sgMail.send(msg)
    .then(()=>{
      res.redirect("/dashboard");
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })
    });

module.exports = router;