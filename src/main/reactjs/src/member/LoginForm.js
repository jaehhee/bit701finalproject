import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import  Axios  from 'axios';

function LoginForm(props) {

    const [myid, setMyid] = useState('');
    const [mypass, setMypass] = useState('');

    const navi = useNavigate();

    //submit 이벤트

    const onSubmitLogin=(e)=>{
        e.preventDefault();
        const url = `/member/login?myid=${myid}&mypass=${mypass}`;
        Axios.get(url)
        .then(res=>{
            if(res.data.success==='yes'){
                /*
                    loacalStorage : 직접 지우기 전에는 브라우저에 남아있음
                    sessionStorage :  브라우저 닫으면 지워짐
                */
                sessionStorage.loginok="yes";
                sessionStorage.myname=res.data.myname;
                sessionStorage.myid=res.data.myid;
                navi("/");
            }else{
                alert("아이디나 비밀번호가 맞지 않습니다")
                sessionStorage.loginok="no";
                sessionStorage.myname="";
                sessionStorage.myid="";
            }
        })
    }


    return (
        <div className='login'>
            <form onSubmit={onSubmitLogin}>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th style={{ width: '100px', backgroundColor: '#ddd' }}>아이디</th>
                            <td className='input-group'>
                                <input type='text' className='form-control'
                                    placeholder='아이디' required
                                    value={myid} onChange={(e) => {
                                        setMyid(e.target.value)
                                    }} />
                            </td>
                        </tr>

                        <tr>
                            <th style={{ width: '100px', backgroundColor: '#ddd' }}>비밀번호</th>
                            <td>
                                <input type='password' className='form-control'
                                    required value={mypass} onChange={(e) => setMypass(e.target.value)} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2} align='center'>
                                <button type='submit' className='btn btn-secondary'
                                    style={{ width: '150px' }}>로그인하기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>


            
        </div>
    );
}

export default LoginForm;