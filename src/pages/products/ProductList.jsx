import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout"
import '../../styles/main.css';
import '../../styles/product/productList.css';
import '../../styles/product/BoxCard.css';
import ProductService from '../../service/ProductService';

const BoxCard = ({ title, link }) => {
    const linkWithSlash = `/productDetail/${link}`;
  return (
    // <Link to={linkWithSlash} className="boxCard">
    //     <p>{title}</p>
    //     <p>{link}</p>
    // </Link>
    <div className="boxCard" onClick={() => openModal('모달 내용을 여기에 넣으세요.')}>
        <p>{title}</p>
        <p>{link}</p>
    </div>
  );
}

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
    };

    const closeModal = () => {
    setModalOpen(false);
    setModalContent('');
    };
    // 현재 URL 정보 가져오기
    const location = useLocation();

    // URL 쿼리 파라미터 가져오기
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('search/category');

    // category 값 출력
    console.log('Category:', category);

    useEffect(() => {
        console.log(category)
        if(category==''){
            ProductService.getProductList().then((res) => {
                console.log(res.data)
                setProducts(res.data);
            });
        } else {
            ProductService.getProductListByCtg(category).then((res) => {
                setProducts(res.data);
            });
        }
    }, [category]);

    return (
        <>
            <Layout pageName='보험상품'>
                <div>
                    <div className="categoryBox">
                        <div className='ctgSubBox'>
                            <Link to = "/productList?search/category="><img src="./images/ctgTotal.jpg" className="ctgImg"/></Link>
                            <div className='ctgText'>전체상품</div>
                        </div>
                        <div className='ctgSubBox'>
                            <Link to = "/productList?search/category=종신/정기보험"><img src="./images/ctg2.jpg" className="ctgImg"/></Link>
                            <div className='ctgText'>종신/정기보험</div>
                        </div>
                        <div className='ctgSubBox'>
                            <Link to = "/productList?search/category=연금/저축보험"><img src="./images/ctg3.jpg" className="ctgImg"/></Link>
                            <div className='ctgText'>연금/저축보험</div>
                        </div>
                        <div className='ctgSubBox'>
                            <Link to = "/productList?search/category=변액보험"><img src="./images/ctg4.jpg" className="ctgImg"/></Link>
                            <div className='ctgText'>변액보험</div>
                        </div>
                        <div className='ctgSubBox'>
                            <Link to = "/productList?search/category=건강보험"><img src="./images/ctg5.png" className="ctgImg"/></Link>
                            <div className='ctgText'>건강보험</div>
                        </div>
                    </div>
                </div>
                <div className="boxCardList">
                    {products && products.map(product =>
                        <div key={product.id} className='productListBox'>
                            <BoxCard key={product.id} title={product.productName} link={product.id} openModal={openModal} />
                        </div>
                    )}
                </div>
            </Layout>
        </>
    )
}

export default ProductList
