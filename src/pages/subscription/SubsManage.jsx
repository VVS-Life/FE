import React, { useEffect, useState } from 'react';
import Layout from "../../components/Layout/Layout";
import SubsListService from "../../service/SubsListService";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/subscription/SubsList.css';
import axios from 'axios'; 

export default function SubsManage() {
    const [subsList, setSubsList] = useState([]);

    useEffect(() => {
        SubsListService.getManageSubscriptions()
        .then((res) => {
            setSubsList(res.data);
        });
    }, []);

    const success = ( async (data) => {
        
        await axios({
            method: 'patch',
            url: `http://localhost:8080/subscription/admin/accept/${data}`,
            headers: {
                'Authorization': 'Bearer' + ' ' + localStorage.getItem('Authorization')
            },
            data: {
                "isApproval" : "가입 승인"
            }
        }).then((res) => {
            if (res.data.statusCode === 200) {
                alert(res.data.message)
                window.location.reload()
            }
        })
    })


    const reject = ( async (data) => {

        await axios({
            method: 'patch',
            url: `http://localhost:8080/subscription/admin/reject/${data}`,
            headers: {
                'Authorization': 'Bearer' + ' ' + localStorage.getItem('Authorization')
            },
            data: {
                "isApproval" : "가입 거절"
            }
        }).then((res) => {
            if (res.data.statusCode === 200) {
                alert(res.data.message)
                window.location.reload()
            }
        })
        
    })

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
    <Layout pageName="가입 관리" id="tableWrap">
        <div id="tableWrap2">
            <table className="table table-bordered">
                <colgroup>
                <col width="10%" />
                <col width="30%" />
                <col width="10%" />
                <col width="15%" />
                <col width="15%" />
                <col width="20%" />
                </colgroup>
                <thead>
                    <tr className='trtd'>
                        <th>신청번호</th>
                        <th>상품명</th>
                        <th>신청자</th>
                        <th>연락처</th>
                        <th>신청일자</th>
                        <th>상태</th>
                        <th>승인/거절</th>
                    </tr>
                </thead>
                <tbody>
                    {subsList && subsList.map( (item) => (
                        <tr key={item.id}  className='trtd'>
                            <td>{item.id}</td>
                            <td>{item.productName}</td>
                            <td>{item.username}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{formatDateTime(item.applyDate)}</td>
                            <td>{item.isApproval}</td>
                            <td>  
                                <div className='divBtn'>
                                    <button onClick={()=>{success(item.id)}} className="completeBtn" id="toMainBtn" >승인</button>
                                    <button onClick={()=>{reject(item.id)}} className="completeBtn" id="toSubsListBtn">거절</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Layout>
  );
}
