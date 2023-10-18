import React, { Component } from 'react';
import '../../styles/BoardList.css'
import Layout from "../../components/Layout/Layout"
import BoardService from '../../service/BoardService';
import 'bootstrap/dist/css/bootstrap.min.css';


class BoardList extends Component {
    constructor(props) {
        super(props)
    // # 1. 
        this.state = { 
            boards: []
        }
		
    }
    // # 2. 
    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({boards: res.data.content});
            // console.log(res);
        });
    }

    // # 3.
    render() {
        return (
            <Layout pageName='문의게시판'>
            <div>
                <h2 className="text-center">Boards List</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>작성자 </th>
                                <th>작성일 </th>
                                <th>갱신일 </th>
                                <th>공개여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.boards && this.state.boards.map(
                                    board => 
                                    <tr key = {board.id}>
                                        <td> {board.id} </td>
                                        <td> {board.title} </td>
                                        <td> 하재민 </td>
                                        <td> {board.createdAt} </td>
                                        <td> {board.modifiedAt} </td>
                                        <td> {board.isPublic} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            </Layout>
        );
    }
}

export default BoardList;


