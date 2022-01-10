let modalContent = /*html*/ `
    <div class='changeAvatarModalContent'>
        <div> <p><%= status %></p> </div>
        <div class='file'>Выбрать файл на <br /> компьютере</div>
        <button>Поменять</button>
    </div>
`

import ejs from 'ejs';

let data = {
    status: 'Загрузите файл'
}

export let modalContentTemplate = ejs.render(modalContent, data);