// PÁGINA GERADA COM SSR - Server Side Rendering - Obtendo os dados de forma dinâmica
import axios from  'axios'

function Users({users}) {

  return (
  <div>
    {users.map((user) => (
      <div>{user.name}</div>
    ))}
  </div>
  )
}

// Utilizamos a função getServerSideProps() para retornar o HTML
export async function getServerSideProps(context) {

  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = await response.data
  
  return {
    props: { users: data }, 
  }
}

export default Users