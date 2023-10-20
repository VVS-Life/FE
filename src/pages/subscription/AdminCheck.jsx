import React, { useEffect, useState } from 'react';
import AdminCheckService from "../../service/AdminCheckService";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/subscription/SubsList.css';

export default function SubsManage() {
    
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        setLoading(false); // 요청 완료 후 로딩 상태 업데이트
        alertRequest();
    });

    const alertRequest = () => {
        if (!loading) {
             AdminCheckService.getManageSubscriptions();
        } 
    }

}