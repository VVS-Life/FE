import axios from 'axios'; 

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ProductService {

// # 1. 상품목록 데이터를 가져오는 함수
    getProductList() {
        return axios.get(BOARD_API_BASE_URL);
    }

// # 2. 해당 카테고리의 상품 데이터를 가져오는 함수
    getProductDetail(ctg) {
        return axios.get(BOARD_API_BASE_URL+"/search?category="+ctg);
    }

// # 3. 해당 카테고리의 상품 데이터를 가져오는 함수
    getProductDetail(id) {
        return axios.get(BOARD_API_BASE_URL+id);
    }    
}

export default new BoardService();