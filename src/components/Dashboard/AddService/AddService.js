import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const history = useHistory();

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                history.replace('/dashboard');
                alert("Service Added succesfully..!! Go to home to see service")
            });
        e.preventDefault();
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h3 className="mt-5">Add Service</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Service Title</label>
                        <input onBlur={handleBlur} name="title" className="form-control" type="text" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea onBlur={handleBlur} name="description" rows="5" className="form-control" type="text" placeholder="Enter Description" />
                    </div>
                    <div className="form-group">
                        <label>Upload Image</label><br />
                        <input onChange={handleFileChange} type="file" />
                    </div>
                    <input type="submit" value="Send" className="custom-btn" />
                </form>
            </div>
        </section>
    );
};

export default AddService;