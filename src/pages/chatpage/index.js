import ejs from 'ejs';
import { chat } from './chat.tmpl';
import more from '../../../static/devImages/3dots.jpg';
import companionAva from '../../../static/avatars/szh.jpg';
import chooseFileImg from '../../../static/devImages/chooseFile.png';
import sendMessageImg from '../../../static/devImages/sendMessage.png';
import backLink from '../../../static/devImages/back.png';
import { RedirectPathnameHOF } from '../../utils/redirect';

const data = {
    more,
    companionAva,
    chooseFileImg,
    sendMessageImg,
    backLink
}

const renderedChat = ejs.render(chat, data);

const elem = document.querySelector('#mainContent');

if(document.location.pathname === '/currentChat'){
    elem.innerHTML = renderedChat;

    const backLink = document.querySelector('.backLink');
    backLink.addEventListener('click', RedirectPathnameHOF('/'));
}
