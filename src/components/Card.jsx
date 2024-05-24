const Card = ({props}) => {

  const {nombre, animal} = props
  return (
    <>
    <h4>!Hola {nombre}¡</h4>
    <h4>Tu animal favorito es: {animal}</h4>
    </>
  )
}

export default Card