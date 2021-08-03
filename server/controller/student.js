import StudentData from '../models/student.js';

export const getStudents = async (req, res) => {
    try {
        //find students from student model and store in the allStudent 
        const allStudents = await StudentData.find();

        // and send back to json
        res.status(200).json(allStudents);

    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createStudent = async (req, res) => {
    //whatever request we get would store in here
    const student = req.body

    const newStudent = new StudentData(student)

    try {
        //Saving the data 

        //Because the data needs some times to be saved that why we need to use await and
        //once we used await inside of the function then the function needs to have async in front of it
       await newStudent.save();
       res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}