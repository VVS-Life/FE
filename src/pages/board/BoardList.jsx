import React, { useEffect, useState } from 'react';
import '../../styles/board/BoardList.css';
import Layout from "../../components/Layout/Layout"
import BoardService from '../../service/BoardService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';

export default function BoardList() {
    const navigate = useNavigate();
    const [boards, setBoards] = useState([]);
    const [page, setPage] = useState(1);
    const [paging, setPaging] = useState({});
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    
    useEffect(() => {
        listBoard(page); // 초기 요청
    }, [page]);

    const listBoard = (page) => {
        console.log("page: " + page);
        BoardService.getBoards(page).then((res) => {
            setPage(res.data.pagingData.currentPageNum);
            setPaging(res.data.pagingData);
            setBoards(res.data.list.content);
            console.log(res.data.list.content);
            setLoading(false); // 요청 완료 후 로딩 상태 업데이트
        });
    }

    const createBoard = () => {
        navigate('/boardWrite');
    }

    const isPagingPrev = () => {
        if (paging.prev) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => listBoard(paging.currentPageNum - 1)} tabIndex="-1">Previous</a>
                </li>
            );
        }
    }

    const isPagingNext = () => {
        if (paging.next) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => listBoard(paging.currentPageNum + 1)} tabIndex="-1">Next</a>
                </li>
            );
        }
    }

    const isMoveToFirstPage = () => {
        if (page !== 1) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => listBoard(1)} tabIndex="-1">첫번째 페이지로</a>
                </li>
            );
        }
    }

    const isMoveToLastPage = () => {
        if (page !== paging.pageNumCountTotal) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => listBoard(paging.pageNumCountTotal)} tabIndex="-1">마지막 페이지로({paging.pageNumCountTotal})</a>
                </li>
            );
        }
    }


    const viewPaging = () => {
        console.log(paging);
        const pageNums = [];
        for (let i = paging.pageNumStart; i <= paging.pageNumEnd; i++) {
            pageNums.push(i-1);
        }
            
        return pageNums.map((page) => (
            <li className="page-item" key={page.toString()}>
                <a className="page-link" onClick={() => listBoard(page+1)}>{page+1}</a>
            </li>
        ), console.log(page));
    }

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
        <Layout pageName='문의게시판' id = "page">
            <div id='boardWrap'>
                <div className="row">
                    {loading ? ( // 로딩 중일 때
                        <p>Loading...</p>
                    ) : (
                        <table className="table table-bordered">
                            <thead>
                                <tr id='tableTh'>
                                    <th>글번호</th>
                                    <th>타이틀</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                    <th>갱신일</th>
                                    <th>공개여부</th>
                                </tr>
                            </thead>
                            <tbody>
                                {boards.map(board => (
                                    <tr key={board.id}  id='tableTd'>
                                        <td>{board.id}</td>
                                        <td><Link to={`/board/${board.id}`}>{board.title}</Link></td>
                                        <td>{board.nickName}</td>
                                        <td>{formatDateTime(board.createdAt)}</td>
                                        <td>{formatDateTime(board.modifiedAt)}</td>
                                        <td>{board.isPublic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                <div id="createBtn">
                    <button className="btn btn-primary" onClick={createBoard}>글 작성</button>
                </div>
                </div>
                <div className="row">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {isMoveToFirstPage()}
                            {isPagingPrev()}
                            {viewPaging()}
                            {isPagingNext()}
                            {isMoveToLastPage()}
                        </ul>
                    </nav>
                </div>
            </div>
        </Layout>
    );
}