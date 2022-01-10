import ejs from 'ejs';
import { loginPage } from './login.tmpl.js';
import registerRedirectImg from '../../../../static/devImages/registerRedirect.png'
import {RedirectPathnameHOF} from '../../../utils/redirect';

let object = {
    registerRedirectImg
}

let loginPageTemplate = ejs.render(loginPage, object);

const elem = document.querySelector('#mainContent');



// if(window.location.pathname !== '/login'){
//     window.location.pathname = '/login';
// }
if(window.location.pathname === '/login'){  
    elem.innerHTML = loginPageTemplate;
    const buttonRedirect = document.querySelector('.registerRedirectButton');
    buttonRedirect.addEventListener('click', RedirectPathnameHOF('/registration'));

    const buttonSubmit = document.querySelector('.enterButton');
    console.log(buttonSubmit)
    
    buttonSubmit.addEventListener('click', (e) => {e.preventDefault(); window.location.pathname = '/'; });
}

