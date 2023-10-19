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

    return (
        <Layout pageName="게시글" >
        <div>
            <div className="card col-md-6 offset-md-3"><br/>
                <h3 className="text-center">{board.title}</h3>
                <div className="card-body">
                    <div id='boardInfo'>
                        <div>글번호: {board.id}</div>
                        <div>비공개 여부: {board.isPublic}</div> 
                        <div>답변 여부: {board.isAnswer}</div> 
                    </div><br/>
                    <div className="row" id='boardContent'>
                        <textarea value={board.content} readOnly />
                    </div><br/>
                    <div id="boardImage">
                        {imageArray.map((f) => <img src={f} ></img>)}
                    </div><br/>
                    <div className="row">
                        <label>생성일: [ {board.createdAt} ] </label>
                        <label>최종 수정일: [ {board.modifiedAt} ]</label>
                    </div><br/>
                    <button className="btn btn-primary" onClick={goToList} style={{ marginLeft: "10px" }}>
                        글 목록으로 이동
                    </button><br/>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default BoardDetail;