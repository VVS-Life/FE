import axios from 'axios';

const SUBSCRIPTION_MANAGE_LIST_API_GET = "http://localhost:8080/subscription/admin";

class AdminCheckService {
    
    // 관리용 Subscriptions 정보 가져오기
    getManageSubscriptions() {
        return axios.get(SUBSCRIPTION_MANAGE_LIST_API_GET, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Authorization')}`
            }
        })
        .then(response => {
            window.location.href = '/subsManage';
        })
        .catch(error => {
            window.location.href = '/';
            
            if (error.response && error.response.status === 401) {
                alert('인증 오류가 발생했습니다. 다시 로그인하거나 관련 조치를 취하세요.');
            } else if(error.response.status === 400){
                alert('관리자 전용 페이지입니다.');
            } else {
                console.error('요청에 오류가 발생했습니다:', error);
            }
            return null;
        });
    }
}

export default new AdminCheckService();
