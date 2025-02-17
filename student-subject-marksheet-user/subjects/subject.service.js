const Subject = require('./subject.model');



const allSubject = async () => {
        try {            
            return await new Subject.find();           
          } catch (error) {
            throw error;
          }
}

module.exports = {
  allSubject,
}
