import { Link } from 'react-router-dom'

export default function CreatePost() {
    return (
        <Link to={"/upload"}>
            <p>create post</p>
        </Link>
    )
}