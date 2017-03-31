import React from 'react';

const Auth = ({ isLogged }) => { 
    return isLogged
      ? (<div className="profile">
          <a href="#" className="profile__link">Профиль</a>
         </div>)
      : (<div className="sign-in">
           <a href="#" className="sign-in__link">Войти</a>
         </div>)
};

export default Auth;