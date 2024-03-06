import { Box, Typography } from "@mui/material"

export const CountingsBox = (props) => {
    return(<>
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width="300px" height="150px" sx={{border: '2px green solid', backgroundColor: 'transparent', borderRadius:"5px"}} >
        <Typography fontWeight='bold' fontSize={40} color='green'>{props.number}</Typography>
        <Typography fontWeight={'bold'} fontSize={16}>{props.text}</Typography>
    </Box>
    </>)
}