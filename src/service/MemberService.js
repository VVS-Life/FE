// axios를 사용해서 spring boot api와 데이터통신을 담당할 모듈인 'Service'를 구현하는 파트. 
// # 1. axios를 사용하는 것을 정의
import axios from 'axios'; 

// # 2. spring boot api의 URL을 정의.
const MEMBER_JOIN_API_CREATE_URL = "http://localhost:8080/join/member"; // 일단 작성자1로 작성.
const MEMBER_LOGIN_API_URL = "http://localhost:8080/login/member";

class MemberService {

    createMember(data) {
        const jsonData = JSON.stringify(data);
        // const jsonBlob = new Blob([jsonData], { type: "application/json" })

        return axios({
            method: 'post',
            url: MEMBER_JOIN_API_CREATE_URL,
            data: jsonData,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    loginMember(data) {
        const jsonData = JSON.stringify(data);

        return axios({
            method: 'post',
            url: MEMBER_LOGIN_API_URL,
            data: jsonData,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export default new MemberService();
