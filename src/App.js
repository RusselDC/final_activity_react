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
        }}
        disableGuters
        >
        <Application/>
        </AppBar>
  );
}

export default App;
