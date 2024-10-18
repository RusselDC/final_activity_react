import { Box } from "@mui/material"


export default function DeveloperImage()
{
    return <Box sx={{height:"70%", width:"60%", backgroundColor:"#556678", padding:"2.5%", transform: "rotate(5deg)",  // Tilt to the right
        transition: "transform 0.5s ease-in-out",  // Smooth transition
        '&:hover': {
          transform: "rotate(5deg)",  // Apply tilt on hover
        },
        '&:not(:hover)': {
          transform: "rotate(-5deg)",  // Return to original state when not hovered
        }}}>
        <img
        src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/435673471_1132793851478245_193433086194885072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGphK96H6Z3x0KGKX-GXmFZZMYp86SAC-hkxinzpIAL6Je2lJwzFPjS6Loc28bflV-mS-hS5O61EiobW1QmuuB7&_nc_ohc=GuXvTYLxP2AQ7kNvgEyHIco&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=Aoy4FDwSWLizBSyECHm4XcI&oh=00_AYCAFtDqbjIG6RinpKFQRoHDPAF1RkC3MtGW5yke402F-w&oe=671825F5"
        style={{
            height: "100%",
            width: "100%",
            overflow:"hidden",
            objectPosition: "relative",
            borderRadius:"10px",
            
        }}
        />

    </Box>
}