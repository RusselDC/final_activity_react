

export default function MovieImageComponent({moviePicture}) {

   

    return (
        <div style={{ 
            height: "100%", 
            width: "100%", 
            padding: 0, 
            margin: 0, 
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)", 
            borderRadius: "10px", 
            overflow: "hidden",
           
        }}>
            <img
                src={moviePicture}
                alt="Background"
                style={{
                    height: "100%",
                    width: "100%",
                    overflow:"hidden",
                    objectPosition: "relative",
                    borderRadius:"10px"
                }}
            />
        </div>
    );
}
