import ejs from 'ejs';
import { settings } from './settings.tmpl';
import { userData } from './userData/dataObj';
import {addModalToImg} from './utils/addModalToImg';


let settingsTemplate = ejs.render(settings, userData);

const elem = document.querySelector('#mainContent');



if(document.location.pathname === '/account') {
    elem.innerHTML = settingsTemplate;   
    addModalToImg();
}


