const Student = require('./student.model');

const getData = async () => {
    //const data = await Student.find({}).sort({class: 1});
    // const data = await Student.aggregate([
    //     { $group: { _id: "$email", count: { $sum: 1 } } },
    // ]);
    //const data = await Student.countDocuments();

    const data = await Student.aggregate([
        //{ $group: { _id: "_id", count: { $sum: 1 }, maxMarks: {$max: '$marks'}, minMarks: {$min: '$marks'}, totalAmount: { $sum: '$marks' } } }
        {
            $addFields: { 
                age: { $dateDiff: { startDate: "$dob", endDate: "$$NOW", unit: "year" } } 
            }
        },
        { 
            $project: { 
                fullName: { $concat: ['$fname', ' ', '$lname'] },
                address: { $concat: ['$address1', ', ', '$address2'] },
                age: 1
            } 
        }
    ]);

    return data;
}

module.exports = {
    getData
}