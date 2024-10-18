import { Box, TextField, Select, MenuItem, Button } from "@mui/material";
import * as React from 'react';

const MovieSearchComponent = ({setSearchData,handleSubmit}) => {
    const [plot, setPlot] = React.useState("Plot");

    const handleChange = (event, jsonProp) => {
        setPlot(event.target.value);
        setSearchData(prev => ({...prev, [jsonProp]:event.target.value}))
    };

    

    const inputStyle = () => {
        return {
            backgroundColor: '#f5f5f5',
            input: {
                color: '#666',
            },
            '& .MuiInputLabel-root': {
                color: '#999',
            },
            '& .MuiFilledInput-root': {
                backgroundColor: '#f5f5f5',
            },
            '& .MuiFilledInput-underline:before': {
                borderBottomColor: '#ddd',
            },
            '& .MuiFilledInput-underline:hover:before': {
                borderBottomColor: '#bbb',
            },
            '& .MuiFilledInput-underline:after': {
                borderBottomColor: '#888',
            },
            marginRight: "2%",
            width: "20%",
        };
    };

    return (
        <Box sx={{ height: "100%", width: "100%", display: "flex", alignItems: "center", paddingLeft: "2.5%" }}>
            <TextField id="filled-basic" label="Title" onChange={(event) => {handleChange(event,"title")}} variant="filled" sx={inputStyle()} />
            <TextField id="filled-basic" label="Year" onChange={(event) => {handleChange(event,"year")}} variant="filled" sx={inputStyle()} />
            
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={plot}
                label="Plot"
                onChange={(event) => {handleChange(event,"plot")}}
                sx={inputStyle()}
            >
                <MenuItem value="Plot" disabled={true}>Plot</MenuItem>
                <MenuItem value="Short">Short</MenuItem>
                <MenuItem value="Full">Full</MenuItem>
            </Select>

            
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                height: '60px',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Search
            </Button>
        </Box>
    );
};

export default MovieSearchComponent;
