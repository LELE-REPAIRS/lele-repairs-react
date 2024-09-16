
import { Link } from "react-router-dom";
import Logo from "../../components/Globais/Logo";
import Header from "../../components/Header/Header";

function ForgotPassword(){
    
    document.title = "Lele's Repairs - Esqueci a Senha ";
    
    return (
        <Header>
            <main className="flex flex-row justify-center items-center drop-shadow-row">
                <section className="w-[328px] h-full rounded-[30px] border-[2px] border-color_6 bg-color_2">
                    <div className="w-full h-full inline-flex flex-col items-center p-4 gap-4">
                        <Logo/>
                        <div className="w-72 h-full flex flex-col items-center gap-4">
                            <p className="font-normal leading-normal text-color_8 text-sm text-justify">Para recuperar a sua senha, informe seu endereço de e-mail que nós exibiremos a sua senha cadastrada!</p>
                            
                            <Link className="font-normal leading-normal text-xs underline text-color_9" to="/">Voltar {'>'}</Link>
                        </div>  
                    </div>
                </section>
            </main>
        </Header>
    );
}

export default ForgotPassword;