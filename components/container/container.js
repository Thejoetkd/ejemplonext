import Navigation from '../navigation/Navigation'

const Container = ({children}) => {
    return (
        <>
            <Navigation />
            <div className="container">
                {children}
            </div>
        </>
    )
}
export default Container