import Avatar from "../../components/Globais/Avatar";
import MenuList from "../../components/Globais/MenuList";
import Header from "../../components/Header/Header";

function Conhecimentos() {

  document.title = "Lele's Repairs - Conhecimentos";

  return (
    <Header>
      <nav className="h-[900px] px-6 pt-6 pb-8 bg-color_2 rounded-[30px] border-2 border-color_6 flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-[402px] flex-col justify-start items-start gap-[52px] flex">
          <Avatar src={'/user-logged.png'} name={'Pedro Henrique Vasco Antonieti'} email={'rm556253@fiap.com.br'} />
          <div className="h-[300px] flex-col justify-start items-start gap-6 inline-flex">
            <MenuList icon={'bg-icon-robot'} select={false} to={'/assistentes'} value="Assistentes" />
            <MenuList icon={'bg-icon-car'} select={false} to={'/meus-carros'} value="Meus Carros" />
            <MenuList icon={'bg-icon-conhecimento'} select={true} to={'/conhecimentos'} value="Conhecimentos" />
            <MenuList icon={'bg-icon-info'} select={false} to={'/sobre'} value="Sobre" />
          </div>
        </div>
        <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
          <MenuList icon={'bg-icon-logout'} select={false} to={'/'} value="Sair" />
        </div>
      </nav>

    </Header>
  );
}

export default Conhecimentos;