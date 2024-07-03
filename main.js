const messages = [
    'A vida trará coisas boas se tiver paciência.', 
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'A maior de todas as torres começa no solo.',
    'Sem o fogo do entusiasmo, não há o calor da vitória.',
    'A paciência na adversidade é sinal de um coração sensível.',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Motivação não é sinónimo de transformação, mas um passo em sua direção.',
    'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.',
    'A maior barreira para o sucesso é o medo do fracasso.'
]

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnCookie = document.querySelector("#cookie")
const btnAnotherCookie = document.querySelector("#anotherCookie")
const message = document.querySelector("#message")


// Eventos
btnCookie.addEventListener('click', handleCookieButton)
btnAnotherCookie.addEventListener('click', toggleScreen)


// Funções
function randomMessage(messages) {
    let randomIndex = Math.floor(Math.random() * messages.length)

    let chosenMessage = messages[randomIndex]

    return chosenMessage
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleCookieButton() {
    toggleScreen()

    message.innerText = randomMessage(messages)
}

