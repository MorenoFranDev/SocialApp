import { Field, Form, Formik } from 'formik'
import style from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { registerUser } from '../../axios/querys'

const registerValidSchema = Yup.object().shape({
  username: Yup.string().min(5,"too short!").max(20,"too long!").required("Is required"),
  password: Yup.string().min(5,"too short!").max(20,"too long!").required("Is required"),
  repeatPassword: Yup.string().oneOf([Yup.ref("password"),],"password don't march")
})

export default function RegisterPure() {
  const navigate = useNavigate()
  const registerApp = async (values)=>{
    const resp = await registerUser(values)
    if (resp.status === 200){
      localStorage.setItem('token', resp.data.authorization)
      localStorage.setItem('profileImg', resp.data.profileImg)
      localStorage.setItem('username', resp.data.username)
      navigate("/")
  }else return alert("error in credentials")
  }

  return (
    <div className={style.form}>
    <h1>Register in App</h1>
        <Formik initialValues={{ username: "", password: "", repeatPassword: "" }} validationSchema={registerValidSchema} onSubmit={values => registerApp({
          "username": values.username, "password":values.password})}>
            {({errors})=>(
          <Form>
            <div className={style.inputBox}>
              <label>Username</label>
            <Field name="username" className={style.inputs}/>
            {errors.username}
            </div>
            <div className={style.inputBox}>
              <label>Password</label>
            <Field name="password" className={style.inputs}/>
            {errors.password}
            </div>
            <div className={style.inputBox}>
              <label>Repeat Password</label>
            <Field name="repeatPassword" className={style.inputs}/>
            {errors.repeatPassword}
            </div>
            <div className={style.forgot}>
            <Link to="/login"> Or login </Link>
            </div>
          <button type='submit' className={style.button}>Send</button>
          </Form>)}
        </Formik>
        </div>
  )
}
