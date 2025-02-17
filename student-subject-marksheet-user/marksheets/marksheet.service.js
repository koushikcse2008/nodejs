const Marksheet = require('./marksheet.model');

const allMarksheet = async () => {
        try {            
            return await new Marksheet.find();           
          } catch (error) {
            throw error;
          }
}

module.exports = {
  allMarksheet,
}
