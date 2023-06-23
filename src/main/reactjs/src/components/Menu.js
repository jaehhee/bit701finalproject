import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu(props) {
    const myname = sessionStorage.myname;
    const myid = sessionStorage.myid;
    const login = sessionStorage.loginok;

    const handleLogout = () => {
        sessionStorage.loginok = 'no';
        sessionStorage.myid = '';
        sessionStorage.myname = '';
        window.location.reload();
    };



    return (
        <ul className='menu'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/member/form">회원가입</NavLink>
            </li>
            <li>
                <NavLink to="/member/list">회원목록</NavLink>
            </li>
            <li>
                <NavLink to="/board/list">게시판</NavLink>
            </li>

            {login === 'yes' ? (
                <li onClick={handleLogout} style={{backgroundColor:'darkcyan',width:'250px'}}>
                    <NavLink to="/login">로그아웃</NavLink>
                    &nbsp;&nbsp;&nbsp;
                    <b style={{color:'yellow'}}>{sessionStorage.myname}({sessionStorage.myid})</b>
                </li>
            ) : (
                <li>
                    <NavLink to="/login">로그인</NavLink>
                </li>
            )}
        </ul>
    );
}

export default Menu;