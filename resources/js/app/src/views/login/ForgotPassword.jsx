import React, { useState } from 'react'
import {Link } from 'react-router-dom';

export default function ForgotPassword() {
    
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form>
          <h1 className="title">Recuperar senha</h1>

          <input type="text" placeholder="Email" />
          
          <button className="btn btn-block">Recuperar</button>

          <p className="message">
            Já tem uma conta?
            <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
