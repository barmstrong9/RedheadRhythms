import * as React from 'react';
import { useState } from 'react';
import { API } from 'aws-amplify';
import { v4 as uuid } from 'uuid';
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
    e.preventDefault();
    const extension = filename.split('.').pop();
    const key = `${uuid()}.${extension}`;
    const url = await API.post('redheadrhythms', `public/songs/${key}`, {
      body: { user: user.username },
    });
    const response = await fetch(url, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });
    if (response.ok) {
      setUploaded(true);
    }
    const result = await Storage.put(filename, file)
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
