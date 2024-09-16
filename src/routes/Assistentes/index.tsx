import Avatar from "../../components/Globais/Avatar";
import Input from "../../components/Globais/Input";
import MenuList from "../../components/Globais/MenuList";
import Header from "../../components/Header/Header";

function Assistentes() {
    
    document.title = "Lele's Repairs - Assistentes";
    
    return (
      <Header>
        <nav className="h-[900px] px-6 pt-6 pb-8 bg-color_2 rounded-[30px] border-2 border-color_6 flex-col justify-between items-start inline-flex">
          <div className="self-stretch h-[402px] flex-col justify-start items-start gap-[52px] flex">
            <Avatar src={'/user-logged.png'} name={'Pedro Henrique Vasco Antonieti'} email={'rm556253@fiap.com.br'}/>
            <div className="h-[300px] flex-col justify-start items-start gap-6 inline-flex">
              <MenuList icon={'bg-icon-robot'} select={true} to={'/assistentes'} value="Assistentes"/>
              <MenuList icon={'bg-icon-car'} select={false} to={'/meus-carros'} value="Meus Carros"/>
              <MenuList icon={'bg-icon-conhecimento'} select={false} to={'/conhecimentos'} value="Conhecimentos"/>
              <MenuList icon={'bg-icon-info'} select={false} to={'/sobre'} value="Sobre"/>
            </div>
          </div>
          <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
            <MenuList icon={'bg-icon-logout'} select={false} to={'/'} value="Sair"/>
          </div>
        </nav>
        <main className="w-[1084px] h-[900px] bg-color_2 rounded-[30px] border-2 border-color_6 flex flex-row pt-6 pb-6 px-6 gap-[25px]">
          <section className="relative flex-col justify-center items-start inline-flex gap-[25px]">
            <div className="w-[340px] justify-center items-center inline-flex">
              <h1 className="pt-8 px-20 text-center text-color_11 text-[32px] font-bold leading-10">Assistentes</h1>
            </div>
            <form className="flex-col justify-center items-start gap-2.5 inline-flex">
              <Input icon="bg-icon-search" classname={'w-[340px] h-14 p-4 pl-12 font-normal text-sm box-border rounded-2xl border-2 border-color_7 bg-color_3 focus:outline-color_9 drop-shadow-row placeholder-color_9 text-color_9'} type="text" placeholder="Buscar..." name={"txtBuscar"} id={'buscar'} required={false}/>
            </form>
          </section>
          <section className="w-[667px] h-[848px] flex-col items-start gap-[25px] inline-flex">
          </section>
        </main>
      </Header>
    );
}

export default Assistentes;