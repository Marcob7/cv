import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Learning from "./components/Learning";
import Ervaring from "./components/Ervaring";
//import Projecten from "./components/Projecten";
import Work from "./components/Work";
import Card from "./components/Card";
import Example from "./components/example"; 
import ImageModal from "./components/ImageModal";
import Vrglasses from './Assets/Vrglasses.jpg';
import Glasses from './Assets/glasses.png';
import Article from './Assets/Article.png';
import smartphones from './Assets/smartphones.png';
import 'bootstrap/dist/css/bootstrap.min.css';



//temp place this here so it appears on the whole app.
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);



function App() {

  
  return ( 
    
    <>
   
    <Navbar /> 
    <Home />
    <About />
    
    <Learning 
       title="I like to learn new things"
       description="Keeping up to date with the latest tech is my go-to passion. I always keep an eye out for new frameworks or designs to keep up to date and work with the best technology."
       />

    <Ervaring />  

    <Example />

    <Work />
    {/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer"> 
  <div className="modal-box modal-middle w-11/12 max-w-7xl">
  <img alt="Servicedesk" src={Article}/>
    <div className="modal-action">
      <label htmlFor="my-modal-4" className="button">Close</label>
    </div>
  </div>
  </label>

    <Card
  imageSrc={Article}
  title="Card Title"
  subtitle="Card Subtitle"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet eros eget enim euismod tincidunt vel at lorem."
  bgCustomColor="flex flex-wrap md:flex-no-wrap items-start mx-2 md:mx-0 md:my-6 shadow-md rounded-md overflow-hidden max-h-[500px] my-8 bg-[#0807de]"

/>
<Card
  imageSrc={Glasses}
  title="Card Title"
  subtitle="Card Subtitle"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet eros eget enim euismod tincidunt vel at lorem."
  bgCustomColor="flex flex-wrap md:flex-no-wrap items-start mx-2 md:mx-0 md:my-6 shadow-md rounded-md overflow-hidden max-h-[500px] my-8 bg-[#4a5f74]"

/>
<Card
  imageSrc={Vrglasses}
  title="Card Title"
  subtitle="Card Subtitle"
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet eros eget enim euismod tincidunt vel at lorem."
  bgCustomColor="flex flex-wrap md:flex-no-wrap items-start mx-2 md:mx-0 md:my-6 shadow-md rounded-md overflow-hidden max-h-[500px] my-8 bg-[#0807de]"

/>


    <Contact />   
    
    </>
  ); 
}

export default App;
