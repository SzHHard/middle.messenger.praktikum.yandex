import ejs from 'ejs';
import { screen500 } from './serverErrorScreen.tmpl'; 

let object = {}

let page500 = ejs.render(screen500, object)

let root = document.querySelector('#root');

if(window.location.pathname === '/bug'){
    root.innerHTML = page500;
}
