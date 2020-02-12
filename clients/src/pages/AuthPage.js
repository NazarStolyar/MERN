import React, {useContext, useEffect, useState} from "react";
import {UseHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const message = useMessage()
    const {loading, request, error, clearError} = UseHttp();
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    };

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields()
    }, [])


    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message);

        } catch (e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId)
        } catch (e) {

        }
    }

    return (
        <div className='row'>
           <div className="col s6 offset-s3">
               <h1>Скороти силку</h1>
               <div className="card blue darken-1">
                   <div className="card-content white-text">
                       <span className="card-title">Авторизація</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Email"
                                       id="email"
                                       type="email"
                                       name='email'
                                       onChange={changeHandler}
                                       value={form.email}
                                       className="validate yellow-input" />
                                 <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Password"
                                       id="password"
                                       type="password"
                                       name='password'
                                       value={form.password}
                                       onChange={changeHandler}
                                       className="validate yellow-input" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                   </div>
                   <div className="card-action">
                      <button
                          className='darken-4 yellow btn'
                          style={{marginRight: 10}}
                          disabled={loading}
                          onClick={loginHandler}
                      >Увійти
                      </button>
                       <button
                           onClick={registerHandler}
                           disabled={loading}
                           className='black-text grey lighten-1 btn'>Реєстрація</button>
                   </div>
               </div>
           </div>
        </div>
    )
}
