const Department = require('./department.model');


const createDepartment = async (newDepartment) => {
  try {
      return await new Department(newDepartment).save();           
    } catch (error) {
      throw error;
    }
}

const getDepartment = async () => {
  try {
      return await Department.find();           
    } catch (error) {
      throw error;
    }
}

module.exports = {
  createDepartment,
  getDepartment,
}
