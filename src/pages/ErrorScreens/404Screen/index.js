import ejs from 'ejs';
import { screen404 } from './notFoundScreen.tmpl'; 

let object = {}

let page404 = ejs.render(screen404, object)

let root = document.querySelector('#root');

let exist = ['/', '/currentChat', '/login', '/registration', '/account', '/updateInfo', '/updatePassword', '/bug', ]


if(!exist.includes(window.location.pathname)){  
    console.log(window.location.pathname)
    root.innerHTML = page404;
}
