import Image from "next/image";
import LeftV from './/public/LeftV.svg'
import RightV from './/public/RightV.svg'
import underline from './/public/home-underline.png'
import katakana from './/public/Katakana.png'
import croissant from './/public/croissantsandwich.jpg'

export default function Home() {
  return (
    <main className="bg-black ">
      <section className="min-h-screen">
        <div className="px-10">
          <nav>
            <div className="text-white text-2xl font-bold flex flex-col text-center py-10">CollierTech©</div>

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
        
        <div className="flex flex-row bg-[url('.//public/charcuteriesnack70.JPG')] 
          w-auto h-72 bg-cover ">

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
          <div className="text-white font-semibold  text-4xl text-center mt-10">Web Development Services</div>
        </div>

        </div>
        
        <div className="flex flex-row">
          <Image className="resize w-3/6" src={LeftV} />
          <Image className="resize w-3/6" src={RightV} />
        </div>

        <div className="flex flex-col m-8">
          <div className="text-lime-400 font-semibold  text-3xl text-center">EXPERIENCE</div>
          <div className="text-white font-semibold  text-4xl text-center mt-10">Serving for More Than 15 Years</div>
          <div className="text-white text-center text-sm font-light leading-6 my-6">
            <p>Welcome to CollierTech, where 15 years of expertise converge to offer unmatched web development 
              and hosting solutions. From bespoke websites tailored to your needs to reliable hosting services 
              ensuring 24/7 accessibility, we're dedicated to empowering your online presence. Our seasoned team of 
              developers combines innovation with reliability to craft visually stunning websites that captivate 
              audiences and drive results. Trust CollierTech to be your partner in navigating the digital landscape, 
              delivering secure, fast, and scalable solutions that propel your business forward.</p>
          </div>
        </div>

      <div className="h-44 bg-white"></div>


      <div className="flex flex-col">
              <h2 className="text-white font-semibold mx-8 mt-20 text-5xl text-center">Current Offering</h2>
              <Image className="p-10" src= {croissant} />
              <p className="text-white m-8 font-semibold">Custom Tailored Website</p>
            </div>

      </section>
    </main>
  );
}