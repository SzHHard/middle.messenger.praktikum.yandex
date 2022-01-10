import ejs from 'ejs';
import { registrationPage } from './registration.tmpl';
import registerRedirectImg from '../../../../static/devImages/registerRedirect.png'
import {RedirectPathnameHOF} from '../../../utils/redirect';

let object = {
    registerRedirectImg
}

let registrationPageTemplate = ejs.render(registrationPage, object);

const elem = document.querySelector('#mainContent');

if(window.location.pathname === '/registration'){
    elem.innerHTML = registrationPageTemplate;
    const button = document.querySelector('.loginRedirectButton');
    button.addEventListener('click', RedirectPathnameHOF('/login'));

    const buttonSubmit = document.querySelector('.registerButton');
    buttonSubmit.addEventListener('click', (e) => {e.preventDefault(); window.location.pathname = '/'; });
}
