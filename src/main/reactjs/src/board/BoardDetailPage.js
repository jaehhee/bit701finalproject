import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BoardDetailPage(props) {

    const [data,setData]=useState({});
    const {num,currentPage}=useParams();
    console.log(num);

    const navi = useNavigate();

    const photoUrl=process.env.REACT_APP_BOARDURL;
    const myid=sessionStorage.myid;
    const loginok=sessionStorage.loginok;

    const getData=()=>{
        const url=`/board/detail?num=${num}`;
        Axios.get(url)
        .then(res=>{
            setData(res.data);
        })
    }

    useEffect(()=>{
        getData();
    },[]);


    return (
        <div style={{marginLeft:'30px'}}>
            <h5><b>{data.subject}</b></h5>
            <h6>
                <span>작성자 : {data.myname}({data.myid && data.myid.substring(0,3)}***)</span>
                <span style={{float:'right',color:'gray'}}>
                    조회&nbsp;{data.readcount}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {data.writeday}
                </span>
            </h6>
            {
                data.photo==null?'':
                <img alt='' src={`${photoUrl}${data.photo}`}
                style={{border:'1px solid gray',maxWidth:'500px'}}/>
            }
            <br/><br/>
            <pre>{data.content}</pre>
            <br/>
            <div>
                <button type='button' className='btn btn-outline-danger' style={{width:'80px',marginRight:'5px'}}
                onClick={()=>navi(`/board/list/${currentPage}`)}>목록</button>
                {
                    loginok!=null && myid==data.myid?
                    <button type='button' className='btn btn-outline-danger' style={{width:'80px',marginRight:'5px'}}
                    onClick={()=>{
                        const url=`/board/delete?num=${data.num}`
                        Axios.delete(url)
                        .then(res=>{
                            //목록으로 이동
                            navi(`/board/list/${currentPage}`);
                        })
                    }}>삭제</button>:''
                }

                {
                    loginok!=null && myid==data.myid?
                    <button type='button' className='btn btn-outline-danger' style={{width:'80px',marginRight:'5px'}}
                    onClick={()=>{}}>수정</button>:''
                }
            </div>
            
        </div>
    );
}

export default BoardDetailPage;