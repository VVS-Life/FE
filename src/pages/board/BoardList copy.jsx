// import React, { Component } from 'react';
// import '../../styles/board/BoardList.css'
// import Layout from "../../components/Layout/Layout"
// import BoardService from '../../service/BoardService';
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default class BoardList extends Component {
//     constructor(props) {
//         super(props);

//         this.state = { 
//             boards: []
//         }
// 		this.createBoard = this.createBoard.bind(this); //글 작성 버튼을 클릭 했을 때 동작하는 'createBoard' 함수를 바인드
//     }

//     componentDidMount() {
//         BoardService.getBoards().then((res) => {
//             this.setState({boards: res.data.content});
//             // console.log(res);
//         });
//     }

//     // 글 작성 버튼을 클릭시 글작성 페이지로 이동
//     createBoard() {
//         // navigate('/boardWrite');
//         // window.location.href = "/boardWrite"; // 새로고침x
//         this.props.history.push('/boardWrite');
//     }

//     readBoard(no) {

//         this.props.history.push(`/read-board/${no}`);
//     }


//     // 렌더링(화면표시)
//     render() {
//         return (
//             <Layout pageName='문의게시판'>
//             <div>
//                 <h2 className="text-center">Boards List</h2>
//                 <div className = "row">
//                     <button className="btn btn-primary" onClick={this.createBoard}> 글 작성</button>
//                 </div>
//                 <div className ="row">
//                     <table className="table table-striped table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>글 번호</th>
//                                 <th>타이틀 </th>
//                                 <th>작성자 </th>
//                                 <th>작성일 </th>
//                                 <th>갱신일 </th>
//                                 <th>공개여부</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.boards && this.state.boards.map(
//                                     board => 
//                                     <tr key = {board.id}>
//                                         <td> {board.id} </td>
//                                         <td> <a onClick = {() => this.readBoard(board.no)}>{board.title} </a></td>
//                                         <td> 하재민 </td>
//                                         <td> {board.createdAt} </td>
//                                         <td> {board.modifiedAt} </td>
//                                         <td> {board.isPublic} </td>
//                                     </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             </Layout>
//         );
//     }
// }
