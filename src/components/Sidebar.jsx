import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

// import igniteLogo from '../assets/logo.svg';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
       <Avatar src="https://github.com/Chdias3.png"/>

        <strong>Charles Alexsander</strong>
        <span>Web developer</span>
      </div>

      <footer>

        <a href="#">
        <PencilLine size={20}/>
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}
