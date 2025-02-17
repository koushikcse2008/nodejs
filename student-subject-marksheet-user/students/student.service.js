const Marksheets = require('../marksheets/marksheet.model');
const Student = require('./student.model');
// const mongoose = require('mongoose');
// mongoose.set('strictPopulate', false);

const getAllDetails = async () => {
        try {
            //console.log("hi")

            const result = await Student.find()
            .populate({
              path: 'marksheet',       // First populate marksheet
              model: 'Marksheet',
              populate: {
                path: 'subject_id',       // Then populate subject within marksheet
                model: 'Subject'       // Explicitly specify the Subject model if necessary
              }
            });

            // const result = await Student.find()
            // .populate({
            //   path: 'Marksheet',       // First populate marksheet
            //   populate: {
            //     path: 'subject',       // Then populate subject within marksheet
            //     model: 'Subject'       // Explicitly specify the Subject model if necessary
            //   }
            // });

            // const result = await Student.aggregate([
            //   {                
            //     $lookup: {
            //       from: "marksheets",
            //       localField: "_id",         
            //       foreignField: "student_id",
            //       as: "marks_info"            
            //     }
            //   },
            //   {                
            //     $unwind: "$marks_info"
            //   },              
            //   {
            //     // Optional: Project the required fields
            //     $project: {
            //       studentInfo: { $concat: ["$fname", " ", "$lname", ", ", "$email", ", ", "$phone"] },
            //       fname: 1,
            //       marks: "$marks_info.marks_obtained",
            //       grade: "$marks_info.grade",
            //       subject: "$classname"
            //     }
            //   }
            // ]);

            // const result = await Marksheet.aggregate([
            //   // {
            //   //   // Match marksheets for the specific student
            //   //   $match: {
            //   //     student_id: mongoose.Types.ObjectId(studentId)
            //   //   }
            //   // },
            //   {
            //     // Join with the student collection
            //     $lookup: {
            //       from: 'students', // The collection name of 'students'
            //       localField: 'student_id',
            //       foreignField: '_id',
            //       as: 'student'
            //     }
            //   },
            //   {
            //     // Join with the subject collection
            //     $lookup: {
            //       from: 'subjects', // The collection name of 'subjects'
            //       localField: 'subject_id',
            //       foreignField: '_id',
            //       as: 'subject'
            //     }
            //   },
            //   {
            //     // Flatten the arrays from $lookup (as $lookup results in arrays)
            //     $unwind: '$student'
            //   },
            //   {
            //     $unwind: '$subject'
            //   },
            //   {
            //     // Optionally project only the required fields
            //     $project: {
            //       _id: 0,
            //       "student.fname": 1,
            //       "student.lname": 1,
            //       "student.email": 1,
            //       "subject.name": 1,
            //       "subject.classname": 1,
            //       marks_obtained: 1,
            //       grade: 1
            //     }
            //   }
            // ]);


            console.log("get Resultttttt: ",result);
            return result;
            
            //return await new Student().save();           
          } catch (error) {
            throw error;
          }
}

module.exports = {
  getAllDetails,
}

//validate fields
//token expire time
//token compare
//middleware token checking