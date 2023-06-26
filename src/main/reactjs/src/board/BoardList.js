import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function BoardList(props) {

    const navi = useNavigate();

    const onWriteButtonEvent=()=>{
        if(sessionStorage.loginok==null || sessionStorage.loginok=='no'){
            alert("먼저 로그인해주세요");
            navi("/login");
        }else{
            navi("/board/form")
        }
    }

    return (
        <div>
            <button type='button' className='btn btn-outline-success'
            style={{width:'100px',marginLeft:'10px'}} onClick={onWriteButtonEvent}>글쓰기</button>
            <h1>게시판 목록</h1>
        </div>
    );
}

export default BoardList;