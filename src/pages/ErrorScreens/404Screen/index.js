import ejs from 'ejs';
import { screen404 } from './notFoundScreen.tmpl'; 

let object = {}

let page404 = ejs.render(screen404, object)

let root = document.querySelector('#root');

let exist = ['/', '/login', '/bug', '/chats', '/registration']

if(!exist.includes(window.location.pathname)){  
    root.innerHTML = page404;
}
