import { Box, Button, TextField, Typography } from "@mui/material"
import { Footers } from "../Footer/Footers"
import { FixedHeader } from "../Header/FixedHeader"

export const Careers = () => {
    return (<>
        <FixedHeader page="Careers"/>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} paddingY={4}>
            <Box width='90%'>
                <Typography fontSize="18px" fontWeight='bold' >Thank you for your interest in working with us. Send us your application by filling out the application form . We will get in touch with you shortly</Typography>
                <Box marginY={5}>
                    <Typography fontSize="18px" fontWeight='bold' paddingY={1}>Name</Typography>
                    <TextField id="name" variant="outlined" fullWidth marginY={1}/>

                    <Typography fontSize="18px" fontWeight='bold' marginY={1}>Email</Typography>
                    <TextField id="email" variant="outlined" fullWidth marginY={1}/>

                    <Typography fontSize="18px" fontWeight='bold' marginY={1}>Mobile No:</Typography>
                    <TextField id="mobile_no" variant="outlined" fullWidth paddingY={1} marginY={1}/>

                    <Typography fontSize="18px" fontWeight='bold' marginY={1}>CV</Typography>
                    <Box sx={{border:"1px lightgray solid", padding:"10px", borderRadius:"5px"}}marginY={1}><input type="file" /></Box>


                    <Typography fontSize="18px" fontWeight='bold' marginY={1}>Cover letter:</Typography>
                    <TextField id="name" variant="outlined" fullWidth multiline rows={4} marginY={1}/>

                </Box>
                <Button variant="contained" color="success" sx={{ width: "100%" }}>Submit</Button>
            </Box>
        </Box>
        <Footers />
    </>)
}