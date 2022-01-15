import Link from 'next/link'
import { useRouter } from 'next/router'
const { useEffect } = require("react")

const Paginator = ({pages}) => {
    useEffect(()=> {
    },[pages])
    const router = useRouter()
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
            {  
            pages &&
                pages.map((number)=>
                    <li className="page-item" key={number.toString()}>
                        <Link href={`?page=${number}`}>
                            <a className="page-link" style={ router.query.page === number.toString() ? {color:'red'}: null }>{number}</a>
                        </Link>
                    </li>
                )
            }
            </ul> 
        </nav>
    )
}
export default Paginator