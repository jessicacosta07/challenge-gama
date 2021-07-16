const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let data = {
        nome,
        email,
    }
    let converteData = JSON.stringify(data)

    localStorage.setItem('lead', converteData)
    let carregar = `<p>Aguarde por favor!</p>`
    let finalizar = `<p>Finalizado</p>`
    let content = document.getElementById('content')
    content.innerHTML = carregar

    setTimeout(() => {
        content.innerHTML = finalizar
    }, 1000)
})