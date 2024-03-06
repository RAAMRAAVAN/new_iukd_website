import { Box, Grid, Typography } from "@mui/material"
import { FixedHeader } from "../Header/FixedHeader"
import { Footers } from "../Footer/Footers"
import ImageSlider from "../DoctorCard/DoctorSlider"

export const Urology = () => {
    return (<>
        <FixedHeader page="Urology" />
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginY={6}>
            <Grid container display='flex' flexDirection='row' width='90%'>
                <Typography>Welcome to the Urological Department at Institute of Urology and Kidney Disease , where our primary goal is to provide outstanding urological care that positively impacts the well-being of our patients. Through our commitment to comprehensive services, cutting-edge technology, and a patient-centered approach, we aim to exceed expectations and establish ourselves as a premier destination for urological care.</Typography>
                <Typography fontWeight='bold' marginY={4}>Our Comprehensive Urological Services</Typography>
                <Typography>At IUKD, we offer a wide range of comprehensive urological services to address various conditions and meet the unique needs of each patient. Our team of expert urologists, backed by state-of-the-art facilities, is committed to providing personalized treatment plans and ensuring optimal outcomes. Whether you require routine screenings, advanced diagnostics, or complex surgical interventions, we have the expertise and resources to deliver exceptional care.</Typography>
                <Typography marginY={2}><b style={{fontSize:"16px"}}>Diagnostic Evaluations:</b>We employ advanced diagnostic tools and techniques to accurately identify urological conditions. Our comprehensive evaluations include imaging studies, laboratory tests, urodynamic studies, and other specialized assessments to provide precise diagnoses.</Typography>
                <Typography marginY={2}><b style={{fontSize:"16px"}}>Urological Cancer Care:</b>Our team specializes in the diagnosis and treatment of urological cancers, including prostate, bladder, kidney, and testicular cancer. We utilize the latest advancements in oncology to deliver personalized treatment plans, including surgery, radiation therapy, chemotherapy, immunotherapy, and targeted therapies.</Typography>
                <Typography marginY={2}><b style={{fontSize:"16px"}}>Kidney Stone Management:</b>We offer comprehensive care for kidney stones, from diagnosis to treatment and prevention. Our urologists utilize minimally invasive procedures such as extracorporeal shock wave lithotripsy (ESWL), ureteroscopy, and laser lithotripsy to effectively treat kidney stones and help prevent their recurrence.</Typography>
                <Typography marginY={2}><b style={{fontSize:"16px"}}>Prostate Health:</b>Our department provides specialized care for prostate health, including the diagnosis and management of benign prostatic hyperplasia (BPH), prostate infections, and other prostate-related conditions. We offer various treatment options, including medications, minimally invasive procedures, and surgical interventions tailored to each patient's specific needs.</Typography>
                <Typography marginY={2}><b style={{fontSize:"16px"}}>Female Urology:</b>Our urologists are experienced in addressing female urological conditions, such as urinary incontinence, pelvic organ prolapse, and recurrent urinary tract infections. We offer comprehensive evaluations, non-surgical interventions, and surgical treatments to improve urinary function and quality of life.</Typography>
                <Typography marginY={2}><b style={{fontSize:"16px"}}>Male Sexual Health:</b>We understand the sensitive nature of male sexual health concerns and provide compassionate care for conditions such as erectile dysfunction, Peyronie's disease, and male infertility. Our team offers personalized treatment plans, including medication management, penile prostheses, shockwave therapy, and fertility treatments, to help restore and enhance sexual function.</Typography>
                <Typography marginY={2}>At IUKD's Urological Department, we are committed to providing exceptional care, utilizing advanced technology, and delivering personalized treatment plans to optimize patient outcomes. Our team of skilled urologists and dedicated healthcare professionals is here to guide you through your urological journey, offering support, expertise, and the highest standard of care. Contact us today to schedule a consultation and experience the difference our comprehensive urological services can make in your life.</Typography>
            </Grid >
            <Grid container display='flex' flexDirection='row' width='90%'>
            <Typography variant="h6" marginY={5}>Meet </Typography> <Typography marginY={5} variant="h5" sx={{color:"darkgreen"}}>Our Specialist</Typography>
            <ImageSlider/>
            </Grid>
        </Box>
        <Footers />
    </>)
}