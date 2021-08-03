import React,{ useState, useEffect}from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function ShowStudent () {
    const classes = useStyles();

    const [studentList, setStudentList] = useState([])

    //whenever the page is reloaded or refreshed and useEffect function would get called 
    useEffect(()=>{
        axios.get('http://localhost:5000/students').then((allStudents)=>{
            setStudentList(allStudents.data);
        })
    },[])

    return (
        <>
        <h2>All Student</h2>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Registeration No.</TableCell>
                        <TableCell align="right">Grade</TableCell>
                        <TableCell align="right">Section</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentList.map((student, key) => (
                        <TableRow key={key}>
                            <TableCell component="th" scope="row">
                                {student.studentName}
                            </TableCell>
                            <TableCell align="right">{student.regNo}</TableCell>
                            <TableCell align="right">{student.grade}</TableCell>
                            <TableCell align="right">{student.section}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}
