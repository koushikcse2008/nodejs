const Ticket = require('./ticket.model');
const User = require('../users/user.model');
const mongoose = require('mongoose');
const Department = require('../departments/department.model');
mongoose.set('strictPopulate', false);
const nodemailer = require('nodemailer');
//https://itsupport.umd.edu/itsupport?id=kb_article_view&sysparm_article=KB0015112

const createTicket = async (newTicket) => {
        try {            
            return await new Ticket(newTicket).save();           
          } catch (error) {
            throw error;
          }
}

const getTicket = async () => {
  try{
    return await Ticket.find({});
  }
  catch(error) {
    throw(error);
  }
}

const getAllTicket = async (ticketId) => {
  try{

    const result = await Ticket.find({"_id": ticketId})
    .populate({
      path: 'userId',
      model: 'User'
    });

    result.forEach(data => {
      const name = data.userId.fname+ " "+data.userId.lname;
      const email = data.userId.email;
      console.log(name, email);

      //send email
      let transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other services or SMTP servers
        auth: {
          user: 'koushikcse2008@gmail.com', // Your Gmail email
          pass: 'tyeg tfdw itfj aist', // Your Gmail password or app-specific password
        },
      });

      let mailOptions = {
        from: 'koushikcse2008@gmail.com', // Sender address
        to: email, // List of receivers
        subject: 'Test Email', // Subject line
        text: 'Hello, this is a test email sent from Node.js!', // Plain text body
        // You can also add HTML content like this:
        // html: '<b>Hello, this is a test email sent from Node.js!</b>',
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log('Error occurred: ', err);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    });

    

    console.log("get Resultttttt: ",result);
    return result;

  }
  catch(error) {
    throw(error);
  }
}

module.exports = {
  createTicket,
  getTicket,
  getAllTicket,
}
