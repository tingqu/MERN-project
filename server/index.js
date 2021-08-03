import express, { application } from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import studentRoutes from './routes/student.js';

const app = express()


app.use('/students', studentRoutes);

app.use(express.json({limit: '20mb', extended:true}));
app.use(express.urlencoded({ limit: '20mb',extended: true }));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://SylviaQu:quting.qt.123.@cluster0.qzfmt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT,()=>console.log (`Connection is established and running on port: ${PORT}`))).catch((err)=>console.log(err.message)); 

mongoose.set('useFindAndModify',false);
