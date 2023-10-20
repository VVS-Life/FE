// axios를 사용해서 spring boot api와 데이터통신을 담당할 모듈인 'Service'를 구현하는 파트. 
// # 1. axios를 사용하는 것을 정의
import axios from 'axios'; 

// # 2. spring boot api의 URL을 정의.
const SUBSCRIPTION_LIST_API_GET = "http://localhost:8080/subscription";

class SubsListService {

    getSubscriptions() {

        return axios({
            method: 'get',
            url: SUBSCRIPTION_LIST_API_GET,
            headers: {
                'Authorization': 'Bearer' + ' ' + localStorage.getItem('Authorization')
            }
        })

    // loginMember(data) {
    //     const jsonData = JSON.stringify(data);

    //     return axios({
    //         method: 'post',
    //         url: MEMBER_LOGIN_API_URL,
    //         data: jsonData,
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    // }
    }
}

export default new SubsListService();