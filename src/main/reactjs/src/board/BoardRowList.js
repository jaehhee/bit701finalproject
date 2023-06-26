import React from 'react';
import { NavLink } from 'react-router-dom';
import sorry from '../image/sorryfast.gif';


function BoardRowList(props) {
    const {idx,no,row,currentPage}=props;

    const smallUrl1=process.env.REACT_APP_SMALL_BOARDURL1;
    const smallUrl2=process.env.REACT_APP_SMALL_BOARDURL2;

    return (
        <tr>
            <td>{no-idx}</td>
            <td>
                {/* RouteMain이 /board/detail/num 으로 되어있어서 아래 형식을 보내야함*/}
                <NavLink to={`/board/detail/${row.num}/${currentPage}`} 
                style={{textDecoration:'none',cursor:'pointer',color:'black'}}>
                    {/* 40*40 썸네일 이미지 나오게하기(사진이 있을 경우만) */}

                    {row.photo!=null?
                    
                    <img alt='' src={`${smallUrl1}${row.photo}${smallUrl2}`} 
                    style={{marginRight:'10px'}}/>
                    : <img alt='' src={sorry} style={{width:'40px',height:'40px',marginRight:'10px'}}/>

                    }
                    <b>{row.subject}</b>

                </NavLink>
            </td>
        </tr>
    );
}

export default BoardRowList;