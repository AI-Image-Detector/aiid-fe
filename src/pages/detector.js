import Navbar from "../components/navbar"
import ImageUpload from "../components/uploadImage"
function Detector(){
    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign:"center" }}>DETECTOR PAGE</h1>
            <ImageUpload />
        </div>
    )
}

export default Detector