import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const user = localStorage.getItem("username")
    const profileImg = localStorage.getItem("profileImg")
    const authorization = localStorage.getItem("token")
    const handleClick = () => {
        localStorage.clear()
        navigate("/login")
    }

    return (
        <nav className={style.navbar}>
            <div className={style.userInfo}>
                <img src={profileImg} alt={user} className={style.userInfo_img} />
                <Link to={"/actulize/" + authorization}>{user}</Link>
            </div>
            <div className={style.navbar_items}>
                <Link to={"/"} className={style.navbar_items_li}>General</Link>
                <Link to={"/follows"} className={style.navbar_items_li}>Follows</Link>
                <Link to={"/user/" + user} className={style.navbar_items_li}>Me</Link>
            </div>
            <div>
                <button onClick={() => handleClick()} className={style.button}>Log out</button>
            </div>
        </nav>
    )
}
