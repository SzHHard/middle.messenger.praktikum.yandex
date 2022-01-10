import { openModal } from '../changeAvatarModal/handleModal';


export const addModalToImg = () => {
    const img = document.querySelector('#changeAvatar');
    img.addEventListener('click', openModal);
}