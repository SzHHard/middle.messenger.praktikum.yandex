//не забыть санитизировать username (вместо = что-то другое)

export let settings = /*html*/ `

    <a class="toChats" href="/">К чатам</a>

    <div class='settingsContainer'>    

        <div class='avatarAndNickname'>

        <div class='balancerLeft'>
           <div class='imgWrapper'> <img  id = 'changeAvatar' src=<%= userAvatar %> > </div>
            <p> <%= username %> </p>
        </div>

        <div class='balancerRight'>
        </div>


        </div>
        
        <div class='fields'>
            <div class='field'> <div class='left'> Почта: </div> <div class='right'> <%= userEmail %> </div>  </div>
            <div class='field'>  <div class='left'> Логин: </div> <div class='right'> <%= userLogin %> </div>  </div>
            <div class='field'>  <div class='left'> Имя: </div> <div class='right'> <%= userFirstName %> </div>  </div>
            <div class='field'><div class='left'> Фамилия: </div> <div class='right'> <%= userSecondName %> </div>  </div> 
            <div class='field'> <div class='left'> Телефон: </div> <div class='right'> <%= userPhoneNumber %>  </div>  </div> 
        </div>
  
        <div class = 'bottom'> <div class='bottomLeft'> <a href='/updateInfo'> Изменить данные </a> </div> <div class='bottomRight'> <a href='/updatePassword'> Изменить пароль </a> </div> </div>
    </div>
`