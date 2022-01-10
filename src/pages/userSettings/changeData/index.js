import ejs from 'ejs';
import { changeData } from './changeData.tmpl';
import {userData} from '../userData/dataObj';
import {addModalToImg} from '../utils/addModalToImg';


let changeDataTemplate = ejs.render(changeData, userData);

const elem = document.querySelector('#mainContent');


if (window.location.pathname === '/updateInfo') {
    elem.innerHTML = changeDataTemplate;
   addModalToImg();
}