import axios from 'axios'; 

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ProductService {

    apiJwtToken(jwtToken) {
        return "Bearer" + " " + jwtToken
    }
// # 1. 상품목록 데이터를 가져오는 함수
    getProductList() {
        return axios.get(PRODUCT_API_BASE_URL);
    }

// # 2. 해당 카테고리의 상품 데이터를 가져오는 함수
    getProductListByCtg(category) {
        return axios.get(PRODUCT_API_BASE_URL+"/search?category="+category);
    }

// # 3. 해당 카테고리의 상품 데이터를 가져오는 함수
    getProductDetail(id) {
        return axios.get(PRODUCT_API_BASE_URL+"/"+id);
    }

    subscription(id, product, jwtToken) {
        return axios({
            method: 'post',
            url: "http://localhost:8080/product/"+id+"/subscription",
            data: {product},
            headers: {
                'Authorization': this.apiJwtToken(jwtToken),
            },
        });
    }
}

export default new ProductService();