import { Form, Formik, Field } from "formik";
import style from './Login.module.css'
import { Link, useNavigate, } from "react-router-dom";
import { getUser } from "../../axios/querys";

export default function LoginPure() {
    const navigate = useNavigate()
    const setLogin = async (data) => {
        const resp = await getUser(data)
        if (resp.status === 200){
            localStorage.setItem('token', resp.data.authorization)
            localStorage.setItem('profileImg', resp.data.profileImg)
            localStorage.setItem('username', resp.data.username)
            navigate("/")
        }else return alert("error in credentials")
    }

    return (
        <div className={style.form}>
            <h1>Login Panel</h1>
            <Formik initialValues={{ username: "", password: "" }} onSubmit={values => setLogin(values)}>
                {({ errors }) => (
                    <Form>
                        <div className={style.inputBox}>
                            <Field name="username" placeholder="username" className={style.inputs} />
                            {errors.username}
                        </div>
                        <div className={style.inputBox}>
                            <Field name="password" placeholder="password" className={style.inputs} />
                            {errors.password}
                        </div>
                        <Link to="/register" className={style.forgot} >or Register</Link>
                        <button type="submit" className={style.button}>Send</button>
                    </Form>)}
            </Formik>
        </div>
    )
}
