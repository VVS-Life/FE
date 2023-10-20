import axios from 'axios'; 

const SUBSCRIPTION_LIST_API_GET = "http://localhost:8080/subscription";
const SUBSCRIPTION_MANAGE_LIST_API_GET = "http://localhost:8080/subscription/admin";

class SubsListService {

    getSubscriptions() {

        return axios({
            method: 'get',
            url: SUBSCRIPTION_LIST_API_GET,
            headers: {
                'Authorization': 'Bearer' + ' ' + localStorage.getItem('Authorization')
            }
        })
    }

    getManageSubscriptions() {

        return axios({
            method: 'get',
            url: SUBSCRIPTION_MANAGE_LIST_API_GET,
            headers: {
                'Authorization': 'Bearer' + ' ' + localStorage.getItem('Authorization')
            }
        })
    }
}

export default new SubsListService();