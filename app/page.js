import About from "@/components/About";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Nav from "@/components/Nav";



export default function Home() {




                          
  
  






  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">



      <div>
        <Nav />
      </div>


        <div>
       

            <Main />



        </div>

        <div> 
          <About /> 
        </div>


        <div>
          <Footer /> 
        </div>
         
        
      
    </main>
  )
}
