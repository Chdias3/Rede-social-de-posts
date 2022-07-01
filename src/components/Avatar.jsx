import styles from './Avatar.module.css'


// desistruturação - eu tiro props e coloco {} dentro dela coloco hasBorder e src- estou dizendo que quero buscar apenas as propriedades hasBorder e src e posso definir valores default, ou seja, se essa propriedade não tiver nenhum valor o valor default dela é true  
// Em img tiro props e deixo so src
export function Avatar({hasBorder= true, src}) {
  // se hasBorder diferente de false entao avatarWithBorder - e o avatar de sidebar e Post é diferente de false, já os comentarios não
  // const hasBorder = props.hasBorder != false - posso fazer assim ou usar a desistruturação 

  return (
    // se hasBorder entao mostra avatarWithBorder se nao avatar
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  )
}
