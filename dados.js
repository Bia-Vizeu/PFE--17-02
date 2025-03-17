const cards = document.querySelector('main');
fetch('./dados.json')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(p => {
        const card = document.createElement('div');
        card.innerHTML = `
                <h3>${p.nome}</h3>
                <img src="${p.imagem}" alt="${p.nome}">
                <p>${p.descricao}</p>
                <p>Preço: R$ ${p.preco.toFixed(2)}</p>
            `;
            cards.appendChild(card);
    });
})