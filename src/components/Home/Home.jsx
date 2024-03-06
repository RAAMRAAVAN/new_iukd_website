import { Box,Grid} from "@mui/material"
import { Header } from "../Header/Header"
import { CountingsBox } from "../CountingsBox/CountingsBox";
import { AboutUs } from "./AboutUs";
import { OurServices } from "./OurServices/OurServices";
import { ConnectWithUs } from "./ConnectWithUs";
import { Footers } from "../Footer/Footers";
import ImageSlider from "../ContentSlider/ImageSlider";

export const Home = () => {
  return (<>
    
    <Header/>
    <ImageSlider/>
    <Box sx={{ display: "flex", justifyContent: "center", paddingY:"20px" }}>
      <Grid sx={{ display: "flex", width: "85%", justifyContent: "space-evenly" }} spacing={2}>
        <CountingsBox number={'26'} text={'Consultants'} />
        <CountingsBox number={'7'} text={'Years of Experience'} />
        <CountingsBox number={'20'} text={'Services'} />
        <CountingsBox number={'1,000'} text={'Support Staff'} />
      </Grid>
    </Box>
    <AboutUs/>
    <OurServices/>
    {/* <ConnectWithUs/> */}
    <Footers/>
  </>)
}