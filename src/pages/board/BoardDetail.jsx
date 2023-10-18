import React, { useEffect, useState } from 'react';
import BoardService from '../../service/BoardService';

function BoardDetail(props) {
    const [board, setBoard] = useState({});
    const no = props.match.params.no;

    useEffect(() => {
        // 페이지가 로딩될 때 API와 통신하여 글 객체를 가져옵니다.
        BoardService.getOneBoard(no).then((res) => {
            setBoard(res.data);
            // console.log(res); 
        });
    }, [no]);

    const returnDate = (cTime, uTime) => {
        return (
            <div className="row">
                <label>생성일: [ {cTime} ] / 최종 수정일: [ {uTime} ]</label>
            </div>
        );
    };

    const goToList = () => {
        props.history.push('/board');
    };

    return (
        <div>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">Read Detail</h3>
                <div className="card-body">
                    <div className="row">
                        <label>Title:</label> {board.title}
                    </div>
                    <div className="row">
                        <label>Contents:</label> <br />
                        <textarea value={board.contents} readOnly />
                    </div>
                    <div className="row">
                        <label>MemberNo:</label> {board.memberNo}
                    </div>
                    {returnDate(board.createdTime, board.updatedTime)}
                    <button className="btn btn-primary" onClick={goToList} style={{ marginLeft: "10px" }}>
                        글 목록으로 이동
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BoardDetail;
