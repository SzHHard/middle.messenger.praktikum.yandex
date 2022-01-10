


export let chats = /*html*/ 
`
<div class='chatsBlock'>
    <div class='chatsBlock__searchbarContainer'>
        <div class='left'>
            <img class='lense' src=<%=lense %> alt='lense' />
            <input placeholder="Search" />
        </div>

        <div class='searchbarContainer__createGroupChatButton'>
            <img class='more' src=<%=more %> alt='more'/>
        </div>
    </div>



    <% companions.forEach(function(companion){ %>

        <div class='chatsBlock__chatPreviewContainer'>
            <div class='leftSide'>
                <img src=<%= companion.avatar %> alt='avatar'>
                <div class='chatPreview'>
                    <div class='dialogName'>
                        <%= companion.name %>
                    </div>
                    <div class='dialogLastMessage'>
                        <%= companion.lastMessage %>
                    </div>
                </div>
            </div>
            <div class='rightSide'>
                <p><%= companion.lastMessageTime %></p>
                <div class='newMessagesCount'>
                     <span> <%= companion.newMessagesCount %> </span> 
                </div>
            </div>       
        </div>         
    <% }) %>
        
</div>
`

