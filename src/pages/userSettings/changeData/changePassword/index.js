import ejs from 'ejs';
import { changePassword } from './changePassword.tmpl';
import {userData} from '../../userData/dataObj';
import {addModalToImg} from '../../utils/addModalToImg';



let changePasswordTemplate = ejs.render(changePassword, userData);

const elem = document.querySelector('#mainContent');


if (window.location.pathname === '/updatePassword') {
    elem.innerHTML = changePasswordTemplate;

    addModalToImg();
}