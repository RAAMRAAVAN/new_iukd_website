import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { Employees } from "./Employees";

export const Birthday = () => {
    const [id, SetId] = useState();
    const [name, SetName] = useState();
    const [dob, SetDob] = useState();
    const [phoneno, SetPhoneNo] = useState();
    const [employees, SetEmployees] = useState(null);
    // const employeees=employees
    const [loading, SetLoading] = useState(false);
    const data = { "id": id, "name": name, "dob": dob, "phoneno": phoneno }
    const Clear = () => {
        SetId(null);
        SetName(null);
        SetDob(null);
        SetEmployees(null);
        SetPhoneNo(null);
    }
    const Submit = async () => {
        try {
          SetLoading(true);
          const response = await axios.post('http://localhost:5000/create-employee', data);
          if (response.data.status) {
            alert("Employee details saved successfully");
            SetEmployees(response.data);
          } else {
            console.log(response)
            alert(`Error: ${response.data.error}`);
            // Optionally, you can log detailed error information if available
            console.error("Detailed Error:", response.data.detailedError);
          }
        } catch (error) {
          console.error("Network Error:", error);
          alert("An unexpected error occurred. Please try again later.");
        } finally {
          SetLoading(false);
          fetchData();
          Clear();
        }
      };
    const Submit2 = async () => {
        try {
            SetLoading(true);
            const response = await axios.post('http://localhost:5000/create-employee', data);
            // Assuming response.data includes status and message properties
            if (response.data.status) {
                // Operation was successful
                alert("Employee details saved successfully");
                SetEmployees(response.data);
                // Optionally, you can perform additional actions on success
            } else {
                // Operation failed, display the error message
                alert(`Error: ${response.data.error}`);
            }
        } catch (error) {
            // Handle network errors or unexpected errors
            console.error("Error:", error);
            alert("An unexpected error occurred. Please try again later.");
        } finally {
            SetLoading(false);
            fetchData(); // Assuming fetchData is a function to refetch data
            Clear();
        }
    };
    // const Submit = async () => {
    //     try {
    //         SetLoading(true);
    //         const response = await axios.post('http://localhost:5000/create-employee', data); // Replace with your API endpoint
    //         SetEmployees(response.data);
    //     } catch (error) {
    //         console.log("error", error.message);
    //         alert(error.response.data)
    //     } finally {
    //         SetLoading(false);
    //         fetchData();
    //         Clear();
    //     }
    // }
    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:5000/get-employees');
            SetEmployees(response.data);

            SetLoading(true);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {


        fetchData(); // Call the asynchronous function

        // No need for a cleanup function in this case because there are no subscriptions or intervals.

    }, []);
    // console.log("employee data=", employees)

    return (<>
        <Typography variant="h4" marginTop={5} textAlign="center">Enter Employee Details to send Birth Day Wish</Typography>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginY={5}>
            <Grid container display="flex" alignItems="center" alignContent="center" width="90%" justifyContent="space-between">
                {/* {loading ? 'Fetching data...' : 'Fetch Data'} */}
                <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                    <Typography marginRight={2}>Employee ID</Typography>
                    {/* <TextField value={id} onChange={(e) => { SetId(e.target.value) }} /> */}
                </Grid>
                <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                    <Typography marginRight={2}>Employee Name</Typography>
                    {/* <TextField value={name} onChange={(e) => { SetName(e.target.value) }} /> */}
                </Grid>
                <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                    <Typography marginRight={2}>Enter DOB</Typography>
                    {/* <TextField type="date" value={dob} onChange={(e) => { SetDob(e.target.value) }} />*/}
                </Grid>
                <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                    <Typography marginRight={2}>Enter Phone Number</Typography>
                </Grid>
                <Grid item lg={2}>
                    {/* <Button variant="contained" onClick={Submit}>Submit</Button> */}
                </Grid>
                {/* <Button variant="contained" onClick={Submit}>Submit</Button> */}
            </Grid>
            {/* {loading ? console.log("employees=",employees.items) :"fetching " } */}

            {loading ? employees.items.map((employee, index) => { return (<Employees key={index} update={false} emp_details={employee} />) }) : "fetching "}
            <Grid container display="flex" alignItems="center" alignContent="center" width="90%" justifyContent="space-between">
                {/* {loading ? 'Fetching data...' : 'Fetch Data'} */}
                <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                    {/* <Typography marginRight={2}>Employee ID</Typography> */}
                    <TextField value={id} onChange={(e) => { SetId(e.target.value) }} />
                </Grid>
                <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                    {/* <Typography marginRight={2}>Employee Name</Typography> */}
                    <TextField value={name} onChange={(e) => { SetName(e.target.value) }} />
                </Grid>
                <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                    {/* <Typography marginRight={2}>Enter DOB</Typography> */}
                    <TextField type="date" value={dob} onChange={(e) => { SetDob(e.target.value) }} />
                </Grid>
                <Grid item lg={2} display="flex" alignItems="center" justifyContent="center">
                    <TextField value={phoneno} onChange={(e) => { SetPhoneNo(e.target.value) }} />
                </Grid>
                <Grid item lg={2}>
                    <Button variant="contained" onClick={Submit}>Submit</Button>
                </Grid>

            </Grid>
        </Box>
    </>)
}