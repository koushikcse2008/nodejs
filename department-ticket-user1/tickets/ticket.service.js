const Ticket = require('./ticket.model');
const User = require('../users/user.model');
const mongoose = require('mongoose');

const createTicket = async (newTicket) => {
        try {            
            return await new Ticket(newTicket).save();           
          } catch (error) {
            throw error;
          }
}

const getTicket = async () => {
  try{
    return await Ticket.find();
  }
  catch(error) {
    throw(error);
  }
}

const getAllTicket = async () => {
  try{
    //return await Ticket.find();

    // const result = await User.aggregate([
    //   {
    //     $lookup: {
    //       from: "tickets",
    //       localField: "_id",
    //       foreignField: "userId",
    //       as: "ticket"
    //     }
    //   },
    //   {
    //     $unwind: '$ticket'
    //   },
    //   {
    //     $lookup: {
    //       from: "departments",
    //       localField: "tickets.departmentId",
    //       foreignField: "_id",
    //       as: "department"
    //     }
    //   },
    //   {
    //     $unwind: '$department'
    //   },
    //   {
    //     $project: {
    //       fname: 1,
    //       lname: 1,
    //       email: 1,
    //       phone: 1,
    //       "department.name": 1,
    //       "ticket.message": 1,   
    //       "ticket.status": 1,
    //       "ticket.isDelete": 1,
    //       "ticket.title": 1
    //     }
    //   }
    // ]);

    const result = await User.aggregate([
      {
        $lookup: {
          from: "tickets",        // Lookup 'tickets' collection
          localField: "_id",       // User._id
          foreignField: "userId",  // Ticket.userId
          as: "ticket"             // Result will be stored in 'ticket'
        }
      },
      {
        $unwind: '$ticket'         // Unwind 'ticket' array into individual documents
      },
      {
        $lookup: {
          from: "departments",       // Lookup 'departments' collection
          localField: "ticket.departmentId", // Reference ticket.departmentId
          foreignField: "_id",        // Department._id
          as: "department"            // Result stored in 'department'
        }
      },
      {
        $unwind: '$department'       // Unwind 'department' array into individual documents
      },
      {
        $group: {                     // Group by user _id
          _id: '$_id',                // Group by user's ID
          fname: { $first: '$fname' }, // Use $first to retain the first fname
          lname: { $first: '$lname' }, // Use $first to retain the first lname
          email: { $first: '$email' }, // Use $first to retain the first email
          phone: { $first: '$phone' }, // Use $first to retain the first phone
          totalTicket: { $sum: 1 },
          tickets: {                  // Group the ticket details in an array
            $push: {
              message: '$ticket.message',
              status: '$ticket.status',
              isDelete: '$ticket.isDelete',
              title: '$ticket.title',
              department: '$department.name'  // Add department name to each ticket
            }
          }
        }
      },
      {
        $project: {                  // Define fields in the result
          fname: 1,
          lname: 1,
          email: 1,
          phone: 1,
          totalTicket: 1,
          tickets: 1                 // Include all tickets and department info
        }
      }
    ]);
    

    // const result = await Ticket.aggregate([
    //   // {
    //   //   $match: {
    //   //     userId: mongoose.Types.ObjectId(_id)
    //   //   }
    //   // },
    //   {
    //     $lookup: {
    //       from: "users",
    //       localField: "userId",
    //       foreignField: "_id",
    //       as: "user"
    //     }
    //   },
    //   {
    //     $unwind: '$user'
    //   },
    //   {
    //     $lookup: {
    //       from: "departments",
    //       localField: "departmentId",
    //       foreignField: "_id",
    //       as: "department"
    //     }
    //   },
    //   {
    //     $unwind: '$department'
    //   },
    //   {
    //     $project: {
    //       "user.fname": 1,
    //       "user.lname": 1,
    //       "user.email": 1,
    //       "user.phone": 1,
    //       "department.name": 1,
    //       "message": 1,   
    //       "status": 1,
    //       "isDelete": 1,
    //       "title": 1
    //     }
    //   }
    // ]);

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
