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
      <section className="min-h-screen min-w-full">


        {/* All Text above first white triangles */}


        <div className="px-4 sm:px-10">

          {/* Nav Menu */}

          <nav className="flex flex-col md:flex-row lg:w-9/12 lg:mx-auto lg:pt-12">
            <div className="text-white text-lg font-bold flex flex-col text-center pt-10 pb-4 sm:text-2xl  
            sm:py-10 md:pr-10 lg:text-3xl lg:pr-0">
              CollierTechnologies©</div>

            <div className="md:ml-auto">
              <ul className="flex text-white pt-6 pb-10 text-xs gap-3 sm:text-sm sm:py-10  md:gap-8 
               md:whitespace-nowrap md:text-base lg:text-lg lg:gap-6 xl:mr-16 xl:text-xl">
                <li>
                  <div>
                    <a className="cursor-pointer   text-lime-500" href="#">Home</a>
                    <Image className="mx-auto w-full" src={underline} />
                  </div></li>
                <li><a className="cursor-pointer " href="#services">Services</a></li>
                <li><a className="cursor-pointer " href="#HowItWorks">How It Works</a></li>
                <li><a className="cursor-pointer " href="#contact">Contact</a></li>
              </ul>

            </div>
          </nav>
        
        {/* Main Site Image & Title */}

        <div className="flex flex-row bg-[url('.//public/charcuteriesnack70.JPG')] 
          w-auto h-52 sm:h-72 bg-cover md:w-3/4 md:mx-auto lg:h-auto">

            <div className="flex flex-col">
              <h2 className="text-lime-500 w-48 font-semibold mx-8 my-4 text-lg sm:text-2xl lg:my-8 
              lg:text-3xl">WELCOME TO</h2>
              <h1 className="text-white text-3xl sm:text-5xl mx-8 font-semibold lg:text-6xl"> Your Small Business</h1>
              <p className="text-white text-sm sm:text-lg m-8 font-semibold lg:text-2xl">Custom Tailored Website</p>
            </div>

          <div className= "invisible sm:visible self-center mx-4 lg:w-48 xl:ml-auto ">
            <Image className="h-64 w-36" src={katakana} />
          </div>

        </div>


        {/* Customized */}


        <div className="flex flex-col mx-8 -mb-4 sm:mb-10 sm:mt-16 md:mt-20 md:-mb-20 lg:-mb-36 lg:mt-48 xl:-mb-48">
          <div className="text-lime-400 font-semibold text-2xl sm:text-3xl text-center mt-24">CUSTOMIZED</div>
          <div className="text-white font-semibold  sm:mt-4 sm:w-5/6 sm:mx-auto text-3xl sm:text-4xl text-center 
          mt-4 sm:mt-10 md:w-3/6 md:-mb-8 lg:w-2/6 2xl:-mb-16 2xl:text-5xl">
            Web Development Services</div>
        </div>

        </div>
        

      {/* First White Triangles */}


        <div className="flex flex-row sm:-mt-20 md:mt-2">
          <Image className="resize w-3/6" src={LeftV} />
          <Image className="resize w-3/6" src={RightV} />
        </div>


      {/* Experience Section */}


        <div className="flex flex-col mx-8 -mt-2 sm:-mt-12 md:-mt-24  lg:-mt-40 lg:mb-36 xl:-mt-48 2xl:-mt-64">
          <div className="text-lime-400 font-semibold text-2xl sm:text-3xl text-center">EXPERIENCE</div>
          <div className="text-white font-semibold text-3xl sm:text-4xl text-center mt-4 sm:mt-10 sm:w-4/6 sm:mx-auto 
          md:w-5/12 md:mx-auto md:mb-10 2xl:text-5xl">Serving for More Than 15 Years</div>
          <div className="text-white text-center text-sm font-light leading-6 my-6 sm:mb-12 md:mt-auto 
          lg:w-9/12 lg:mx-auto lg:text-base lg:leading-7 xl:leading-8 xl:w-7/12 xl:mt-10 2xl:mt-2">
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


      <div className="h-24 sm:h-44 md:h-96 bg-white"></div>


    {/* Current Offering Div */}


      <div id="services" className="flex flex-col w-5/6 m-auto mb-12 md:w-2/4 md:mx-auto lg:my-20 lg:w-2/5 ">
        <h2 className="text-white font-semibold mt-20 text-3xl sm:text-5xl text-center lg:text-5xl 2xl:text-6xl">
          Current Offering</h2>
        <Image className="p-10 md:h-80 md:w-96 md:m-auto lg:h-96 lg:w-auto" src= {croissant} />
        <h1 className="text-white p-4 sm:px-10 md:px-8 lg:px-10 2xl:pl-28 text-xl sm:text-3xl font-bold">
          Small Business Site</h1>

        <div className="flex mb-10 2xl:mb-20">
          <div className="text-white text-sm text-center py-2 mr-2 sm:p-4 sm:p-10 sm:text-base md:px-8 lg:px-10 2xl:pl-28 
          2xl:pr-0 whitespace-nowrap  flex-1">1-3 pages, 14 days delivery</div>
          <div className="text-white text-xl sm:text-3xl font-bold my-auto text-center w-2/6">$350</div>
        </div>
      </div>


    {/* 2nd White Divider Div */}


      <div className="h-24 sm:h-44 md:h-96 bg-white"></div>


    {/* How It Works Div */}


    <div id="HowItWorks" className="mb-10">
      <h1 className="text-white text-xl sm:text-4xl mx-8 mt-12 font-bold text-center p-10 lg:my-12 lg:text-5xl 
      2xl:mt-20"> How It Works</h1>

      <div className="flex flex-row bg-[url('.//public/ramen25.jpg')] 
      w-4/6 mx-auto rounded-md h-72 bg-cover mx-10 md:w-2/4 md:mx-auto lg:w-2/6 lg:rounded-2xl lg:mb-24">

        <div className="flex flex-col ">
          <h1 className="text-white text-center font-semibold mt-4 mx-1 sm:text-3xl sm:mx-8  sm:mt-8 lg:mx-2 
          lg:mt-4 "> 
            1. Fill Out Site Survey</h1>
          <p className="text-white text-justify text-sm m-4 leading-4 sm:leading-6 sm:m-8  lg:text-base lg:mt-6 lg:mb-0 
          lg:mx-6 lg:font-semibold 2xl:w-5/6 2xl:mx-auto">Start by filling out a quick survey tailored to understand your 
            small business website needs. Your responses will guide our developers in comprehending your requirements 
            better, ensuring we deliver exactly what you want for your business's digital presence.</p>
        </div>

      </div>

      <div className="m-10"></div>

      <div className="flex flex-row bg-[url('.//public/shrimptacos25.jpg')] 
        w-4/6 mx-auto rounded-md h-72 bg-cover mx-10 md:w-2/4 md:mx-auto lg:w-2/6 lg:rounded-2xl lg:mb-24">

          <div className="flex flex-col">
            <h1 className="text-white text-center font-semibold mt-4 sm:text-3xl mx-4 sm:mx-8 sm:mt-8"> 
              2. Prototype Build</h1>
            <p className="text-white text-justify text-sm m-4 leading-4 sm:leading-6 sm:m-8 lg:text-base lg:mx-6 
            lg:font-semibold 2xl:w-5/6 2xl:mx-auto ">Next we’ll use your 
            survey input to build your tailor-made website for you, and share it with you within 
            1 week. At that time you can review and submit any edits or revisions, which we’ll 
            incorporate.</p>
          </div>

      </div>

      <div className="m-10"></div>

      <div className="flex flex-row bg-[url('.//public/skilletbreakfast25.jpg')] 
        w-4/6 mx-auto rounded-md h-72 bg-cover mx-8 md:w-2/4 md:mx-auto lg:w-2/6 lg:rounded-2xl lg:mb-24">

          <div className="flex flex-col">
            <h1 className="text-white text-center sm:text-font-semibold mt-4 sm:text-3xl mx-4 sm:mx-8 lg:mx-0 sm:mt-8"> 
              3. Refine, Publish, Deliver</h1>
            <p className="text-white text-justify text-sm m-4 leading-4 sm:leading-6 sm:m-8 lg:text-base lg:mx-6 
            lg:font-semibold 2xl:w-5/6 2xl:mx-auto">We’ll spend 1 week 
            making sure we’ve captured all of your revisions, then finish and publish the site 
            online. Finally we’ll hand off everything to you, with the site ready to go.</p>
          </div>

      </div>
    </div>


    {/* About Us */}


    <div className="flex flex-col m-8 mb-0 md:w-3/6 md:mx-auto md:-mb-24 md:mt-40 md:w-4/6 lg:-mb-64 lg:mt-48 lg:w-3/6">
      <div className="text-lime-400 font-semibold text-2xl sm:text-3xl text-center mt-24">ABOUT US</div>
      <div className="text-white font-semibold text-3xl sm:text-4xl text-center mt-4 sm:mt-10 w-5/6 sm:w-4/6 
      mx-auto -mb-20 2xl:text-5xl 2xl:mb-0">
        We Build Beautiful Websites for You</div>
    </div>


    {/* Second White Triangles */}


    <div className="flex">
      <Image className=" flex-1 h-96 md:h-svh md:-mt-12 lg:mt-36" src={LowerV} />
    </div>


    {/* About Us Section - Background Experience */}

    <div className="flex flex-col text-white text-sm leading-7 text-justify p-10 mx-auto  mt-6 md:mt-0 xl:p-20 
    2xl:leading-8 2xl:text-lg">
      <div className="flex flex-col md:flex-row">
        <div className="my-4 md:m-4">CollierTech brings over a decade of expertise in software development, 
          systems administration, and network operations, finely tuned for small businesses. With a proven track 
          record of completing numerous projects in various programming languages and deployment automation tools, 
          we ensure efficient processes tailored to your needs. </div>
        <div className="my-4 md:m-4">Our satisfied clientele includes LiquidWeb, Doubleprime, Cadmium Yellow Design, 
          and Computational Biology Research Center. Each project showcases our dedication to delivering top-notch 
          solutions that align perfectly with our clients' goals. Trust CollierTech to bring precision, innovation, 
          and customer-centricity to your digital endeavors.</div>
      </div>


      <div className="text-center p-4 mt-4 md:mb-16 2xl:mt-12">
        <a className="text-lime-400 cursor-pointer text-lg font-semibold 2xl:text-2xl" 
        href="https://colliertech.org/~cjac/resume/cjac.html">
          View Resume here for more details</a>
      </div>

    </div>


    {/* Client Form Section */}


    <div id="contact" className="flex flex-row bg-[url('.//public/FormLinkBkgnd.svg')] w-auto h-96 bg-cover md:w-3/4 
    md:rounded-lg lg:rounded-2xl md:mx-auto lg:w-4/6">

      <div className="flex flex-col p-4 sm:p-8 md:m-auto lg:w-auto lg:flex-row lg:p-2 2xl:w-5/6">
        <div>
          <h2 className="text-white text-center text-xl font-semibold mx-4 my-2 sm:text-3xl sm:mx-8 mt-12  lg:mx-16">
            Fill Out Client Website Form Here</h2>
          <p className="text-white text-base text-justify mt-4 mx-8 sm:leading-8 sm:m-12 sm:mt-10 md:my-12 lg:px-12
           lg:text-lg">
            Click here to access our Website Request form, giving us details on what you’d like to see on your site 
            and how you’d like it to behave.</p>
        </div>
       <div className="m-auto lg:px-16">
        <a href="https://forms.gle/fNQzHquqMgUKgSg58">
        <button className="bg-lime-400 text-black rounded-2xl w-28 p-3 mx-auto whitespace-nowrap">
          Access Form</button>
        </a>
        
       </div>

      </div>


    </div>


    {/* Footer Section */}


    <div className="text-white  flex flex-col text-center py-10 md:mt-16 md:flex-row md:justify-center lg:pt-20">
      <div className="font-bold text-2xl mt-16 mb-6 md:mr-16 lg:my-auto lg:py-10">CollierTechnologies©</div>
      <div className="text-xl mb-6 md:mt-16 md:mr-16 lg:my-auto lg:py-10">cjac@colliertech.com</div>
      <div className="text-xl md:mt-16 lg:my-auto lg:py-10">+1 425 523 2637</div>
    </div>

      </section>
    </main>
  );
}
