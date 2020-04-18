const interval = setInterval(() => {
    const header = document.querySelector('._3Kxus>span')
    if(header) {
        clearInterval(interval)
        appendButton(header)
    }
}, 1000)

let button = document.createElement('button')
button.classList.add('wppCustom-speedBtn')
button.innerHTML = '1x'
button.setAttribute('audio-speed', 1.0)


window.audioSpeed = 1.0

button.addEventListener('click', e => {
    e.preventDefault()
    
    increaseSpeed(e.target)
})


const increaseSpeed = btn => {
    (window.audioSpeed == 3.0) ? window.audioSpeed = 1.0 : window.audioSpeed+= 0.25
    
    btn.setAttribute('audio-speed', window.audioSpeed)
    btn.innerHTML = window.audioSpeed.toString() + 'x'
    
    var audios = document.querySelectorAll('audio')
    
    for(audio of audios) {
        audio.playbackRate = window.audioSpeed
    }
}

const appendButton = header => {
    header.appendChild(button)
}