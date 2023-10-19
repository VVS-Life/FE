import React, { useEffect, useState } from 'react';
import '../../styles/board/BoardDetail.css'
import Layout from "../../components/Layout/Layout"
import BoardService from '../../service/BoardService';
import { useParams, useNavigate } from 'react-router-dom';

function BoardDetail(props) {
    const {no} = useParams();
    const [board, setBoard] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // 페이지가 로딩될 때 API와 통신하여 글 객체를 가져옵니다.
        BoardService.getOneBoard(no).then((res) => {
            console.log(res.data); 
            setBoard(res.data);
        });
    }, [no]);
    
    let imageArray = [];
    if (board.image) {
        imageArray = board.image.split(',').map(url => url.trim());
        // 이제 imageArray를 사용할 수 있습니다.
    }

    const goToList = () => {
        navigate('/boardList');
    };

    const deleteBoard = async (event) => {
        event.preventDefault();

        try {
            await BoardService.deleteBoard(board.id);
                alert("글이 성공적으로 삭제되었습니다.");
                navigate('/boardList');
        } catch (error) {
            console.error(error);
            alert("글 삭제에 실패했습니다.");
        }
    };

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
        <Layout pageName="게시글" >
        <div>
            <div className="card col-md-6 offset-md-3"><br/>
                <h1 className="text-center">{board.title}</h1>
                <div className="card-body">
                    <div id='boardInfo'>
                        <div>글번호: {board.id}</div>
                        <div>비공개 여부: {board.isPublic}</div> 
                        <div>답변 여부: {board.isAnswer}</div> 
                    </div><br/>
                    <div id='boardContent'>
                        <textarea value={board.content} readOnly />
                    </div><br/>
                    <div id="boardImage">
                        {imageArray.map((f) => <img src={f} ></img>)}
                    </div><br/>
                    <div className="row">
                        <label>생성일: [ {formatDateTime(board.createdAt)} ] </label>
                        <label>최종 수정일: [ {formatDateTime(board.modifiedAt)} ]</label>
                    </div><br/>
                    <button className="btn btn-primary" onClick={goToList}>
                        글 목록으로 이동
                    </button>
                    <button className="btn text-white" id="deleteBtn" onClick={deleteBoard}>
                        글 삭제
                    </button>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default BoardDetail;