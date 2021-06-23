// inspo from : https://medium.com/swlh/making-a-resume-in-html-or-react-bd1781abcdef
import Icon from "react-hero-icon";
import logo from './logo.svg';
import './App.css';

function App() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const resumeOnlyMode = params.get('resumeonly');
  return (
    <div class="items-center mx-auto ">
   {!resumeOnlyMode && (
    <div id="other-body-stuff">
    </div>
   )}
   <div id="pdf" class="mx-auto ">
     <div class="h-5 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"/>
     <div class="m-5">
       <div class="py-2 text-center font-extrabold uppercase text-purple-600 text-3xl tracking-widest"> Victoria Williamson</div>
    
           {/* Location Contact Information*/}
				
        <div class="grid grid-cols-6">
          <div class="col-span-4">
       
		
          <div class="section">
        <div class="flex flex-row mt-2">
					<div class="h-8 w-2 bg-purple-300"/><text class="ml-2 font-extrabold uppercase  text-purple-600 text-"> EXPERIENCE </text>
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title text-sm ">
                <text class="font-bold text-sm">
                Undergraduate Research Assistant
                  </text>
                  <br/>
                  <text>
                VARLab
                  </text></div>
              
							<div class="item-date text-xs">Mar '20 - Current</div>
						</div>
						<ul class="list-disc text-xs">
							<li> Developed a web application that displays data and allows user interaction to modify data.</li>
							<li> Developed a mobile application that displays and data and allows user interaction to modify data</li>
							<li> Added simple user interface to efficiently allow quick access to application features </li>
							<li> Worked on integrating lidar data into the Unreal Engine 4 </li>
						</ul>
					</div>
          <div class="item">
						<div class="item-header">
							<div class="item-title text-sm ">
                <text class="font-bold">
               Lead Hackathon Organizer
                  </text>
                  <br/>
                  <text>
                KnightHacks
                  </text></div>
              
							<div class="item-date text-xs">Nov '20- Current</div>
						</div>
						<ul class="list-disc text-xs">
							<li> Planed and developed a 36-hour hackathon that typically hosts 600+ students. </li>
							<li> Developed sprint tasks and used agile planning to lead a team of 20+ directors to execute an event.</li>
							<li> Established ongoing communication and connections with registered student organizations on campus. </li>
						</ul>
					</div>
          	<div class="item">
						<div class="item-header">
							<div class="item-title text-sm">
                <text class="font-bold">
               Buildings and Systems Engineering Intern
                  </text>
                  <br/>
                  <text>
                UPS
                  </text></div>
              
							<div class="item-date text-xs">Jun '21 - Aug '21</div>
						</div>
						<ul class="list-disc text-xs">
							<li> Participated in a project-based assignment within the UPS Development and Support Center (DSC). The learning experiences include assisting in the implementation of Building and Systems Engineering methodologies and Application Development - developing global applications and data analysis.</li>
							<li> Worked with the Linux team on developing building and system engineering tools for managing Linux. Optimization of job setups, identifying and helping solve operation performance problems, measuring, and reporting processes and results.</li>
						</ul>
					</div>
				</div>
				<div class="section">
        <div class="flex flex-row mt-2">
					<div class="h-8 w-2 bg-purple-300"/><text class="ml-2 font-extrabold uppercase  text-purple-600 text-"> projects </text>
					</div>
					<div class="item">
						<div class="item-header">
							<div class="item-title text-sm ">
                <text class="font-bold text-sm">
                Portfolio Website
                  </text>
                  <br/>
                  <text>
                Personal
                  </text></div>
              
							<div class="item-date text-xs">Mar '20 - Current</div>
						</div>
						<ul class="list-disc text-xs">
							<li> Created and designed a custom web application using React JS, Tailwind CSS, and React BootStrap. </li>
							<li> Used Tailwind CSS and React BootStrap components to design and develop the front-end portion of the website to be responsive and interactive. </li>
              <li> Used React JS to create reusable components to display selected project information.  </li>
						</ul>
					</div>
          <div class="item">
						<div class="item-header">
							<div class="item-title text-sm ">
                <text class="font-bold text-sm">
                Convolutional Neural Network
                  </text>
                  <br/>
                  <text>
                [CAP 4611] Algorithms for Machine Learning 
                  </text></div>
              
							<div class="item-date text-xs">April '20 - May '20 </div>
						</div>
						<ul class="list-disc text-xs">
							<li>Created a model that determined whether someone had COVID-19, a virus, bacterial disease, or is not sick from an X-Ray..</li>
							<li>Used tensor flow to create a custom Convolutional Neural Network ( CNN ).</li>
              <li> Analyzed plots of the training and validation accuracy results to identify the over-fitting and under-fitting of the model. </li>
              <li> Used an ImageDataGenerator to produce additional data to help create a more accurate model </li>
						</ul>
					</div>

          <div class="item">
						<div class="item-header">
							<div class="item-title text-sm ">
                <text class="font-bold text-sm">
                Hackathons
                  </text>
                  <br/>
                  <text>
                  VandyHacks, HackGT, ShellHacks
                  </text></div>
              
							<div class="item-date text-xs">Mar '20 - Current</div>
						</div>
						<ul class="list-disc text-xs">
							<li>Imported the project prototype from Figma and Adobe XD and create a simple user experience </li>
							<li>Used Google Cloud API to create authentication and connect the application to a database </li>
              <li> Integrated Google firebase firestore to sync data</li>
              <li> Wrote functions that allow the application to make  REST API Calls to the application </li>
						</ul>
					</div>
				</div>
          </div>
          
          
          <div class="col-span-2 px-2">
          <div class="flex flex-row mt-2 pb-2">
<div class="h-8 w-2 bg-purple-300"/><text class="ml-2 font-extrabold text-lg uppercase text-purple-600"> Contact </text>
					</div>
          <div class="ml-3">

         
          <div class="grid grid-cols-3 gap-4 items-center mx-auto ">
       <div class="">
{/* Left Contact Information*/}
<div>
  
            {/* Email Contact Information*/}
						<div class="flex flex-row mx-auto ">
						<a href="mailto:vicwill01@knights.ucf.edu"> 
            <div class="flex text-neutral-500 text-purple-600 flex-row hover:text-pink-500">
              <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg> 
              <text class="ml-2 text-xs font-semibold"> vicwill01@knights.ucf.edu </text>
              </div></a>
						</div>
					</div>
          </div>
        </div>
        <div class="mt-1">
						<a href="https://me.VictoriaWilliamson.com">
            <div class="flex flex-row text-purple-600 hover:text-pink-500">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg>
              <text class="ml-2 text-xs font-semibold">me.VictoriaWilliamson.com </text>
              </div>
              </a>
						</div>
       <div > <div>
            {/* Email Contact Information*/}
						<div class="flex flex-row mt-1">
            <a href="https://Github.com/Victoria-Williamson"> 
            <div class="flex flex-row text-purple-600 hover:text-pink-500">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <text class="ml-2 text-xs font-semibold"> Victoria-Williamson </text>
              </div></a>
						</div>
            {/* Location Contact Information*/}
            <div>
						<a href="https://linkedin.com/in/victoria-n-williamson"> 
            <div class="flex flex-row mt-1 text-purple-600 hover:text-pink-500">
            <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>  <text class="ml-2 text-xs font-semibold"> Victoria Williamson </text>
            </div>
            </a>
            </div>
            </div>
            </div>
            </div>
					<div class="tex-xl uppercase font-bold text-purple-600">
          <div class="flex flex-row mt-2 py-4">
					<div class="h-8 w-2 bg-purple-300"/><text class="ml-2 font-extrabold text-lg">Education </text>
					</div>
          </div>
          <div>
          <h2 className="font-semibold text-sm">Computer Science B.S & Statistics B.S </h2>
          <ul class="list-disc text-xs ml-5">
							<li> Minor in Mathematics</li>
							<li> 3.4 Computer Science Courses GPA</li>
							<li> 3.16 Cumulative GPA </li>
							<li> Involved in NACME, ACM-W and KnightHacks</li>
						</ul>

          <h3 className="item-sub text-sm"> University of Central Florida</h3>
         
          {/* <ul class="text-xs list-inside list-disc">
            <li> 3.1 GPA </li>
            <li> Coursework : Algorithms for Machine Learning, Artificail Intelligence, Robot Vision, and Matrix and Linear Algebra </li>
          </ul> */}
          <p className="text-sm text-neutral-500 font-light">
            Expected : May 2023
          </p>
          </div>
          <div class="tex-xl uppercase font-bold text-purple-600">
          <div class="flex flex-row mt-2 py-4">
					<div class="h-8 w-2 bg-purple-300"/><text class="ml-2 font-extrabold text-lg"> Skills </text>
					</div>
          </div>
          <div className="relative pt-1">
          <div className="relative pt-1">
            <div class="mb-2">
            <text class="font-bold text-sm mb-2"> Programming Languages</text>
            </div>
          
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
        Java
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-purple-600">
        90%
      </span>
    </div>
  </div>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
    <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
  </div>
</div>
<div className="relative pt-1">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
        JavaScript
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-purple-600">
        70%
      </span>
    </div>
  </div>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
    <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
  </div>
</div>
<div className="relative pt-1">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
        Python
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-purple-600">
        50%
      </span>
    </div>
  </div>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
    <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
  </div>
</div>
<div className="relative pt-1">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
        CSS
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-purple-600">
        80%
      </span>
    </div>
  </div>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
  </div>
</div>
  <div className="relative pt-1">
  <div className="flex mb-2 items-center justify-between">
    <div>
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
        HTML
      </span>
    </div>
    <div className="text-right">
      <span className="text-xs font-semibold inline-block text-purple-600">
        70%
      </span>
    </div>
  </div>
  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
    <div style={{ width: "70%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
  </div>
</div>
<div class="mb-2">
            <text class="font-bold text-sm mb-2"> Libraries and Frameworks </text>
            </div>
            <ul class="list-disc text-xs ml-5">
              <li> React </li>
              <li> React-Native </li>
              <li> Tensorflow </li>
              <li> Skit-Learn </li>
              <li> React Bootstrap </li>
              <li> Tailwind CSS  </li>
              </ul>


  </div>
</div>

         
        </div>
          
        </div>
				</div>
   </div>
  
  );
}

export default App;
