export let registrationPage = /*html*/`
    <div class='loginContainer'>
        <div class='registerButtonContainer'>
            <button class='loginRedirectButton'>Войти <img src=<%= registerRedirectImg %> /> </button> 
        </div>
        <div class='formContainer'>
            <form>
                <div class='inputField'>
                    <label for='first_name'>Name:</label>
                    <input class='textInput' type='text' id='first_name' name='first_name'/>
                </div>
                <div class='inputField'>
                    <label for='login'>Surname:</label>
                    <input class='textInput' type='text' id='second_name' name='second_name'/>
                </div>
                <div class='inputField'>
                    <label for='login'>Login:</label>
                    <input class='textInput' type='text' id='login' name='login'/>
                </div>
                 <div class='inputField'>
                    <label for='email'>Email:</label>
                    <input class='textInput' type='text' id='email' name='email'/>
                </div>
                <div class='inputField'>
                    <label for='phone'>Phone:</label>
                    <input class='textInput' type='text' id='phone' name='phone'/>
                </div>
                <div class='inputField'>
                    <label for='password'>Password: </label>
                    <input class='textInput' type='text' id='password' name='password' />
                </div>
                
                <div class='checkboxContainer'>
                    <input type='checkbox' />
                    <label>Remember me</label>
                </div>

                <div class='submitContainer'>
                    <button type='submit' class='registerButton'>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    </div>
`