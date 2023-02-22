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
import design from './Assets/design.png';
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

  <input type="checkbox" id="my-modal-5" className="modal-toggle" />
<label htmlFor="my-modal-5" className="modal cursor-pointer"> 
  <div className="modal-box modal-middle w-11/12 max-w-7xl">
  <img alt="Servicedesk" src={smartphones}/>
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="button">Close</label>
    </div>
  </div>
  </label>

  <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<label htmlFor="my-modal-6" className="modal cursor-pointer"> 
  <div className="modal-box modal-middle w-11/12 max-w-7xl">
  <img alt="Servicedesk" src={design}/>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="button">Close</label>
    </div>
  </div>
  </label>

    <Card
  imageSrc={Article}
  title="I build Things"
  subtitle="Web apps and portals"
  text="A fully functional portal for selfservice by finding your solution, contact with chat or callback, and a form to send your service requests."
  bgCustomColor="flex flex-wrap md:flex-no-wrap items-start mx-2 md:mx-0 md:my-6 shadow-md rounded-md overflow-hidden max-h-[500px] my-8 bg-[#0807de]"
  statTitle="Total Page Views"
  statValue="592.135"
  statDesc="Average visit: 3 min 18s"
  modal="my-modal-4"
/>
<Card
  imageSrc={Glasses}
  title="I connect things"
  subtitle="API and data handling"
  text="By using api's I made it possible to show data to the end-users in a nice looking way. Oh. And by creating forms that take requests and places them directly in a registration tool."
  bgCustomColor="flex flex-wrap md:flex-no-wrap items-start mx-2 md:mx-0 md:my-6 shadow-md rounded-md overflow-hidden max-h-[500px] my-8 bg-[#4a5f74]"
  statTitle="Unique visitors"
  statValue="218.419"
  statDesc="Forms and data handling "
  modal="my-modal-5"
/>
<Card
  imageSrc={Vrglasses}
  title="I design things"
  subtitle="For 'de Belastingdienst' I created styled components to use in their design library."
  text="With tools like Figma and Adobe Photoshop I create user friendly designs with the latest design trends in mind."
  bgCustomColor="flex flex-wrap md:flex-no-wrap items-start mx-2 md:mx-0 md:my-6 shadow-md rounded-md overflow-hidden max-h-[500px] my-8 bg-[#0807de]"
  statTitle="I follow the latest trends and updates"
  statValue="Unique designs"
  statDesc=""
  modal="my-modal-6"
/>


    <Contact />   
    
    </>
  ); 
}

export default App;
