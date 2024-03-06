import { Box, Typography } from "@mui/material"
import { Header } from "./Header"

export const FixedHeader = (props) => {
    return (<>
        <Header />
        <Box sx={{ background: 'linear-gradient(to right, #0f5c33, #034220)', display: "flex", flexDirection: "column", alignItems: "center" }} paddingY={4}>
            <Typography variant="h4" color="white">{props.page}</Typography>
            <Typography color="white">Home / {props.page}</Typography>
        </Box>
    </>)
}