// axios를 사용해서 spring boot api와 데이터통신을 담당할 모듈인 'Service'를 구현하는 파트. 
// # 1. axios를 사용하는 것을 정의
import axios from 'axios'; 

// # 2. spring boot api의 URL을 정의.
const BOARD_API_BASE_URL = "http://localhost:8080/board?page=0&size=10"; // /board?page=1&size=10

class BoardService {

// # 3. 글목록 데이터를 가져오는 함수
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }
}

export default new BoardService();