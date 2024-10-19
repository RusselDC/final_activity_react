
import * as React from "react"
import "./styles/style.css"
import { AppBar} from '@mui/material';
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
        background:"url('https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg')",
        boxShadow: 'none',
        position: 'relative',
        overflowY: 'scroll',
        overflowX:'hidden',
        scrollbarWidth: 'none', 
        '&::-webkit-scrollbar': {
          width: '6px', 
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent', 
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888', 
          borderRadius: '999px', 
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555', 
        }
        }}
        
        >
        <Application/>
        </AppBar>
  );
}

export default App;
