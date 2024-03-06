import { Box, Typography } from "@mui/material"
import YouTubeVideo from "./YouTubeVideo"

export const ConnectWithUs = () => {
    const videoId = 'NFUc-OEgixI'
    return(<>
        <Box paddingY={6} paddingX={4}>
            <Typography variant="h4">Connect With Us</Typography>
            <YouTubeVideo videoId={videoId} />
        </Box>
    </>)
}