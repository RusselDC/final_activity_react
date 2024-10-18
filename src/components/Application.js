import { Box } from "@mui/material"
import MovieResultComponent from "./MovieResultComponent"
import DeveloperComponent from "./DeveloperComponent"


export default function Application()
{
    return<Box
    
    sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: '100vh',
        width:'100vw',
        margin:0,
        padding:0,
        overflowY:'scroll'
    }}
    >

    <MovieResultComponent/>
    <DeveloperComponent/>

    </Box>
}