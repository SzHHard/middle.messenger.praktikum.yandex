import { headerTemplate } from "./header.template";
import ejs from 'ejs';
import userAvatar from '../../../static/avatars/kindred.jpg'
import {openModal} from './accountSettings/index'
import {RedirectPathnameHOF} from '../../utils/redirect';

let data = {
    userAvatar
}

let template = ejs.render(headerTemplate, data);

const elem = document.querySelector('#header');

elem.innerHTML = template;  //потом, возможно, поменять innerHTML на другие слова

const logoText = document.querySelector('.logoText');
logoText.addEventListener('click', RedirectPathnameHOF('/login'))

const accountModalImg = document.querySelector('#accountModalImg')
accountModalImg.addEventListener('click', openModal)
