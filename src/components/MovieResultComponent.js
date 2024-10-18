import { Box, Grid } from "@mui/material";
import MovieImageComponent from "./MovieImageComponent";
import MovieDetailsComponent from "./MovieDetailsComponent";

export default function MovieResultComponent() {
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
                {/* Content for the full-width grid item */}
                </Grid>
                <Grid item xs={7} sx={{height: "85%", padding:0, paddingBottom:"5%" }}>
                    <MovieDetailsComponent/>
                </Grid>
                <Grid item xs={5} sx={{height: "85%", padding:0, paddingRight:"10%", paddingBottom:"5%"}}>
                    <MovieImageComponent/>
                </Grid>
            </Grid>

        </Box>
    );
}
