import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container/container'
import fetch from 'isomorphic-fetch'
import { useEffect, useState } from 'react'
import Paginator from '../components/paginator/paginator'


const Home = ({users, pages}) => {
  const [state, setState] = useState([])
  const tpages = []
 useEffect(()=> {
   for(let i = 1;i <= pages; i++){
    tpages.push(i)
   }
   setState(tpages) 
 }, [pages])
 useEffect(()=> {
 },[state])
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="list-group mt-5">
          <span className="list-group-item list-group-item-action active">
            Lista de usuarios
          </span>
          {users ?
            users.map((i)=> (
              <Link key={i.id} href={`/user/${i.id}`}>
                <a className="list-group-item list-group-item-action">{i.first_name} {i.last_name}</a>
              </Link>
            )) : '<p>No se encontraron usuarios</p>'
          }
        </div>
        <Paginator pages={state&& state}/>
      </Container>
    </>
  )
}
Home.getInitialProps = async(ctx) => {
  const res = await fetch(`https://reqres.in/api/users${ctx.asPath}`)
  const data = await res.json()
  return {
    users: data.data,
    pages: data.total_pages
  }
}
export default Home