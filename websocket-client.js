const WS = new WebSocket('ws://localhost:4444');

WS.onmessage = payload=>{
    console.log(`Receiving data: ${payload.data}`);
    displayMsgs(payload.data);
}

WS.onopen = ()=>{
    console.log('Connected To Server :)');
    displayTitle('Connected To Server :)');
}

WS.onclose = ()=>{
    console.log('Disconnected From Server );');
    displayTitle('Disconnected From Server );');

}

const displayMsgs = (data)=>{
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const font = document.createElement('i')
    font.className = 'fa fa-remove';
    const a = document.createElement('a');
    a.classList.add('delete-item', 'secondary-content');
    a.appendChild(font);
    ul.className = 'list-group';
    li.className = 'list-group-item';
    li.textContent = `${data}       `;
    li.appendChild(a)
    ul.appendChild(li);
    document.getElementById('message-box').appendChild(ul);
    $('h5').html(`<i class="fa fa-envelope"></i> Broadcasts`)

}

const displayTitle = title=>{
    $('h4').html(title);
}

$('body').click( (e)=>{
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.parentElement.remove();
    }    
});

$('form').submit( ()=>{
    let msg = $('#message').val();
    if(msg != ''){
        console.log(`From input: ${msg}`);
        WS.send(msg);
        $('form').trigger("reset")
    }else{
        console.log('Msg is empty!');
    }
})

