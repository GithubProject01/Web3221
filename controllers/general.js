const express = require('express')
const router = express.Router();


//home route
const products = require("../models/product");
router.get("/", (req, res)=>{
    res.render("general/home",{
        title: "Home Title",
        data: products.topmeal.getAllMeals()
    })
});

router.get("/dashboard", (req, res)=>{
    res.render("general/dashboard");
});

// listing route
router.get("/listing", (req, res)=>{
    res.render("products/listing",{
        title: "Package Title",
        data: products.product.getAllProducts()
    })
});

// login route
router.get("/login", (req, res)=>{
    res.render("general/login",{
        title: "Login Title"
    })
});

//contact us route
router.get("/registration",(req,res)=>{

    res.render("general/registration",{
        title:"Contact Page"
    });
});

//process contact us form for when user submits form
router.post("/registration",(req,res)=>{
    const {firstname, lastname, email, message} = req.body;
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("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");
    const msg = {
      from: `${email}`,
      to: `kirtimarkan01@gmail.com`,
      subject: 'Sending with Twilio SendGrid is Fun',
      html: `Visiter full name ${firstname}`,
    };
    sgMail.send(msg)
    .then(()=>{
      res.redirect("/dashboard");
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })
    //const {firstName,lastName,email} = req.body;
    //const sgMail = require('@sendgrid/mail');
    
    //sgMail.setApiKey("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");
    //const msg = {
    //to: `${email}`,
    //from: `kirtimarkan01@gmail.com`,
    //subject: 'Contact Us Form Submit',
    //html: 
    //`Vistor's Full Name ${firstName} ${lastName} <br>
     //Vistor's Email Address ${email} <br>
    //`,
    //};

    //Asynchornous operation (who don't know how long this will take to execute)
    //sgMail.send(msg);
  //  .then(()=>{
//REDIRECT THE USER TO THE DASHBOARD ROUTE
//res.redirect("/dashboard");    })
  //  .catch(err=>{
    //    console.log(`Error ${err}`);
    //});

});

module.exports = router;
