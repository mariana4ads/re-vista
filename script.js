document.addEventListener('DOMContentLoaded', function () {
  const btnTip = document.getElementById('btn-tip');
  const tipDisplay = document.getElementById('tip-display');

  const dicas = [
    "Antes de comprar uma peça nova, pergunte: 'Eu realmente preciso disso, ou é só um impulso?' Pratique o consumo consciente.",
    'Lave roupas em água fria e seque ao ar livre (ao natural) para reduzir drasticamente o consumo de energia.',
    'Aprenda a fazer pequenos reparos (botões, costuras). Isso estende a vida útil da sua roupa por anos!',
    'Ao descartar, nunca jogue roupas no lixo comum. Doe para instituições de caridade ou venda em brechós.',
    'Pesquise a origem das suas roupas. Dê preferência a marcas que se comprometem com práticas éticas e sustentáveis.',
  ];

  function showRandomTips() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    tipDisplay.textContent = dicas[indiceAleatorio];
  }
  btnTip.addEventListener('click', showRandomTips);

  showRandomTips();

  // --- 2. Dados e Renderização dos Brechós ---
  const brechosContainer = document.getElementById('brechos-container');

  // Dados de 18 Brechós de Itapevi (Mockup)
  // Os links são placeholders para Google Maps (link real deve ser obtido na pesquisa de campo)
  const brechosData = [
    {
      nome: 'Brechó Re.VISTA Central',
      endereco: 'Rua do Comércio, 123',
      link: 'https://maps.app.goo.gl/simulacao1',
    },
    {
      nome: 'Achados da Praça',
      endereco: 'Praça 18 de Fevereiro, s/n',
      link: 'https://maps.app.goo.gl/simulacao2',
    },
    {
      nome: 'Novos e Usados Itapevi',
      endereco: 'Av. Pres. Vargas, 500',
      link: 'https://maps.app.goo.gl/simulacao3',
    },
    {
      nome: 'Armário Circular',
      endereco: 'Rua Agostinho Ferreira, 45',
      link: 'https://maps.app.goo.gl/simulacao4',
    },
    {
      nome: 'Second Hand Vila Nova',
      endereco: 'R. Prof. Irineu Chaluppe, 10',
      link: 'https://maps.app.goo.gl/simulacao5',
    },
    {
      nome: 'Garimpando Itapevi',
      endereco: 'Rua Amador Bueno, 321',
      link: 'https://maps.app.goo.gl/simulacao6',
    },
    {
      nome: 'Brechó da Vovó',
      endereco: 'R. Ana Maria de Jesus, 88',
      link: 'https://maps.app.goo.gl/simulacao7',
    },
    {
      nome: 'Recicla Moda',
      endereco: 'Av. Rubens Caramez, 1500',
      link: 'https://maps.app.goo.gl/simulacao8',
    },
    {
      nome: 'Ponto de Troca Sustentável',
      endereco: 'Estrada da Roselândia, 77',
      link: 'https://maps.app.goo.gl/simulacao9',
    },
    {
      nome: 'Chic de Segunda Mão',
      endereco: 'Rua Oswaldo de Oliveira, 22',
      link: 'https://maps.app.goo.gl/simulacao10',
    },
    {
      nome: 'Brechó e Customização',
      endereco: 'Av. Brasil, 404',
      link: 'https://maps.app.goo.gl/simulacao11',
    },
    {
      nome: 'O Garimpo Perfeito',
      endereco: 'Rua Ezequiel de Oliveira, 91',
      link: 'https://maps.app.goo.gl/simulacao12',
    },
    {
      nome: 'Vestindo o Futuro',
      endereco: 'Av. Feres Nacif Chaluppe, 102',
      link: 'https://maps.app.goo.gl/simulacao13',
    },
    {
      nome: 'Moda Sustentável Itapevi',
      endereco: 'R. Sabiá, 55 - Jardim Rainha',
      link: 'https://maps.app.goo.gl/simulacao14',
    },
    {
      nome: 'Tesouros Escondidos',
      endereco: 'Rua Rio Grande do Sul, 70',
      link: 'https://maps.app.goo.gl/simulacao15',
    },
    {
      nome: 'Vintage Itapevi',
      endereco: 'Av. Getúlio Vargas, 10',
      link: 'https://maps.app.goo.gl/simulacao16',
    },
    {
      nome: 'Brechó da Cidinha',
      endereco: 'Rua Manoel da Nóbrega, 33',
      link: 'https://maps.app.goo.gl/simulacao17',
    },
    {
      nome: 'Consciência na Roupa',
      endereco: 'Rua Serra da Estrela, 10',
      link: 'https://maps.app.goo.gl/simulacao18',
    },
  ];

  function renderizarBrechos() {
    let html = '';
    brechosData.forEach((brecho) => {
      html += `
                <article class="card brecho-card">
                    <h4 class="card-title">${brecho.nome}</h4>
                    <p class="card-text mb-3">
                        <i class="fas fa-map-marker-alt text-primary mr-2"></i> ${brecho.endereco}
                    </p>
                    <a href="${brecho.link}" target="_blank" class="btn btn-accent btn-small inline-flex">
                        <i class="fas fa-route mr-2"></i> Ver no Mapa
                    </a>
                </article>
            `;
    });
    brechosContainer.innerHTML = html;
  }

  renderizarBrechos();

  // --- 3. Lógica do CTA do Quiz (Placeholder) ---
  document.getElementById('quiz-link').addEventListener('click', function (e) {
    e.preventDefault();
    // Rola para a seção do quiz
    document.getElementById('quiz-cta').scrollIntoView({ behavior: 'smooth' });
    // Alerta que simula a transição
    alert(
      'Aviso: Na versão completa do projeto, este botão iniciaria um Quiz interativo em uma nova seção. Por enquanto, explore as informações do Re.VISTA!'
    );
  });
});
