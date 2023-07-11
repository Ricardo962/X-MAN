const listaPersonagens = document.querySelectorAll('.personagem')

listaPersonagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        // Buscar a lista de personaligem
        const personagemSelecionado = document.querySelector('.selecionado');

        // Remover o personagem que está selecionado no css
        personagemSelecionado.classList.remove('selecionado')

        // Selecionar o personagem na qual estou passando o mouse em cima
        personagem.classList.add('selecionado')

        // Buscar o atributo id do personagem na qual estou passando o mouse em cima
        const idimagem = personagem.attributes.id.value

        /* Buscar a imagem do personagem selecionado e depois troco o src da imagem pelo nome do personagem atual */
        const imagemSelecionado = document.querySelector('.personagem-grande')
        imagemSelecionado.src = `.//src/img/card-${idimagem}.png`

        /* Busco o nome do personagem selecionado atual e depois troco pelo atributo data-name do personagem atual */
        const nomePersonagem = document.querySelector('.nome-personagem');
        nomePersonagem.innerHTML = personagem.getAttribute('data-name')

        /* Busco a descrição do personagem atual e depois troco pelo atributo data-description atual */
        const detalhePersonagem = document.querySelector('.descricao-personagem')
        detalhePersonagem.innerHTML = personagem.getAttribute('data-description')
    })
})



