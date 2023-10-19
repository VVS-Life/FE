import React, { useEffect, useState } from 'react';
import '../../styles/board/BoardList.css'
import Layout from "../../components/Layout/Layout"
import BoardService from '../../service/BoardService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom'; // 페이지이동1

export default function BoardList() {
    const navigate = useNavigate(); // 페이지이동2
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        BoardService.getBoards().then((res) => {
            setBoards(res.data.content);
            console.log(res.data.content);
        });
    }, []);

    const createBoard = () => {
        navigate('/boardWrite'); // 페이지이동3
    }

    const readBoard = (no) => {
        navigate('/board/${no}');
    }

    return (
        <Layout pageName='문의게시판'>
            <div>
                <h2 className="text-center">Boards List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={createBoard}>글 작성</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글번호 </th>
                                <th>타이틀</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>갱신일</th>
                                <th>공개여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boards && boards.map(board =>
                                <tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td><Link to={`/board/${board.id}`}>{board.title}</Link></td>
                                    <td>하재민</td>
                                    <td>{board.createdAt}</td>
                                    <td>{board.modifiedAt}</td>
                                    <td>{board.isPublic}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}
