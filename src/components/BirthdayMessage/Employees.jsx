import { Button, Grid, TextField } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

const DateFormatter = (undob) => {
    // Assuming props.emp_details.dob is in the format "2000-01-12T00:00:00.000Z"
    const originalTimestamp = undob;

    // Convert string to Date object
    const originalDate = new Date(originalTimestamp);

    // Get the year, month, and day
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(originalDate.getDate()).padStart(2, '0');

    // Formatted date in "yyyy-MM-dd" format
    const formattedDate = `${year}-${month}-${day}`;
    return(formattedDate)
}

export const Employees = (props) => {
    const [employeeID, SetEmployeeID] = useState(props.emp_details.employeeID)
    const [userName, SetUserName] = useState(props.emp_details.userName);
    const [dob, SetDob] = useState(props.emp_details.dob);
    const [phoneno, SetPhoneNo] = useState(props.emp_details.phoneno);
    const [update, SetUpdate] = useState(false)
    const [initialRendering, SetInitialRendering] = useState(true)
    
    const data = { "name": userName, "dob": dob, "phoneno": phoneno }
    // console.log("inside employees", props.emp_details)
    useEffect(() => {
        // No update logic here for initial rendering
        SetUpdate(false);
    }, []);

    const Update = async () => {
        // SetUpdate(false);
        try {
            // SetLoading(true);
            const response = await axios.put('http://localhost:5000/update-employee/' + props.emp_details._id, data); // Replace with your API endpoint
            // SetEmployees(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            SetUpdate(false);
        }
    }

    useEffect(() => {
        if (userName !== props.emp_details.userName || dob !== DateFormatter(props.emp_details.dob) || phoneno !== props.emp_details.phoneno) {
            if (initialRendering == false) {
                SetUpdate(true);
            }
            SetInitialRendering(false)
        }
        else {
            SetUpdate(false);
        }
    }, [employeeID, userName, dob, phoneno]);
    return (<>
        <Grid container display="flex" alignItems="center" alignContent="center" width="90%" justifyContent="space-between">
            {/* {loading ? 'Fetching data...' : 'Fetch Data'} */}
            <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                {/* <Typography marginRight={2}>Employee ID</Typography> */}
                <TextField value={props.emp_details.employeeID} />
            </Grid>
            <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                {/* <Typography marginRight={2}>Employee Name</Typography> */}
                <TextField value={userName} onChange={(e) => SetUserName(e.target.value)} />
            </Grid>
            <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                {/* <Typography marginRight={2}>Enter DOB</Typography> */}
                <TextField type="date" value={DateFormatter(dob)} onChange={(e) => SetDob(e.target.value)} />
            </Grid>
            <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                <TextField value={phoneno} onChange={(e) => SetPhoneNo(e.target.value)} />
            </Grid>
            <Grid item lg={2} >
                {update ? <Button variant="contained" onClick={Update}>Update</Button> : null}
            </Grid>

        </Grid>
    </>)
}