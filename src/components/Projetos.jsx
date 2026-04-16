function Projetos() {
  const projetos = [
    {
      nome: 'Cadastro de Clientes SAP',
      descricao: 'Sistema em ABAP com Fiori',
      link: '#',
    },
    {
      nome: 'Bot Telegram',
      descricao: 'Automação de equipes',
      link: '#',
    },
    {
      nome: 'Controle de Estoque',
      descricao: 'Flutter + Firebase',
      link: '#',
    },
  ];

  return (
    <section id='projetos'>
      <h2>Meus Projetos</h2>

      <div className='lista-projetos'>
        {projetos.map((proj, index) => (
          <div className='card' key={index}>
            <h3>{proj.nome}</h3>
            <p>{proj.descricao}</p>
            <a href={proj.link}>Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
