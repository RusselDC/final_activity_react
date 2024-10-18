import { Box } from "@mui/material"
import MovieResultComponent from "./MovieResultComponent"
import DeveloperComponent from "./DeveloperComponent"
import * as React from "react"
import Swal from "sweetalert2"
import axios from "axios"


export default function Application()
{

    const [searchData, setSearchData] = React.useState({
        "title":"",
        "year":"",
        "plot":""
    })

    const [movieData, setMovieData] = React.useState({
        poster:"https://m.media-amazon.com/images/M/MV5BZTVkZWY5MmItYjY3OS00OWY3LTg2NWEtOWE1NmQ4NGMwZGNlXkEyXkFqcGc@._V1_SX300.jpg",
        title:"Transformers",
        plot:"The Transformers’ war began on Cybertron between the Autobots, led by Optimus Prime, and the Decepticons, led by Megatron. The AllSpark, a powerful artifact, became the focus of the conflict. The war forced both factions to flee to Earth, where they remained hidden for years. Sam Witwicky discovers Bumblebee, an Autobot, and together they fight the Decepticons, who seek the AllSpark to conquer the universe. The Autobots defeat Megatron and vow to protect Earth, while new threats like Unicron and Sentinel Prime emerge, testing their courage and resolve.",
        year:"2024"
    })

    React.useEffect(() =>{
        console.log(searchData)
    },[searchData])


    const validateSearch = () =>
    {
       


        if(searchData.title === "")
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Movie title is required",

            });

            return false
        }
        if(searchData.year === "")
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Movie year is required",
            });

            return false
        }

        if(searchData.year.length !== 4 || /^\d+$/.test(searchData.year.length) !== true)
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Movie date must be valid year",
            });

            return false
        }

        if(searchData.plot === "")
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Movie plot is required!",
            });

            return false
        }

        return true
    }

    const handleSubmit = () => 
    {
        if(!validateSearch())
        {
            return false
        }

        axios({
            method:"GET",
            url:`http://www.omdbapi.com/?apikey=387b2d33&t=${searchData.title}&y=${searchData.year}${searchData.plot === "Full" ? "&plot=full" : ""}`

        }).then((data) => {
            console.log(data)
            if(data.data.Poster === undefined)
            {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Movie not found",
                });
                return false;
            }else{
                const {Plot,Title,Poster,Released} = data.data
                setMovieData({
                    poster:Poster,
                    title:Title,
                    plot:Plot,
                    year:Released

                })
            }
        })
    }


    



    return<Box
    
    sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: '100vh',
        width:'100vw',
        margin:0,
        padding:0,
       
    }}
    >

    <MovieResultComponent setSearchData={setSearchData} handleSubmit={handleSubmit} movieData={movieData}/>
    <DeveloperComponent/>

    </Box>
}