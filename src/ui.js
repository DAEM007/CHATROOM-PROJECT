// ALL IMPORTS
import { formatDistanceToNow } from 'date-fns';


// CLASS FOR THE CHAT UI
export class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const Date = data.created_at;
        const when = formatDistanceToNow(
            Date.toDate(), {addSuffix: true} 
        )
        const html = `
        <li class='list-group-item'>
            <div class="username-message">
                <span class='username'>${data.username}</span>
                <span class='message'>${data.message}</span>
            </div>
            <div class='time'>${when}</div>
        </li>
        `;

        this.list.innerHTML += html;
    }
}

