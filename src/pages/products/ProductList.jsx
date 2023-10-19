import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout"
import '../../styles/main.css';
import '../../styles/product/productList.css';

const ProductList = () => {
    return (
        <>
            <Layout pageName='보험상품'>
                <div>
                    <div className="categoryBox">
                        <Link to = "/productList?search/category="><img src="./images/ctgTotal.jpg" className="ctgImg"/></Link>
                        <Link to = "/productList?search/category=2"><img src="./images/ctg2.jpg" className="ctgImg"/></Link>
                        <Link to = "/productList?search/category=3"><img src="./images/ctg3.jpg" className="ctgImg"/></Link>
                        <Link to = "/productList?search/category=4"><img src="./images/ctg4.jpg" className="ctgImg"/></Link>
                        <Link to = "/productList?search/category=5"><img src="./images/ctg5.png" className="ctgImg"/></Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProductList
