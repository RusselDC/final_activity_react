import axios from "axios";
import * as React from "react"
import "./styles/style.css"
import { AppBar, Toolbar, Box, Container } from '@mui/material';
import Application from "./components/Application";



function App() {

  //React.useEffect(() => {
  //    const fetchData = async() =>
  //    {
  //      const response = await axios.get("http://www.omdbapi.com/?apikey=387b2d33&t=Transformers")
  //      console.log(response)
  //    }
  //
  //    fetchData()
  //},[])




  return (
    <AppBar position="static" sx={
      { 
        padding: 0,
        margin: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: "#556678",
        boxShadow: 'none',
        position: 'relative',
        overflowY: 'scroll',
        overflowX:'hidden',
        scrollbarWidth: 'none', // Hides scrollbar in Firefox
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
        }
        }}
        disableGuters
        >
        <Application/>
        </AppBar>
  );
}

export default App;
