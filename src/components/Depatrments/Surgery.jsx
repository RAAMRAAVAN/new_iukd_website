import { Box, Grid, Typography } from "@mui/material"
import { FixedHeader } from "../Header/FixedHeader"
import { Footers } from "../Footer/Footers"

export const Surgery = () => {
    return (<>
        <FixedHeader page="Surgery" />
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' marginY={6}>
        </Box>
        <Footers />
    </>)
}