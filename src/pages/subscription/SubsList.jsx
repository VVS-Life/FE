import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import SubsListService from "../../service/SubsListService";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/subscription/SubsList.css';

export default function Complete() {
    const navigate = useNavigate();
    const [subsList, setSubsList] = useState([]);

    useEffect(() => {
        SubsListService.getSubscriptions()
        .then((res) => {
            setSubsList(res.data);
        });
    }, []);

    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
    
        // 포맷: 'YYYY-MM-DD HH:MM'
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

  return (
    <Layout pageName="보험 신청 완료" id="tableWrap">
        <div id="tableWrap2">
            <table className="table table-bordered">
                <colgroup>
                <col width="10%" />
                <col width="30%" />
                <col width="10%" />
                <col width="15%" />
                <col width="15%" />
                <col width="10%" />
                <col width="10%" />
                </colgroup>
                <thead>
                    <tr className='trtd'>
                        <th>가입번호</th>
                        <th>상품명</th>
                        <th>가입자</th>
                        <th>가입 신청일</th>
                        <th>심사 완료일</th>
                        <th>승인여부</th>
                        <th>거절사유</th>
                    </tr>
                </thead>
                <tbody>
                    {subsList && subsList.map(subsList =>
                        <tr key={subsList.id}  className='trtd'>
                            <td>{subsList.id}</td>
                            <td>{subsList.productName}</td>
                            <td>{subsList.username}</td>
                            <td>{formatDateTime(subsList.joinDate)}</td>
                            <td>{formatDateTime(subsList.applyDate)}</td>
                            <td>{subsList.isApproval}</td>
                            <td>{subsList.reason}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </Layout>
  );
}
