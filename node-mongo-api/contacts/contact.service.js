const Contact = require('./contact.model');

const createContact = async (newContact) => {
    if(newContact.fname === '') {
        throw 'Please enter fname';
      } else if(newContact.lname === '') {
        throw 'Please enter lname';
      } else if(newContact.email === '') {
        throw 'Please enter email';
      } else if(newContact.phone === '') {
        throw 'Please enter phone';
      } else if(newContact.subject === '') {
        throw 'Please enter subject';
      } else if(newContact.message === '') {
        throw 'Please enter message';
      } else {
        try {
            //console.log("hi")
            return await new Contact(newContact).save();           
          } catch (error) {
            throw error;
          }
      }
}

const updateContact = async (updateContact) => {
  console.log(updateContact.fname);
  try {
    await Contact.findOneAndUpdate(
      {
        email: updateContact.email,
      },
      {
        fname: updateContact.fname,
        lname: updateContact.lname,
      },
      {
        new: true,
      }
    );
    return await Contact.find();
  } catch (error) {
    throw error;
  }
}

const listContact = async () => {
  try {
    return await Contact.find();
  } catch (error) {
    throw error;
  }
}

const deleteContact = async(delId) => {
  try{
   return await Contact.findByIdAndDelete(delId);
  }
  catch (err) {
    throw err;
  };
}

module.exports = {
    createContact,
    updateContact,
    listContact,
    deleteContact
}