import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { sendPost } from "../axios/querys";
import { Link, useNavigate } from "react-router-dom";

export default function Upload() {
  const [files, setFiles] = useState([]);
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    // eslint-disable-next-line react/jsx-key
    <div className="ImagenUpload">
      <img
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </div>
  ));

  const handleSubmith = async () => {
    const data = new FormData()
    data.append("file", files[0])
    const resp = await sendPost(data, token)
    console.log(resp)
    if (resp.status === 200) {
      navigate("/")
    }else{
      alert("Error in Actulize")
    }
  }

  const renderStatus = () => {
    if (files.length == 0) {
      return (
        <div {...getRootProps()} className="dropbox_input">
          <input {...getInputProps()} />
          <p>Drag a new photo for post!</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="dropbox">
        <h1>Create a new post!</h1>
        {renderStatus()}
        {thumbs}
        <button type="submit" className="button_forms" onClick={handleSubmith}>
          Save
        </button>
        <div className="backButton">
          <Link to={"/"} className="button_back">Atras</Link>
        </div>
      </div>
    </>
  );
}
