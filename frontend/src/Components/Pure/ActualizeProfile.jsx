import { Form, Formik, Field } from "formik";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "../../axios/querys";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ActualizeProfile() {
  const User = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
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

  const thumbs = files.map((file,index) => (
    <div className="ImagenUpload" key={index}>
      <img
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
      />
    </div>
  ));

  const sendLogin = async (element) => {
    const data = new FormData();
    data.append("file", files[0]);
    data.append("username", element.username);
    data.append("state", element.state);
    const result = await updateProfile(data, token);
    console.log(result);
    if (result.status === 200) {
      localStorage.setItem("profileImg", result.data.profile);
      navigate("/");
    } else {
      alert("Error en  envio de datos");
    }
  };

  const renderStatus = () => {
    if (files.length == 0) {
      return (
        <div {...getRootProps()} className="dropbox_input">
          <input {...getInputProps()} />
          <p>Drag a new photo for profile pic !</p>
        </div>
      );
    }
  };

  return (
    <div className={style.form}>
      <h1>Actulize Profile</h1>
      <Formik
        initialValues={{ username: User, state: true }}
        onSubmit={(data) => sendLogin(data)}
      >
        {({ errors }) => (
          <Form>
            <div className={style.inputBox}>
              <label>Username</label>
              <Field name="username" className={style.inputs} />
              {errors.username}
            </div>
            <div className={style.inputBox}>
              <label>state</label>
              <Field name="state" className={style.inputs} />
              {errors.state}
            </div>
            <div className={style.inputBox}>
              <label>Drag & drop pick for profile</label>
              {renderStatus()}
              {thumbs}
            </div>
            <button type="submit" className={style.button}>
              Actulizar
            </button>
          </Form>
        )}
      </Formik>
      <div className="backButton">
        <Link to={"/general"} className="button_back">
          Atras
        </Link>
      </div>
    </div>
  );
}
