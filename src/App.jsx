import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

// O post pecisa desses passos
//author - img, nome, cargo, data de publicação e conteudo do post
//author {avatar_url:"", name:"", role:""}
//publishedAt: Date
// content: Strng

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/Chdias3.png',
      name: 'Charles Alexsander',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-02 15:06:00')
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-07-01 15:06:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          {/* O map diferente do forEch retorna algo por isso usamos ele  */}
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}

// export default App
