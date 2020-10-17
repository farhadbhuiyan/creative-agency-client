import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
  const [review, setReview] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(review);
        formData.append('file', file);
        formData.append('name', review.name);
        formData.append('email', review.email);

        fetch('https://salty-plateau-71286.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
  return (
    <div>
      <div className="row" >
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8 col-sm-12 col-12" style={{ position: "absolute", right: 0, padding: '50px' }}>
          <form>
            <div class="form-group">
              <input onBlur ={handleBlur} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name" />
            </div>
            <div class="form-group">
              <input onBlur ={handleBlur} type="password" class="form-control" id="exampleInputPassword1" placeholder="Company’s name, Designation" />
            </div>
            <div class="form-group">
              <textarea onBlur ={handleBlur} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;