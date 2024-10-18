export default function MovieImageComponent() {
    return (
        <div style={{ 
            height: "100%", 
            width: "100%", 
            padding: 0, 
            margin: 0, 
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)", // Add shadow here
            borderRadius: "10px", // Optional: for rounded corners on the div
            overflow: "hidden"
        }}>
            <img
                src="https://m.media-amazon.com/images/I/A1QQe00cn0L._AC_UF894,1000_QL80_.jpg"
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
