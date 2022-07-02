import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

// O post pecisa desses passos 
//author - img, nome, cargo, data de publicação e conteudo do post 
//author {avatar_url:"", name:"", role:""}
//publishedAt: Date
// content: Strng

export function Post(props) {
  return (                        
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src="https://github.com/maykbrito.png" />
          <div className={styles.authorInfo}>
            <strong>Charles Alexsander</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="30 de junho às 21:51h" dateTime="2022-06-30 21:51:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
