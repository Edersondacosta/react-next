import Card from "@/componentes/Card";
import Footer from "@/componentes/Footer";
import Header from "@/componentes/Header";

export default function Main(){
  return(

<div className="flex flex-col h-screen bg-neutral-100"> {/* h-screen 100% tela*/}

        <div className="flex-1">
        <div className="">
          <Header/>
      </div>
      </div>

      <div className="flex-1">
        <div className="">
          <Card/>
      </div>
      </div>

      <div className="flex-1">
        <div className="">
          <Footer/>
      </div>
      </div>
      </div>

  )


}
