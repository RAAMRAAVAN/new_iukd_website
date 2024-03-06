import { Box, Typography } from "@mui/material"
import { Footers } from "../Footer/Footers"
import { FixedHeader } from "../Header/FixedHeader"

export const EndoUrologicalSurgeries = () => {
    return (<>
        <FixedHeader page="Endo Urological Surgeries" />
        <Box display='flex' flexDirection='column' alignItems='center' marginY={4}>
            <Box width='90%'>
                <Typography >Institute of Urology and Kidney Diseases is proud to offer a comprehensive range of advanced Endo Urological Surgeries. With our state-of-the-art facilities and highly skilled medical team, we deliver exceptional care for urological conditions using minimally invasive techniques. Experience faster recovery times, reduced discomfort, and outstanding outcomes with our specialized services.</Typography>
                <Typography fontWeight='bold' paddingY={3}>Services Offered:</Typography>
                <ol>
                    <li style={{fontSize:"15px"}}>Transurethral Resection of Bladder Tumors (TURBT): Effective removal of bladder tumors using advanced endoscopic techniques, ensuring precise and thorough treatment for bladder cancer.</li>
                    <li style={{fontSize:"15px"}}>Transurethral Resection of the Prostate (TURP): Minimally invasive surgery to treat benign prostatic hyperplasia (BPH) by removing excess prostate tissue, improving urinary flow and enhancing quality of life.</li>
                    <li style={{fontSize:"15px"}}>Ureteroscopy: Utilizing a flexible ureteroscope, we diagnose and treat ureteral conditions, such as kidney stones and strictures, providing targeted and minimally invasive care.</li>
                    <li style={{fontSize:"15px"}}>Percutaneous Nephrolithotomy (PCNL): Precise removal of large kidney stones or renal pelvis stones through a small incision, utilizing specialized instruments and techniques to ensure optimal outcomes.</li>
                    <li style={{fontSize:"15px"}}>Laser Lithotripsy: State-of-the-art laser technology to break down kidney stones and ureteral stones into smaller fragments, facilitating natural passage or removal using minimally invasive methods.</li>
                    <li style={{fontSize:"15px"}}>Endoscopic Pyeloplasty: Advanced robotic or laparoscopic techniques for reconstructive surgery to correct ureteropelvic junction obstruction, improving urinary flow and preserving kidney function.</li>
                </ol>
                <Typography>Our dedicated team of urologists, surgeons, and medical professionals prioritize your comfort, safety, and personalized care throughout your treatment journey. From comprehensive pre-operative assessments to specialized post-operative care, we are committed to your well-being and optimal recovery.</Typography>
                <Typography paddingY={3}>Choose IUKD for Endo Urological Surgeries, where excellence meets innovation, ensuring outstanding outcomes and improving the quality of life for our valued patients.</Typography>
            </Box>

        </Box>
        <Footers />
    </>)
}