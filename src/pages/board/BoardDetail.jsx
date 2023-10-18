import React, { useEffect, useState } from 'react';
import BoardService from '../../service/BoardService';
import { useParams, useNavigate } from 'react-router-dom';

function BoardDetail(props) {
    const {no} = useParams();
    const [board, setBoard] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        // 페이지가 로딩될 때 API와 통신하여 글 객체를 가져옵니다.
        BoardService.getOneBoard(no).then((res) => {
            console.log(res); 
            setBoard(res.data);
        });
    }, [no]);

    const goToList = () => {
        navigate('/boardList');
    };

    return (
        <div>
            <div className="card col-md-6 offset-md-3"><br/>
                <h3 className="text-center">게시글</h3>
                <div className="card-body">
                    <div className="row">
                        <label>글번호:</label> {board.id}
                    </div><br/>
                    <div className="row">
                        <label>제목:</label> {board.title}
                    </div><br/>
                    <div className="row">
                        <label>내용:</label><br/>
                        <textarea value={board.contents} readOnly />
                    </div><br/>
                    <div className="row">
                        <label>비공개 여부:</label> {board.isPublic}
                    </div><br/>
                    <div className="row">
                        <label>답변 여부:</label> {board.isAnswer}
                    </div><br/>
                    <div className="row">
                        <label>생성일: [ {board.createdTime} ] / 최종 수정일: [ {board.updatedTime} ]</label>
                    </div><br/>
                    <button className="btn btn-primary" onClick={goToList} style={{ marginLeft: "10px" }}>
                        글 목록으로 이동
                    </button><br/>
                </div>
            </div>
        </div>
    );
}

export default BoardDetail;
