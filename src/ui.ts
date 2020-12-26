import './ui.css'

let sendMessageButton = <HTMLInputElement>document.getElementById('sendMessage')

onmessage = (e) => {
    const message = e.data.pluginMessage

    if (message.type == 'load-something') {
        console.log('👉 Loading something')
    }
}

sendMessageButton.addEventListener('click', function (e) {
    // outgoing to code
    parent.postMessage({ pluginMessage: { type: 'do-something' } }, '*')
});