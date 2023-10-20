import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import SubsListService from "../../service/SubsListService";

export default function Complete() {
    const navigate = useNavigate();
    const [subsList, setSubsList] = useState([]);

    useEffect(() => {
        SubsListService.getSubscriptions()
        .then((res) => {
            setSubsList(res.data);
        });
    }, []);

  return (
    <Layout pageName="보험 신청 완료">
        <div>
            <table>
                <colgroup>
                <col width="5%" />
                <col width="30%" />
                <col width="10%" />
                <col width="15%" />
                <col width="15%" />
                <col width="10%" />
                <col width="15%" />
                </colgroup>
                <thead>
                    <tr>
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
                        <tr key={subsList.id}>
                            <td>{subsList.id}</td>
                            <td>{subsList.productName}</td>
                            <td>{subsList.username}</td>
                            <td>{subsList.joinDate}</td>
                            <td>{subsList.applyDate}</td>
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
