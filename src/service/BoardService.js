// axios를 사용해서 spring boot api와 데이터통신을 담당할 모듈인 'Service'를 구현하는 파트. 
// # 1. axios를 사용하는 것을 정의
import axios from 'axios'; 

// # 2. spring boot api의 URL을 정의.
const BOARD_API_BASE_URL = "http://localhost:8080/board";

class BoardService {
    // static jwtToken = "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MTIzNCIsImF1dGgiOiJNRU1CRVIiLCJleHAiOjE2OTc3MDU2NDEsImlhdCI6MTY5NzcwMjA0MX0.5ZYvM2ZYprmaqjj72X11XdBWUXeQC_amJFPwi0bGnag";
    apiJwtToken(jwtToken) {
        return "Bearer" + " " + jwtToken
    }


    createBoard(dto, images, jwtToken) {
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
            url: BOARD_API_BASE_URL,
            data: formData,
            headers: {
                'Authorization': this.apiJwtToken(jwtToken),
                'Content-Type': 'multipart/form-data',
            },
        });
        //return axios.post(BOARD_API_BASE_URL, board);
    }

    deleteBoard(no, jwtToken) {
        return axios({
            method: 'delete',
            url: BOARD_API_BASE_URL + "/" + no,
            headers: {
                'Authorization': this.apiJwtToken(jwtToken),
            },
        });
    }

    //페이징 처리
    getBoards(page) {
        return axios.get(BOARD_API_BASE_URL + "?page="+ page);
    }

    getOneBoard(no) {
        return axios.get(BOARD_API_BASE_URL + "/" + no);
    }

}
export default new BoardService();