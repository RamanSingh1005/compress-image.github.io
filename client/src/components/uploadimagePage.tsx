import axios from "axios";
import React, { useState } from "react";

function ImageUploadPage() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  console.log('lolo', {image});
  const handleImageChange = (event: any) => {
    setImage(event.target.files[0]);
  };
  // const formData = new FormData();
  // formData.append("filename", image as unknown as File);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    
    axios.post('http://localhost:4000/file', {
        fileName: name,
        description: description,
        image: image,
        filePath: 'dummy/filepath',
        owner: 'mani@gmail.com',
      },{
        headers:{
          token: localStorage.getItem("jwtToken"),
        "content-type": "multipart/form-data",
      }
      })
      .then(function (response) {
        console.log('response',response);
      })
      .catch(function (error) {
        console.log('error',error);
      });
    // TODO: perform image upload logic
    console.log("Image uploaded:", image);
    console.log("Name:", name);
    console.log("Description:", description);

    // reset form fields
    // setImage(null);
    // setName("");
    // setDescription("");
  };

  return (
    <div>
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <button type="submit">Upload</button>
      </div>
    </form>
    </div>
  );
}

export default ImageUploadPage;
