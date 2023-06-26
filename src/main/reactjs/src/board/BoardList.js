import React, { useCallback, useEffect, useState } from 'react';
import '../App.css';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import  Axios  from 'axios';
import BoardRowList from './BoardRowList';

function BoardList(props) {

    const [data,setData]=useState('');

    const navi = useNavigate();

    const {currentPage}=useParams();
    console.log({currentPage});

      //페이징처리에 필요한 데이타 가져오기
    // const list=()=>{
    //     const url="/board/list?currentPage="+(currentPage==null?1:currentPage);
    //     Axios.get(url)
    //     .then(res=>{
    //         setData(res.data);
    //     })
    // }

    // useEffect(()=>{
    //     list();
    // },[currentPage]);

    const list=useCallback(()=>{
        const url="/board/list?currentPage="+(currentPage==null?1:currentPage);
        Axios.get(url)
        .then(res=>{
            setData(res.data);
        })
    },[currentPage]);

    useEffect(()=>{
        list();
    },[list])


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
            <br/><br/>
            <h5><b>총 {data.totalCount}개의 글이 있씁니다</b></h5>
            <table className='table table-bordered' style={{width:'700px'}}>
                <thead>
                    <tr style={{backgroundColor:'#ddd'}}>
                        <th style={{width:'40px'}}>번호</th>
                        <th style={{width:'200px'}}>제목</th>
                        <th style={{width:'70px'}}>작성자</th>
                        <th style={{width:'100px'}}>작성일</th>
                        <th style={{width:'50px'}}>조회</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        data.list &&
                        data.list.map((row,idx)=><BoardRowList key={idx} row={row} no={data.no}
                        idx={idx} currentPage={currentPage}/>)
                        
                    }
                </tbody>
            </table>

            <div style={{width:'800px',textAlign:'center'}}>
                    {/* 페이징 처리 */}

                    {
                          // 이전
                          data.startPage>1?
                          <Link to={`/board/list/${data.startPage-1}`}
                          style={{textDecoration:'none',cursor:'pointer',color:'black',marginRight:'10px'}}>이전</Link>:''
                    }
            

                    {
                        data.parr &&
                        data.parr.map((pno,i)=>
                        <NavLink to={`/board/list/${pno}`}>
                            <b style={{marginRight:'3px',textDecoration:'none',cursor:'pointer',marginRight:'10px',
                            color:pno===Number(currentPage)?'red':'black'}}>{pno}</b>
                        </NavLink>)
                    }
                    {
                        // 다음
                        data.endPage<data.totalPage?
                        <Link to={`/board/list/${data.endPage+1}`}
                        style={{textDecoration:'none',cursor:'pointer',color:'black'}}>다음</Link>:''
                    
                    }
            </div>

        </div>
    );
}

export default BoardList;