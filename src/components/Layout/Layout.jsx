import Footer from "./Footer"
import Header from "./Header"
import './Layout'
import '../../styles/index.css';

const Layout = (props) => 
{
    return (
        <div className="layout">
            <Header pageName={props.pageName}/>

            <main className="main">
                {props.children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout