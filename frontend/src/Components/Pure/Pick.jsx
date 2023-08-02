import style from './Pick.module.css'
export default function Pick({username, profileImg, Pick}) {
  console.log(username, profileImg, Pick)
  return (
    <div className={style.Card_post}>
      <div className={style.Card_header}>
        <div className={style.profileImg_head}>
          <img src={profileImg} className={style.profileImg} />
          <h2>{username}</h2>
        </div>
        <button className={style.button}>Follow</button>
      </div>
      <div className={style.Card_body}>
        <img src={Pick.path} alt={Pick.id} className={style.Card_bodyImg} />
      </div>
    </div>
  )
}
