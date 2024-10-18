import { Box, Grid } from "@mui/material";
import MovieImageComponent from "./MovieImageComponent";
import MovieDetailsComponent from "./MovieDetailsComponent";
import MovieSearchComponent from "./MovieSearchComponent";


export default function MovieResultComponent({setSearchData,handleSubmit,movieData}) {
    
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
            }}
        >
            <Grid container spacing={2} sx={{ width: "100%", margin: 0, height:"100%" }}>
                <Grid item xs={12} sx={{height: "15%" }}>
                    <MovieSearchComponent setSearchData={setSearchData} handleSubmit={handleSubmit}/>
                </Grid>
                <Grid item xs={7} sx={{height: "85%", padding:0, paddingBottom:"5%" }}>
                    <MovieDetailsComponent movieData={movieData}/>
                </Grid>
                <Grid item xs={5} sx={{height: "85%", padding:0, paddingRight:"10%", paddingBottom:"5%"}}>
                    <MovieImageComponent moviePicture={movieData.poster}/>
                </Grid>
            </Grid>

        </Box>
    );
}
