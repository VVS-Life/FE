import React, { useState } from 'react';
import Layout from "../../components/Layout/Layout"
import BoardService from '../../service/BoardService';
import { useNavigate } from "react-router-dom";

export default function BoardWrite() {
    const jwtToken = localStorage.getItem('Authorization');

    const navigate = useNavigate();

    const [state, setState] = useState({
        title: '',
        content: '',
        image: null,
        isPublic: '공개'
    });

    const changeTitleHandler = (event) => {
        setState({ ...state, title: event.target.value });
    };

    const changeContentsHandler = (event) => {
        setState({ ...state, content: event.target.value });
    };

    const changeImageHandler = (event) => {
        const fileArray = Array.from(event.target.files);
        setState({ ...state, image: fileArray });
    };

    const changeIsPublicHandler = (event) => {
        const value = event.target.checked ? "비공개" : "공개";
        setState({ ...state, isPublic: value });
    };

    const isFormValid = () => {
        return state.title.trim() !== '' && state.content.trim() !== '';
    };

    const createBoard = async (event) => {
        event.preventDefault();
        let dto = {
            title: state.title,
            content: state.content,
            isPublic: state.isPublic
        };

        try {
            await BoardService.createBoard(dto, state.image, jwtToken);
            alert("글이 성공적으로 등록되었습니다.");
            navigate('/boardList');
        } catch (error) {
            console.error(error);
            alert("글 등록에 실패했습니다.");
        }
    };

    return (
        <Layout pageName='문의글 작성'>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <br></br>
                            <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> [ 제목 ] </label>
                                        <input type="text" placeholder="제목을 입력해주세요." name="title" className="form-control"
                                            value={state.title} onChange={changeTitleHandler} />
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label> [ 문의내용 ] </label>
                                        <textarea placeholder="4000자 이내로 입력." name="content" className="form-control"
                                            value={state.content} onChange={changeContentsHandler} />
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label> [ 이미지 ] </label><br></br>
                                        <label htmlFor="image-upload" />
                                        <input type="file" id="image-upload" multiple accept="image/*" onChange={changeImageHandler} />
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label> [ 비공개 여부 ] </label><br></br>
                                        <input type="checkbox" name="isPublic" onChange={changeIsPublicHandler} checked={state.isPublic === "비공개"} />
                                        <label> 비공개 </label>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={createBoard} disabled={!isFormValid()}>저장</button>
                                    <button className="btn btn-danger" onClick={() => navigate('/boardList')} style={{ marginLeft: "10px" }}>취소</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
