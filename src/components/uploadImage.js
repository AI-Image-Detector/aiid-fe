import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ImageUpload(){
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [predictedClass, setPredictedClass] = useState("")
  const [probability, setProbability] = useState(0)
  const [predictionTime, setPredictionTime] = useState(0)

  const getImage = (e) => {
    const file = e.target.files[0];
    setImage(file)
    console.log(image)
    const URL_IMAGE = URL.createObjectURL(file)
    setImagePreview(URL_IMAGE)
  };

  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()  //create new form object
    formData.append("image", image) // myImage is variable that API want
    console.log(image)
    fetch("http://152.42.168.99/predict", {
              method: "POST",
              body: formData,
          })
              .then((response) => {
                  return response.json()
              })
              .then((data) => {
                  setPredictedClass(data.predicted_class)
                  setProbability(data.probability)
                  setPredictionTime(data.prediction_time)
                  
              });

  };

  return (
    <div>
      <h2>Clarifai Image Recognition</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={getImage} ></input>
        <button type="submit">upload</button>
      </form>
      <div>
          <h3>Preview Gambar:</h3>
          {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        )}
      </div>
      <ul>
        <li>
          Prediction: {predictedClass}
        </li>
        <li>
          Probability: {probability}
        </li>
        <li>
          Prediction time: {predictionTime}
        </li>
      </ul>
    </div>
  )
}

export default ImageUpload