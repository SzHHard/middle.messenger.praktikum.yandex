import { modalWindow } from "../../../modules/modal/modal.tmpl"; // взяли шаблон
import { modalContentTemplate } from './content.tmpl';                     //взяли нужный контент для шаблона
import ejs from 'ejs';



const elem = document.querySelector('#root');
elem.insertAdjacentHTML('beforeend', modalWindow)       // добавили на экран модальное окно


elem.lastElementChild.lastElementChild.innerHTML = modalContentTemplate;


const innerDiv = document.querySelector('.changeAvatarModalContent')

const contentContainer = innerDiv.closest('.modalWindowContent')


const modal = contentContainer.closest('.modalWindow');
modal.addEventListener('click', closeModal)





export const openModal = () => {
    const theDiv = document.querySelector('.changeAvatarModalContent')
    const modal = theDiv.closest('.modalWindow');
    modal.classList.add('active');
    modal.firstElementChild.classList.add('active');
}

function closeModal(e) {
    e.target.classList.remove('active');
    e.target.firstElementChild.classList.remove('active');
}

