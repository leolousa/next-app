// PÁGINA GERADA COM SSG - Static Site Generation - Página estática (CDN)
import axios from 'axios'

function Usuario({ user = {} }) {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
  )
}


export async function getStaticProps(context) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users', {params: {id: context.params.id}})
  const user = await response.data[0]

  return {
    props: { user },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false
  };
}


export default Usuario