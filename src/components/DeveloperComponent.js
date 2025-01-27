import { Box } from "@mui/material"
import DeveloperImage from "./DeveloperImage"
import DeveloperDetails from "./DeveloperDetails"

export default function DeveloperComponent()
{
    return<Box
    
    sx={{
        height:"100%",
        width:"100%",
        margin:0,
        padding:0,
        backgroundColor:"white",
        display:"flex"
    }}
    
    >

    <Box sx={{height:"100%",width:"50%"}}>
        <DeveloperDetails/>
    </Box>
    <Box sx={{height:"100%",width:"50%", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <DeveloperImage/>
    </Box>




    </Box>
}