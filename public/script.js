
const msgInput = document.getElementById('msg-input')
const msgSendBtn = document.getElementById('send-btn')
const msgDisplay = document.getElementById('msg-display')
const msgCounter = document.getElementById('msg-counter')
const showHideText = document.getElementById('show-hide-text')


    let msgCount = 0;


msgSendBtn.addEventListener('click', () => {

    msgCount++
    msgDisplay.innerText = msgInput.value
    msgCounter.innerText = msgCount
    
})

showHideText.addEventListener('click', function(event) {
    if(this.checked) {
        msgInput.type = 'password';
    } else {
        msgInput.type = 'text';
    }
})