import Header from "../../components/Header/Header";

function Login() {
    
    document.title = "Lele's Repairs - Login";
    
    return (
      <Header>
        <main className="flex flex-row justify-center items-center">
          <section className="w-[328px] h-full rounded-[30px] border-[2px] border-color_6 bg-color_2">
            <div className="w-full h-full inline-flex flex-col items-center p-4 gap-4">
              <form className="w-72h-full flex flex-col items-center gap-3" action="/assistentes" method="get">
              </form>
            </div>
          </section>
        </main>
      </Header>
    );
}

export default Login;