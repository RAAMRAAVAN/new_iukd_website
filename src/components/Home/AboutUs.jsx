import { Box, Container, Grid, Typography } from "@mui/material"

export const AboutUs = () => {
    return (<>
        <Box paddingY={4} sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box>
                <Typography variant="h4" textAlign='center' >About Us</Typography>
                <Typography variant="h6" textAlign='center' paddingBottom={4}>Institute of Urology And Kidney Diseases</Typography></Box>
            <Grid container width='85%' display='flex' justifyContent='space-between' alignItems='center'>
                <Grid item xs={12} sm={6}>
                    <Typography fontWeight="bold" fontSize={20} sx={{ textDecoration: 'underline', textDecorationColor: 'green', marginBottom: '8px', textDecorationSkipInk: '20px', }}>Who We Are</Typography>
                    <Typography textAlign="justify">We are a Centre for Institute of Urology and Kidney Diseases, the only centre in entire North-Eastern Region of India dedicated only for Urological Problems. With the use of Most Advanced Laser Machines and all the Urological procedures we provide the best possible Urology Care for Kidney Stones, Prostate Enlargement Problems in elderly male, Kidney and Prostate Cancer, Male sexual problems, Female Urinary problems, Emergency Urology Services. Supported by two Urologist, Nephrologists, Cardiologist, Medicine Specialist, General Surgeon and 20 well trained Urology staffs</Typography>
                </Grid>
                <Grid item xs={12} sm={4} overflow='hidden'>
                    <img style={{ display: "flex", width: "100%", height: "100%", borderRadius: "20px" }} src="https://www.iukdindia.com/_next/image?url=%2Fservices%2Fabout2.jpg&w=1920&q=75" />
                </Grid>
            </Grid>
        </Box>
    </>)
}