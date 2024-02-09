import {useNavigate} from 'react-router-dom'

function Navbar(){
    const navigate = useNavigate()
    return(
        <nav>
            <lu style={{ padding: "10px" }}>
                <button onClick={()=>navigate("/")}>Home</button>
            </lu>
            <lu>
                <button onClick={()=>navigate("/detector")}>AI-Detection</button>
                </lu>
        </nav>
    )
}

export default Navbar