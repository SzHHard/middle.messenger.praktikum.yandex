export let changePassword = /*html*/ `
<a class="toChats" href="/">К чатам</a>

<div class='changeDataContainer'>    

    <div class='avatarAndNickname'>

    <div class='balancerLeft'>
       <div class='imgWrapper'> <img  id = 'changeAvatar' src=<%= userAvatar %> > </div>
        <p> <%= username %> </p>
    </div>

    <div class='balancerRight'>
    </div>


    </div>
    
    <div class='fields'>

        <div class='field'> 
            <div class='left'> Старый пароль: </div> 
            <div class='right'> 
                <div class='inputField'>
                <input class='textInput' type='text' id='oldPassword' name='oldPassword'/>
                </div> 
            </div>  
        </div>

        <div class='field'> 
            <div class='left'> Новый пароль: </div> 
            <div class='right'> 
                <div class='inputField'>
                    <input class='textInput' type='text' id='newPassword' name='newPassword'/>
                </div> 
            </div>  
        </div>


        <div class='field'> 
            <div class='left'> Повторите пароль: </div> 
            <div class='right'> 
                <div class='inputField'>
                    <input class='textInput' type='text' id='repeatPassword' name='repeatPassword'/>
                </div> 
            </div>  
        </div>

    </div>

    <div class='submit'> <button>Изменить значение</button> </div>
    <div class = 'bottom'> <div class='bottomLeft'> <a href='/account'> К профилю </a> </div> <div class='bottomRight'> <a href='/updateInfo'> Изменить данные </a> </div> </div>
</div>
`