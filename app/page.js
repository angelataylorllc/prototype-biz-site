import Image from "next/image";
import LeftV from './/public/LeftV.svg'
import RightV from './/public/RightV.svg'
import LowerV from './/public/lowerV.svg'
import underline from './/public/home-underline.png'
import katakana from './/public/Katakana.png'
import croissant from './/public/croissantsandwich30.jpg'


export default function Home() {
  return (
    <main className="bg-black ">
      <section className="min-h-screen">


        {/* All Text above first white triangles */}


        <div className="px-10">

          {/* Nav Menu */}

          <nav>
            <div className="text-white text-2xl font-bold flex flex-col text-center py-10">
              CollierTechnologies©</div>

            <div>
              <ul className="flex justify-evenly text-white py-10 lg:ml-20">
                <li>
                  <div className="flex flex-col">
                    <a className="cursor-pointer text-l lg:px-3 text-lime-500" href="#">Home</a>
                    <Image className="mx-0.5" src={underline} />
                  </div></li>
                <li><a className="cursor-pointer text-l lg:px-3" href="#">Services</a></li>
                <li><a className="cursor-pointer text-l lg:px-3" href="#">How It Works</a></li>
                <li><a className="cursor-pointer text-l lg:px-3 lg:pr-64" href="#">Contact</a></li>
              </ul>

            </div>
          </nav>
        
        {/* Main Site Image & Title */}

        <div className="flex flex-row bg-[url('.//public/charcuteriesnack70.JPG')] 
          w-auto h-72 bg-cover">

            <div className="flex flex-col">
              <h2 className="text-lime-500 font-semibold mx-8 my-4 text-2xl">WELCOME TO</h2>
              <h1 className="text-white text-5xl mx-8 font-semibold"> Your Small Business</h1>
              <p className="text-white m-8 font-semibold">Custom Tailored Website</p>
            </div>

          <div className= "self-center mx-4">
            <Image className="h-64 w-36" src={katakana} />
          </div>

        </div>

        <div className="flex flex-col m-8">
          <div className="text-lime-400 font-semibold  text-3xl text-center mt-24">CUSTOMIZED</div>
          <div className="text-white font-semibold  text-4xl text-center mt-10">
            Web Development Services</div>
        </div>

        </div>
        

      {/* First White Triangles */}


        <div className="flex flex-row">
          <Image className="resize w-3/6" src={LeftV} />
          <Image className="resize w-3/6" src={RightV} />
        </div>


      {/* Experience Section */}


        <div className="flex flex-col m-8">
          <div className="text-lime-400 font-semibold  text-3xl text-center">EXPERIENCE</div>
          <div className="text-white font-semibold  text-4xl text-center mt-10">
            Serving for More Than 15 Years</div>
          <div className="text-white text-center text-sm font-light leading-6 my-6">
            <p>Welcome to CollierTech, where 15 years of expertise converge to offer unmatched 
              web development and hosting solutions. From bespoke websites tailored to your needs 
              to reliable hosting services ensuring 24/7 accessibility, we're dedicated to empowering 
              your online presence. Our seasoned team of developers combines innovation with 
              reliability to craft visually stunning websites that captivate audiences and drive 
              results. Trust CollierTech to be your partner in navigating the digital landscape, 
              delivering secure, fast, and scalable solutions that propel your business forward.</p>
          </div>
        </div>


      {/* 1st White Divider Div */}


      <div className="h-44 bg-white"></div>


    {/* Current Offering Div */}


      <div className="flex flex-col">
        <h2 className="text-white font-semibold mt-20 text-5xl text-center">Current Offering</h2>
        <Image className="p-10" src= {croissant} />
        <h1 className="text-white px-10 text-3xl font-bold">Small Business Site</h1>

        <div className="flex mb-10">
          <div className="text-white text-base p-10 flex-1">1-3 pages, 14 days delivery</div>
          <div className="text-white text-3xl font-bold my-auto text-center flex-1">$350</div>
        </div>
      </div>


    {/* 2nd White Divider Div */}


      <div className="h-44 bg-white"></div>


    {/* How It Works Div */}


    <div className="mb-10">
      <h1 className="text-white text-4xl mx-8 font-bold text-center p-10"> How It Works</h1>

      <div className="flex flex-row bg-[url('.//public/ramengray40.jpg')] 
      w-auto h-72 bg-cover mx-10 ">

        <div className="flex flex-col">
          <h1 className="text-white text-3xl mx-8 mt-8 text-center font-semibold"> 
            1. Fill Out Site Survey</h1>
          <p className="text-white m-8 text-sm leading-6 text-justify">Start by filling out a quick 
            survey tailored to understand your small business website needs. Your responses will guide 
            our developers in comprehending your requirements better, ensuring we deliver exactly 
            what you want for your business's digital presence.</p>
        </div>

      </div>

      <div className="m-10"></div>

      <div className="flex flex-row bg-[url('.//public/shrimptacosgray40.jpg')] 
        w-auto h-72 bg-cover mx-10 ">

          <div className="flex flex-col">
            <h1 className="text-white text-3xl mx-8 mt-8 text-center font-semibold"> 
              2. Meet & Discuss </h1>
            <p className="text-white m-8 text-sm leading-6 text-justify">We’ll transform your survey 
              input into a mock website template, setting the stage for your digital journey. Next, we 
              schedule a 1:1 meeting to refine details before the build. Your feedback ensures we align 
              perfectly with your vision, crafting a website that exceeds expectations.</p>
          </div>

      </div>

      <div className="m-10"></div>

      <div className="flex flex-row bg-[url('.//public/skilletbreakfastgray40.jpg')] 
        w-auto h-72 bg-cover mx-10 ">

          <div className="flex flex-col">
            <h1 className="text-white text-3xl mx-8 mt-8 text-center font-semibold"> 
              3. Build, Refine, Deliver</h1>
            <p className="text-white m-8 text-sm leading-6 text-justify">Our developers start building 
            your website after our discussions. In just one week, we'll send a prototype for your review. 
            We're open to one round of revisions. After two weeks, your fully realized website is ready 
            for launch.</p>
          </div>

      </div>
    </div>
      
    <div className="flex flex-col m-8 mb-0">
      <div className="text-lime-400 font-semibold  text-3xl text-center mt-24">ABOUT US</div>
      <div className="text-white font-semibold  text-4xl text-center mt-10">
        We Build Beautiful Websites for You</div>
    </div>


    {/* Second White Triangles */}


    <div className="flex">
      <Image className="resize w-6/6 flex-1 h-96" src={LowerV} />
    </div>


    {/* About Us Section - Background Experience */}

    <div className="flex flex-col text-white text-sm leading-7 text-justify p-10 mt-6">
      <p>CollierTech brings over a decade of expertise in software development, systems administration, 
        and network operations, finely tuned for small businesses. With a proven track record of 
        completing numerous projects in various programming languages and deployment automation tools, 
        we ensure efficient processes tailored to your needs. </p>
      <p>Our satisfied clientele includes LiquidWeb, Doubleprime, Cadmium Yellow Design, and Computational 
        Biology Research Center. Each project showcases our dedication to delivering top-notch solutions 
        that align perfectly with our clients' goals. Trust CollierTech to bring precision, innovation, 
        and customer-centricity to your digital endeavors.</p>

      <div className="text-center p-4">
        <a className="text-white cursor-pointer text-lg font-semibold" href="#">View 
        Resume here for more details</a>
      </div>

    </div>


    {/* Client Form Section */}


    <div className="flex flex-row bg-[url('.//public/FormLinkBkgnd.svg')] w-auto h-96 bg-cover">

      <div className="flex flex-col p-10">
        <h2 className="text-white font-semibold mx-8 my-4 text-center text-3xl">Fill Out client
          Website Form Here</h2>
        <p className="text-white m-8 leading-8 text-base text-justify ">Click here to access our Website Request 
        form, giving us details on what you’d like to see on your site and how you’d like 
        it to behave.</p>
        <button className="bg-lime-400 rounded-2xl w-28 p-2 mx-auto whitespace-nowrap">Access Form</button>
      </div>


    </div>


    {/* Footer Section */}


    <div className="text-white  flex flex-col text-center py-10">
      <div className="font-bold text-2xl mt-16 mb-6">CollierTechnologies©</div>
      <div className="text-xl mb-6">cjac@colliertech.com</div>
      <div className="text-xl">+1 425 523 2637</div>
    </div>

      </section>
    </main>
  );
}

// 908e8e