export let loginPage = /*html*/`
    <div class='loginContainer'>
        <div class='registerButtonContainer'>
            <button class='registerRedirectButton'>Зарегистрироваться <img src=<%= registerRedirectImg %> /> </button> 
        </div>
        <div class='formContainer'>
            <form>
                 <div class='inputField'>
                    <label for='login'>Login:</label>
                    <input class='textInput' type='text' id='login' name='login'/>
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
                    <button type='submit' class='enterButton'>Войти</button>
                </div>
            </form>
        </div>
    </div>
`