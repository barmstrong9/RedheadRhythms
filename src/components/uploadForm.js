import * as React from 'react';
import { useState } from 'react';
// import { API } from 'aws-amplify';
// import { v4 as uuid } from 'uuid';
import { Storage } from 'aws-amplify';

export default function UploadForm({ user }) {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setFilename(file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await Storage.put(filename, file)
      setUploaded(true)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      {uploaded ? (
        <div className="alert alert-success mt-3" role="alert">
          File uploaded successfully!
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="song-upload-input">Choose a song to upload:</label>
          <input
            type="file"
            className="form-control-file"
            id="song-upload-input"
            onChange={handleChange}
          />
          {file ? (
            <div className="mt-3">
              <p>Selected file: {filename}</p>
            </div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Upload
        </button>
      </form>
    </>
  );
}
