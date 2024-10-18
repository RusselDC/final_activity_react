import { Box, Typography } from "@mui/material"


export default function MovieDetailsComponent({movieData})
{
    return <Box sx={{height:"100%", width:"100%", padding:"2.5%", margin:0,textAlign:"justify"}}>
        
    <Typography align="left" variant="h3" sx={{ color: "white", width:"100%", fontFamily: 'DM Sans', letterSpacing: '3px', whiteSpace: 'nowrap', 
    overflow: 'hidden', 
    textOverflow: 'ellipsis'}} gutterBottom={false}>{movieData.title}</Typography>
    <Typography align="left" variant="subtitle1" sx={{color:"white", fontFamily:"DM Sans", letterSpacing:"2px", marginLeft:"10px"}}>{movieData.year}</Typography>
    <Box sx={{height:"83%", width:"100%", padding:0, marginTop:"10px", overflowY:"scroll", scrollbarWidth: 'none', // Hides scrollbar in Firefox
        '&::-webkit-scrollbar': {
          width: '6px', // Minimal width
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent', // Hides track
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888', // Thumb color
          borderRadius: '999px', // Capsule-like thumb
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555', // Darker on hover
        }}}>
    <Typography align="left" variant="subtitle1" sx={{color:"white", fontFamily:"DM Sans", marginLeft:"10px"}}>
        {movieData.plot}
    </Typography>


    </Box>
    </Box>
}