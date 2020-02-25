import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as db from './db/db.json';

import NewsPageComponent from "./components/news-page/news-page-component";

// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }
//
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick = {() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }
//
// function Square(props) {
//     return(
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     )
// }
//
// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//             xIsNext: true,
//         };
//     }
//
//     handleClick(i) {
//         const squares = this.state.squares.slice();
//
//         if(calculateWinner(squares) || squares[i]) {
//             return;
//         }
//
//         squares[i] = this.state.xIsNext ? 'X' : 'O';
//         this.setState({
//             squares: squares,
//             xIsNext: !this.state.xIsNext,
//         });
//     }
//
//     renderSquare(i) {
//         return <Square
//             value = {this.state.squares[i]}
//             onClick = {() => this.handleClick(i)}
//         />;
//     }
//
//     render() {
//         const winner = calculateWinner(this.state.squares);
//         let status;
//         if(winner) {
//             status = 'Winner: ' + winner;
//         } else {
//             status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//         }
//         // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//
//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

const App = () => {
    return (
        <NewsPageComponent db={db}/>
    );
};

ReactDOM.render(
    <App/>, document.getElementById('root')
);
