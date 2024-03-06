import { NavBar } from "./Navbar"
import { Box, IconButton } from "@mui/material"
import { Typography } from '@mui/material';


import { Call } from "@mui/icons-material";
import { Heading } from "./Heading";
import { LogoAndContact } from "./LogoAndContact";
export const Header = () => {
    
    return(<>
    <Heading/>
    <LogoAndContact/>
    <NavBar/>
    </>)
}