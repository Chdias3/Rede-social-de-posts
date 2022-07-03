import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

// O post pecisa desses passos
//author - img, nome, cargo, data de publicação e conteudo do post
//author {avatar_url:"", name:"", role:""}
//publishedAt: Date
// content: Strng

export function Post({ author, publishedAt, content }) {
  //  o setComments é a segunda possição do arrei de useState e permite auterar o valor da primeira possição
  // entao o react é avisado quando acontece as auterações  
  const [comments, setComments] = useState([
    1,
    2,
  ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  // Armazena a data de publicação do post relativa ao agora 
  //Recebe uma data publishedAt  e compara com a data de agora
  const publishedDateRelatveToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // }).format(publishedAt)


  // Estado ou useState- são variaveis que eu quero que o componente monitore ou seja quando quero que o react mostre algum valor
  function handleCreateNewComment() {
    event.preventDefault()

    // Imutabilidade
    // eu não passo somente o que eu quero inserir, mas passo o novo valor tambem 
    // setComments([1, 2, 3]);

    // Aqui ele le o comments do array e copia 1 e 2/ pega quantos comments tenho ate o momento e some mais 1
    setComments([...comments, comments.length + 1]);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelatveToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </article>
  )
}
