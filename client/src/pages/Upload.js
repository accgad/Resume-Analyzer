import { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file first.');
      return;
    }
    alert('Upload logic will go here.');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload Resume</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleChange} />
        <br /><br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
