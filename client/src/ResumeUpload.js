import React, { useState } from 'react';

function ResumeUpload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if(!file) return setMessage('No file selected.');

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const res = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });

            const text = await res.text();
            setMessage(text);
        } catch (err) {
            setMessage('Upload failed.');
        }
    };

    return (
        <div>
            <h2>Upload Resume</h2>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default ResumeUpload;
