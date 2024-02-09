import React, { useState } from 'react'
import axios from 'axios'

function ImageUpload(){
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('')
  const [imageUrl, setImageUrl] = useState('');
  const [predictions, setPredictions] = useState([]);

  const getImage = (e) => {
    const file = e.target.files[0];
    setImage(file); 
    console.log(image)
    const URL_IMAGE = URL.createObjectURL(file)
    setImagePreview(URL_IMAGE);
  };

  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData();  //create new form object
    formData.append("myImage", image); // myImage is variable that API want
    
    axios({
      method: "post",
      url: "http://localhost:5000/upload-image", // send to API
      data: formData, 
    })
     .then((response) => {  
      const { data } = response; //return image url of uploaded img
      setImageUrl(data.url); //set url to image variable
    })
     .catch((err) => {
      console.log(err);
    });


  };

  return (
    <div>
      <h2>Clarifai Image Recognition</h2>
      <form onSubmit={handleUpload}>
        <div>
          <h3>Preview Gambar:</h3>
          <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
        <input type="file" onChange={getImage} ></input>
        <button type="submit">upload</button>
      </form>
      {predictions.length > 0 && (
        <div>
          <h3>Predictions:</h3>
          <ul>
            {predictions.map(prediction => (
              <li key={prediction.id}>{prediction.name} - {prediction.value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ImageUpload