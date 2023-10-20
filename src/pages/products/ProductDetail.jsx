import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from "../../components/Layout/Layout"
import ProductService from '../../service/ProductService';
import '../../styles/product/productDetail.css'

function ProductDetail(props) {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    // const complete = async (id, product) => {

    //     try {
    //         await ProductService.subscription(id, product);
    //             alert("가입신청이 성공적으로 완료되었습니다.");
    //             navigate('/complete');
    //     } catch (error) {
    //         console.error(error);
    //         alert("가입신청에 실패했습니다.");
    //     }
    // };

    useEffect(() => {
        ProductService.getProductDetail(id).then((res) => {
            console.log(res.data); 
            setProduct(res.data);
        });
    }, [id]);

    return (
        <Layout pageName="보험상품" >
            <div className='contentBox'>
                <div className='productTitle'>
                    {product.productName}
                </div>
                <img src={product.content} alt="내용" className='contentImg'/>
                {/* <button className="subsButton" onClick={complete({id, product})}>가입 신청</button> */}
            </div>
        </Layout>
    );
}

export default ProductDetail;