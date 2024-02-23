import { useState } from "react";

interface Prediction {
    predicted_class: string;
    prediction_time: number;
    probability: number;
}

function Main() {
    const [image, setImage] = useState({} as File);
    const [prediction, setPrediction] = useState<Prediction>({
        predicted_class: "",
        prediction_time: 0,
        probability: 0,
    });

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);

        fetch("http://152.42.168.99/predict", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPrediction(data);
            });
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="input_image" className="form-label">
                            Upload Your Image
                        </label>

                        <input
                            className="form-control form-control-sm"
                            id="input_image"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            aria-describedby="fileHelp"
                            onChange={(e) => setImage(e.target.files![0])}
                            required
                        />
                        <div id="fileHelp" className="form-text">
                            Accepted image extension: .JPG, .JPEG, .PNG.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div>
                    <p>Predicted Class: {prediction.predicted_class}</p>
                    <p>
                        Probability: {(prediction.probability * 100).toFixed(2)}
                        %
                    </p>
                    <p>
                        Prediction Time: {prediction.prediction_time.toFixed(4)}
                        s
                    </p>
                </div>
            </div>
        </>
    );
}

export default Main;
