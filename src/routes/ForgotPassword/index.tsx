
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
                    </div>
                </section>
            </main>
        </Header>
    );
}

export default ForgotPassword;