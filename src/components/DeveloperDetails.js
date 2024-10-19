import { Box, Typography} from "@mui/material"


export default function DeveloperDetails()
{

    return <Box
    
    sx={{
        height:"100%",
        width:"100%",
        padding:"5% 10%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}
    
    
    
    >

        <Box 
        
        sx={{
            height:"60%",
            width:"80%",
            textAlign:"left",
            color:"#556678"      
        }}
        
        >
            <Typography variant="h4">IT intern from hagonoy bulacan, can work on anything as long as you can give me a time to learn it</Typography>
            <br/>
            <br/>
            <Typography variant="caption1" sx={{fontFamily:"DM Sans"}}>
                Russel Dela Cruz from hagonoy bulacan, 22 years old and just graduated from bulsu last july.
            </Typography>
            <br/>
            <br/>
            <Typography variant="caption1" sx={{fontFamily:"DM Sans"}}>
                My weakness is creativeness and my strength is dealing with not so creative works like backend development (just kidding with the not so creative part haha)
            </Typography>
            <br/>
            <br/>
            <Typography variant="caption1" sx={{fontFamily:"DM Sans"}}>
                I dont have any interesting hobby, i just play ml or watch videos on my phone. 
            </Typography>
            <br/>
            <br/>
            <Typography variant="caption1" sx={{fontFamily:"DM Sans"}}>
                This is my favorite song
            </Typography>
            <br/>
            <br/>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#556678",
                padding: "16px",
                borderRadius: "12px",
              }}
            >
              <iframe
                title="Mysong"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/3DK6m7It6Pw857FcQftMds?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </Box>

           
        


        
        </Box >
        










    </Box>





}