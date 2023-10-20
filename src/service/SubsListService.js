import axios from 'axios'; 

const SUBSCRIPTION_LIST_API_GET = "http://localhost:8080/subscription";
const SUBSCRIPTION_MANAGE_LIST_API_GET = "http://localhost:8080/subscription/admin";
const SUBSCRIPTION_UPDATE_SUCCESS_API_PATCH = "http://localhost:8080/subscription/admin/success"
const SUBSCRIPTION_UPDATE_REJECT_API_PATCH = "http://localhost:8080/subscription/admin/success"

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