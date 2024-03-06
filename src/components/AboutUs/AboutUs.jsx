import { Box, Typography } from "@mui/material"
import { Footers } from "../Footer/Footers"
import { FixedHeader } from "../Header/FixedHeader"
import { DoctorCards } from "../DoctorCard/DoctorCards"

export const AboutUs = () => {
    return (<>
        <FixedHeader page="About Us"/>
        <Box display='flex' flexDirection='column' alignItems='center' marginY={4}>
            <Box marginY={3} display='flex' flexDirection='column' alignItems='center'><Typography variant="h5">iUKD</Typography>
                <Typography >Institute Of Urology And Kidney Diseases</Typography></Box>
            <Typography width='90%'>We are a Centre for Advanced Urology & Kidney Diseases is the only centre in entire North-Eastern Region of India dedicated only for Urological Problems. With the use of Most Advanced Laser Machines and all the Urological procedures we provide the best possible Urology Care for Kidney Stones, Prostate Enlargement Problems in elderly male, Kidney and Prostate Cancer, Male sexual problems, Female Urinary problems, Emergency Urology Services. Supported by two Urologist, Nephrologists, Cardiologist, Medicine Specialist, General Surgeon and 20 well trained Urology staffs</Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' marginY={4}>
            <Typography variant="h5" marginY={3}>OUR MISSION</Typography>
            <Typography width='90%'>To establish a premier institute in Nephrology and Urology and be obliged to provide our patients with the highest level of excellence in healthcare. This we would achieve by enabling expertise, specialization and devotion at all levels of our faculty – doctors, nurses, paramedical and support staff.</Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' marginY={4}>
            <Typography variant="h5" marginY={3}>OUR VISION</Typography>
            <Typography width='90%'>We will constantly strive to encourage and promote medical learning through the best possible academic experiences for our fellow employees and associates ensuring career growth and advances. And for the community we serve, we will provide them with the newest advances in the promotion of good health and improved day-to-day lifestyles.!</Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center' marginY={4}>
            <Typography variant="h5" marginY={3}>OUR CORE TEAM</Typography>
            <DoctorCards/>
        </Box>
        <Footers />
    </>)
}