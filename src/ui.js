// ALL IMPORTS
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// CLASS FOR THE CHAT UI
export class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        const when = formatDistanceToNow(
            data.created_at.toDate().getTime(), {addSuffix: true} 
        )
        const html = `
        <li class='list-group-item'>
            <span class='username'>${data.username}</span>
            <span class='message'>${data.message}</span>
            <div class='time'>${when}</div>
        </li>
        `;

        this.list.innerHTML += html;
    }
}
