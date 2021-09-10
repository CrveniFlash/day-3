
const msgInput = document.getElementById('msg-input')
const msgSendBtn = document.getElementById('send-btn')
const msgDisplay = document.getElementById('msg-display')
const msgCounter = document.getElementById('msg-counter')
const showHideText = document.getElementById('show-hide-text')
const button = document.getElementById('buttonmodal')
const closebutton = document.getElementById('closebutton')
const modal = document.getElementById('modal')



let msgCount = 0;


msgSendBtn.addEventListener('click', () => {

    msgCount++
    msgDisplay.innerText = msgInput.value
    msgCounter.innerText = msgCount
    
    //message logs

    let msgLog = document.createElement('p');
    msgLog.classList.add('border-t-2')
    msgLog.innerHTML = msgInput.value


    document.getElementById('message-logs').appendChild(msgLog)

    const date = new Date();
    
    const local = date.toLocaleTimeString('en-US');
    let par = document.createElement('p')
    par.innerHTML = local
    document.getElementById('message-logs').appendChild(par)

    
})

showHideText.addEventListener('click', function (event) {
    if (this.checked) {
        msgInput.type = 'password';
    } else {
        msgInput.type = 'text';
    }
})



button.addEventListener('click',()=>modal.classList.add('scale-100'))
closebutton.addEventListener('click',()=>modal.classList.remove('scale-100'))

// dynamic clock

function realClock() {
    const time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
    m = checkTime(m)
    s = checkTime(s)
    document.getElementById('dynamic-clock').innerHTML = h + ':' + m + ':' + s
    setTimeout(realClock, 1000);

    function checkTime(i) {
        if(i < 10) {i = '0' + i}
        return i;
    }


}

