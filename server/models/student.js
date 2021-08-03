import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName:String,
    grade:String,
    //give value by default 
    section:{
        type:String,
        default:'A'
    },
    
});

const student = mongoose.model('student',studentSchema);

export default student; 