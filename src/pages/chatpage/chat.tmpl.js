
export let chat = /*html*/ `
    <div class='chatPage'>
        <div class='headPanel'>
            <div class='backLink'> <img src=<%= backLink %> alt='back'/> back </div>
            <div class='name'> Mr. Pointer </div>
            <div class='companionAvaAndMore'>
                <img class='more' src=<%= more %> alt='more' /> 
                <img class='companionAva' src=<%= companionAva %> alt='more' />
            </div>
        </div>

        <div class = companionMessage> Однажды был случай в далеком Макао:
            Макака коалу в какао макала,
            Коала какао лениво лакала,
            Макака макала, коала икала. 
        </div>
        <div class = myMessage> 
            Я понимаю, что ты очень любишь стихи, но я сейчас занят и не могу уделить этому достаточное количество времени... Напишу!
        </div>
        <div class = companionMessage> 
             Никто не понимает мое искусство...
        </div>

        <div class='footerPanel'>
            <img class='chooseFile' src=<%= chooseFileImg %> alt='chooseFile'/>
            <div class='newMessageContainer'> 
                <input type='text' placeholder='Write a message...'/>
            </div>
            <img class='sendMessage' src=<%= sendMessageImg %> alt='sendMessage' >
        </div>
    </div>
`   