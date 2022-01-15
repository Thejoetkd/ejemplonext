import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import Container from '../../components/container/container'

const User = ({user}) => {
    const router = useRouter()
    useEffect(()=> {
        if(!user){
            router.push('/')
        } 
    },[user])
    return(
        <Container>
            <div className="container">
                <div className="row">
                    <Link href="/">
                        <a className="nav-link">Atras</a>
                    </Link>
                </div>
                {
                    user &&
                    <div className="card mb-3 mt-5" style={{maxWidth:'600px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={user.avatar} className="card-img" style={{borderRadius: '50%',margin: '1rem', background: 'gray', width: '180px', height: '180px', borderColor: 'transparent'}} alt="Avatar"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Datos del usuario</h5>
                                    <p className="card-text">Nombre: {user.firts_name} {user.last_name} </p>
                                    <p className="card-text">Correo: {user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Container>
    )
}
User.getInitialProps = async(ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const data = await res.json()
    if(!data){
        return {}
    }
    
    return {
        user : data.data
    }
}
export default User