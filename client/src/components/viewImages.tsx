import axios from 'axios';
import React, { useState } from 'react';

const ViewImages = ():JSX.Element => {
    const [image, setImage] = useState('');
   const handleClick = () => { axios.get('http://localhost:4000/getFiles',{responseType: 'blob',headers:{token:"eyJhbGciOiJIUzI1NiJ9.NjQxZDczMDdmMTdkOTE4NWU2MmY5YzU3.7QdDX4wpXqsE4yacU4wobswHG1XXnRi4FoIy0X2CjKA"}})
    .then(
        (res) => {console.log('res',res);
        const srcForImage = URL.createObjectURL(res.data);
        // console.log(srcForImage);
        setImage(srcForImage);
    }
    );}
    return(<>
        <button onClick={handleClick} >See files</button>
        <img src={image} />
    </>)
}

export default ViewImages;