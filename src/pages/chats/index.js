
import ejs from 'ejs';
import {chats} from './chats.tmpl';
import avatar1 from '../../../static/avatars/szh.jpg'
import avatar2 from '../../../static/avatars/2.png'
import avatar3 from '../../../static/avatars/kindred.jpg'
import lense from '../../../static/devImages/32pxlense.png'
import more from '../../../static/devImages/3dots.jpg'
import {RedirectPathnameHOF} from '../../utils/redirect'


let data = {
    companions: [
        {
            name: 'Mr Pointer',
            lastMessage: 'Леее куда прешь',
            lastMessageTime: '10:14 am',
            newMessagesCount: 1,
            avatar: avatar1,
        },
        {
            name: 'Tester Benchmarker',
            lastMessage: 'Ну Леее куда прешь',
            lastMessageTime: 'Вчера',
            newMessagesCount: 213,
            avatar: avatar2,
        },
        {
            name: 'Олег Гатчин-Уточкин',
            lastMessage: 'кто в наше время не любит уточек? Лично я люблю уточек',
            lastMessageTime: '4 Jan',
            newMessagesCount: 2,
            avatar: avatar3,
        },
    ],

    lense,
    more
}

let template = ejs.render(chats, data);


const elem = document.querySelector('#mainContent');

if (window.location.pathname === '/') {
    elem.innerHTML = template;  //потом, возможно, поменять innerHTML на другие слова

    const chatContainers = document.querySelectorAll('.chatsBlock__chatPreviewContainer');
    chatContainers.forEach((chatContainer) => {
        chatContainer.addEventListener('click', RedirectPathnameHOF('/currentChat'))
    })
}

