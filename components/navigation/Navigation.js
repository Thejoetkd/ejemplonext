import Head from 'next/head'
import Link from 'next/link'

const Navigation = (props) => {
    return(
        <>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"/>
            </Head>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Nextjs</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navigation