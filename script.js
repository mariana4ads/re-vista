document.addEventListener('DOMContentLoaded', function () {
  const btnTip = document.getElementById('btn-tip');
  const tipDisplay = document.getElementById('tip-display');

  const dicas = [
    "Antes de comprar uma peça nova, pergunte: 'Eu realmente preciso disso, ou é só um impulso?' Pratique o consumo consciente.",
    'Lave roupas em água fria e seque ao ar livre (ao natural) para reduzir drasticamente o consumo de energia.',
    'Aprenda a fazer pequenos reparos (botões, costuras). Isso estende a vida útil da sua roupa por anos!',
    'Ao descartar, nunca jogue roupas no lixo comum. Doe para instituições de caridade ou venda em brechós.',
    'Pesquise a origem das suas roupas. Dê preferência a marcas que se comprometem com práticas éticas e sustentáveis.',
    'Transforme roupas velhas e rasgadas em panos de limpeza, evitando o descarte desnecessário.',
    'Invista em peças atemporais e de qualidade, em vez de seguir tendências rápidas (fast fashion).',
    'Use sacolas reutilizáveis nas compras para reduzir o consumo de plástico.',
    'Reaproveite potes de vidro e embalagens para armazenar alimentos, evitando comprar novos recipientes.',
    'Tente a regra dos 30 dias: se você quer muito um item, espere 30 dias antes de comprá-lo para evitar o consumo impulsivo.',
    'Aprenda técnicas simples de customização, como bordados ou tingimento, para dar cara nova a peças antigas.',
    'Reformar calçados em vez de descartar. Um bom sapateiro pode trocar solas e saltos, prolongando a vida do seu sapato.',
    'Evite o uso da secadora de roupas sempre que possível, pois ela gasta muita energia e desgasta o tecido.',
    'Lave roupas apenas quando realmente necessário. Muitas vezes, um bom arejamento resolve o problema de odor.',
    'Dê preferência a fibras naturais ou orgânicas (como algodão orgânico), que causam menor impacto ambiental.',
    'Organize um bazar de troca de roupas ou livros entre amigos. É sustentável e divertido!',
    'Apoie costureiras e artesãos locais para reparos e ajustes, fortalecendo a economia circular de Itapevi.',
    'Ao comprar em brechós, explore! Muitas vezes, as melhores peças estão escondidas.',
    'Verifique a etiqueta: procure por tecidos reciclados ou feitos de material reaproveitado.',
    'Use menos sabão e amaciante. Isso reduz a poluição hídrica e prolonga a vida útil da sua máquina de lavar.',
    'Se for comprar um eletrônico, procure modelos recondicionados ou use serviços de aluguel (compartilhamento).',
    'Sempre que viajar, leve sua garrafa reutilizável e evite o uso de copos e garrafas plásticas descartáveis.',
  ];

  function showRandomTips() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    tipDisplay.textContent = dicas[indiceAleatorio];
  }
  btnTip.addEventListener('click', showRandomTips);

  showRandomTips();

  const brechosContainer = document.getElementById('brechos-container');

  const brechosData = [
    {
      nome: 'Brechó da Val',
      endereco: 'R. Benedito de Araújo Novaes, 789 - Jardim Itapoã',
      link: 'https://maps.app.goo.gl/D5DbQzSo42wzUe5eA',
    },
    {
      nome: 'Brechó da Maria',
      endereco: 'R. dos Pernambucanos, 60 - Parque Suburbano',
      link: 'https://maps.app.goo.gl/acwHBUd5yyBojKgL7',
    },
    {
      nome: 'Brechó da Esp',
      endereco: 'R. dos Goianos, 27A - Parque Suburbano',
      link: 'https://maps.app.goo.gl/SrNKnmVervS4FHPq6',
    },
    {
      nome: 'Bazar Enjoei e Desapeguei',
      endereco: 'R. Maestro Gilberto Pinho - cohab 2',
      link: 'https://maps.app.goo.gl/5W95HQtSi7x84KE58',
    },
    {
      nome: 'Bazar Doutora brinquedo',
      endereco: 'Rua Antonio Quintino de Oliveira, 40 - Jardim Paulista',
      link: 'https://maps.app.goo.gl/dWH2Hw6iVYMdT1Nz7',
    },
    {
      nome: 'Brechó da Má',
      endereco: 'R. Giacomo Silicani, 4 - Jardim Paulista',
      link: 'https://maps.app.goo.gl/1kZSDvy2bsYAXAR9A',
    },
    {
      nome: 'Brechó sou de Lua',
      endereco: 'R. dos Goianos, suburbano 2 - Parque Suburbano',
      link: 'https://maps.app.goo.gl/86KHqEqaASKurGUg8',
    },
    {
      nome: 'Brechó Madame Estilo',
      endereco: 'R. dos Cariocas, 982 - Parque Suburbano',
      link: 'https://maps.app.goo.gl/iHGLdxpwk8e1uCjC6',
    },
    {
      nome: 'Brecho da Cida',
      endereco: 'R. Roque Alves Mendes, 93 - Jardim Rosemary',
      link: 'https://maps.app.goo.gl/HuWtKEVhB5KSdZyN8',
    },
    {
      nome: 'Mania de Brechó da Gi',
      endereco: 'R. Benvinda - R. Serra de Tabatinga - Jardim Rosemary',
      link: 'https://maps.app.goo.gl/hJgkHkgLkzZvrF3Z8',
    },
    {
      nome: 'Brechó da Toninha',
      endereco: 'R. Neusa Domingos Nascimento Vasconcelos, 86B - Rosemeire',
      link: 'https://maps.app.goo.gl/jEmwufRdnYa27dqM6',
    },
    {
      nome: 'Garage Brechó',
      endereco: 'R. Neusa Domingos Nascimento Vasconcelos, 49 - Vila Aurora',
      link: 'https://maps.app.goo.gl/pjoLjWqPYmmbokxZ8',
    },
    {
      nome: 'Brechó Infantil Mão na Roda',
      endereco:
        'Rua Joaquim Lemos, 09 sala 2 Próximo a Praça 18 de Fevereiro - Centro',
      link: 'https://maps.app.goo.gl/Jx1hU9cNJ19uybxC8',
    },
    {
      nome: 'Brechó das Amigas Paty e Wilma',
      endereco: 'Jardim Itapevi',
      link: 'https://maps.app.goo.gl/Cvr9k7u7WpU7C59HA',
    },
    {
      nome: 'Brechó Capricho Lee',
      endereco: 'R. Ezequiel Dias Siqueira, 110 - Centro',
      link: 'https://maps.app.goo.gl/6GeDP1V5cvtiucXP6',
    },
    {
      nome: 'Desahpega Brechó',
      endereco: 'R. Pedro Luís García, 47 - Centro',
      link: 'https://maps.app.goo.gl/D5ZXJKJGofkL8hcp9',
    },
    {
      nome: 'Brechó Bonito',
      endereco: 'R. Escolástica Chaluppe, 116 - Centro',
      link: 'https://maps.app.goo.gl/f27a2bbsjvjQc78v9',
    },
    {
      nome: 'Brechó Chic da Jack',
      endereco: 'Av. Ana Araújo de Castro, 94 - Jardim Itapevi',
      link: 'https://maps.app.goo.gl/cUQfC5LNxadiSm1B8',
    },
    {
      nome: 'Suspiro Urbano Brechó',
      endereco: 'Rua Professor Irineu Chaluppe, 192 - Jardim Itapevi',
      link: 'https://maps.app.goo.gl/KscNarPnXmPEVxN9A',
    },
    {
      nome: 'Cresci e Perdi - Itapevi',
      endereco: 'R. Brasília Abreu Alves, 95 - Jardim Nova Itapevi',
      link: 'https://maps.app.goo.gl/9ZdNJSvAFHHEsdzaA',
    },
    {
      nome: 'Brechó Polsaque - By Priscina',
      endereco: 'Av. Pedro Paulino, 81 - Conj. Hab. - St. D',
      link: 'https://maps.app.goo.gl/rU4VGjPBiAutuHoZ6',
    },
  ];

  function renderizarBrechos() {
    let html = '';
    brechosData.forEach((brecho) => {
      html += `
              <div class="brecho-card">
                <div>
                    <h4 class="brecho-title">${brecho.nome}</h4>
                    <p class="brecho-text">
                        <i class="fas fa-map-marker-alt"></i> ${brecho.endereco}
                    </p>
                </div>
                <div>
                    <a href="${brecho.link}" target="_blank" class="btn btn-brecho">
                       Ver no mapa
                    </a>
                </div>
              </div>
            `;
    });
    brechosContainer.innerHTML = html;
  }
  renderizarBrechos();
});

fetch('https://api.countapi.xyz/hit/mariana4ads-revista/visitas')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('contador').textContent = data.value;
  });
