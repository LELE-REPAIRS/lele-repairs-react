function MeusCarros() {

  document.title = "Lele's Repairs - Login";

  return (
    <Header>
      <nav className="h-[900px] px-6 pt-6 pb-8 bg-color_2 rounded-[30px] border-2 border-color_6 flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-[402px] flex-col justify-start items-start gap-[52px] flex">
          <Avatar src={'/user-logged.png'} name={'Pedro Henrique Vasco Antonieti'} email={'rm556253@fiap.com.br'} />
          <div className="h-[300px] flex-col justify-start items-start gap-6 inline-flex">
            <MenuList icon={'bg-icon-robot'} select={false} to={'/assistentes'} value="Assistentes" />
            <MenuList icon={'bg-icon-car'} select={true} to={'/meus-carros'} value="Meus Carros" />
            <MenuList icon={'bg-icon-conhecimento'} select={false} to={'/conhecimentos'} value="Conhecimentos" />
            <MenuList icon={'bg-icon-info'} select={false} to={'/sobre'} value="Sobre" />
          </div>
        </div>
        <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
          <MenuList icon={'bg-icon-logout'} select={false} to={'/'} value="Sair" />
        </div>
      </nav>

    </main>
      </Header >  
    );
}

export default MeusCarros;