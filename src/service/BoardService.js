// axios를 사용해서 spring boot api와 데이터통신을 담당할 모듈인 'Service'를 구현하는 파트. 
// # 1. axios를 사용하는 것을 정의
import axios from 'axios'; 

// # 2. spring boot api의 URL을 정의.
const BOARD_API_BASE_URL = "http://localhost:8080/board?page=0&size=10"; // /board?page=1&size=10
const BOARD_API_CREATE_URL = "http://localhost:8080/board"; // 일단 작성자1로 작성.

class BoardService {

// # 3. 글목록 데이터를 가져오는 함수
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    createBoard(dto, images) {
        const formData = new FormData();
        // const jsonData = JSON.stringify(board);
        // const jsonBlob = new Blob([jsonData], { type: "application/json" })
        // formData.append('boardRequestDTO', jsonBlob);
        formData.append('boardRequestDTO', new Blob([JSON.stringify(dto)], { type: "application/json" }));
        
        if (images) { // 이미지를 선택했을 때만 처리
            for (let i = 0; i < images.length; i++) {
                formData.append('img', images[i]);
            }
        }

        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        
        return axios({
            method: 'post',
            url: "http://localhost:8080/board/1",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        //return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(no) {
        return axios.get("http://localhost:8080/board/" + no);
    }

}

export default new BoardService();