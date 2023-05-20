import { useRef, useState } from 'react'
import pic2 from '../../asset/banner1.jpeg'
import w1 from '../../asset/banner2.jpeg'
import W2 from '../../asset/w1.jpeg'
import './index.scss'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

 const Contact=(props)=>{

  const formRef= useRef()
  const [formParams,setFormParams]=useState({})
    return (
      <div className='landing'>
        

        <div className="banner">
          <div className="write-up">
            <h2>BLOG </h2>
            <p > Read up some information</p>
            <button onClick={() => props.open(true)}>Schedule an appointment</button>
          </div>
          <img src={require('../../asset/american-public-power-association-XGAZzyLzn18-unsplash.jpg')} alt="" />

          <div className="statistics">

            <div className="con">
              <a href="https://instagram.com/yourenergyguy?igshid=YmMyMTA2M2Y=">
                <h1>
                  <FaInstagram />  Instagram
                </h1>
              </a>

            </div>
            <div className="con">
              <a href="https://www.facebook.com/yourenergyguy1?mibextid=LQQJ4d">
                <h1>
                  <FaFacebook />  Facebook
                </h1>
              </a>

            </div>
          </div>
        </div>
      <div id="services">
          <div  className="blog_p">
          <h3>Solar Panels for Home</h3>

          <p>
            Photovoltaic panels have become increasingly more affordable over the years and many homeowners are looking to reduce energy costs by setting up solar panels for energy generation.
<br />
            With thousands of fossil fuel consuming power plants around the world, our energy grid still heavily relies on coal, oil and natural gas. Each of these grid-powered alternatives are awful for the environment. And due to the inefficient and outdated grid system built and poorly maintained by utilities around the county, our energy costs are skyrocketing.
<br />
            Generating your own solar power is one way to deal with this. <b> Once you install solar panels, you'll see your electricity costs fall.</b> Add more in-home appliance electrification (stoves, heat pumps, etc.) and while your electricity usage increases overall, you'll still likely be paying much less than your old electricity and gas bills. <b> That's because you'll be producing much of the energy needed to power your home yourself! </b>Of course, you still may find that you're purchasing excess electricity from your local electricity if your in-home solar system isn't big enough to meet all your energy needs, but that's normal.

   <br />         An on-roof system reduces the needs of the grid and gives you the ability to keep those lights on in case of rolling black-outs. You'll be the envy of all your neighbors!

            Let's get right into the nitty-gritty of solar energy and solar panel installation.
          </p>
        </div>
            <div className="img">
              <img src={pic2} alt="" />
            </div>
      </div>  
        <div  className="blog_p">
            <h3 >  The Costs of Solar Power Systems for your Home</h3>
              ‍

              <p>  Solar energy is considered 'capital intensive' meaning that it can be strenuous on your finances.<b> The bulk of the solar panels' cost comes from the solar module, the largest expense. </b> On top of the solar module, here's what other equipment you'll need to make the solar panel system work:
                </p>
              ‍

             <p> 
              <ul> <li><b> Inverter</b> (most household appliances use the alternating current which the solar panels themselves do not produce as they produce a direct current. The inverter is needed to convert the direct current into the alternating current).
            </li> <li><b> Net metering equipment</b> (for seeing how much power your solar energy system is producing).
              </li> <li><b> Cables</b>
             </li><li><b>Wiring</b> 
            </li><li> <b>Housing component</b> 
            </li><li> <b> Optional Battery storage system</b> (battery storage for excess power is expensive and unnecessary if the extra power is fed back into the grid)</li></ul>
              ‍

              You'll also need to factor in labor costs and maintenance costs. Usually, there isn't much work to be done to maintain the proper functioning of a solar installation, but it still needs to be done. For starters, the solar panels should be cleaned periodically. Inverters (and batteries if you've chosen to get them too) need to be replaced every couple of years. As you continue your research, be sure to ask installers and contractors how they can help with the servicing.

              All of this shows us that purchasing solar panels and the necessary equipment, installing solar panels, and maintaining them can cost a lot of money. There are various solar financing options you could get to help out with the costs.

              State and local incentives exist and cover solar energy systems but they change on the regular. It's also worth noting that the US government offers a substantial solar investment tax credit.
</p>


   
        </div>
        <div id="services">
          <div className="img">
            <img src={require('../../asset/bill-mead-wmaP3Tl80ww-unsplash.jpg')} alt="" />
          </div> <div className="blog_p">
            <h3> The Benefits of Using a Solar Energy System</h3>
            ‍
            <p>
              There are numerous benefits that come with using solar energy including a lowered electricity bill, less impact on the environment, and financial incentives from the relevant authorities. <b> However, the efficiency of said benefits depends on a wide variety of factors.</b>
              <br />
              First, you should know that <b> when it comes to solar energy, the produced amount depends on where you are in the world. </b> That's because the Earth rotates around the sun on a tilted axis. <b> Higher latitudes – areas farthest from the equator – will yield lower levels of production. </b>You can check solar irradiation levels by checking out the website of the National Renewable Energy Laboratory (NREL). They produce maps that show solar irradiation levels in the US.
              <br />
              <b>  You also need to consider how many solar panels are necessary to power your home effectively.</b> You'll need to be mindful of the panels' orientation relative to the Sun. Rooftop solar panels are most effective when pointed towards the South with no obstructions in front of them, but your solar installers will be a great resource for you as you map your system.
              <br />
              Although you should, in theory, have to pay less in bills, it all depends on the utility company and how they're pricing your electricity usage. <b> It's best to check with them because there are a few key factors that are used to determine the bills.
              </b> </p>
          </div>
        </div> <div style={{alignItems:'flex-start'}} id="services">
          <div className="blog_p">
           <h3> The Pros of Home Solar Panels</h3>
            ‍

          <p> 
           <h5> Green energy with a lower carbon footprint</h5>
            ‍

            There are various forms of renewable energy but solar is the only one that most homeowners can afford and set up themselves. Solar panels work by converting gathered photons into a direct electric current and, as such, are fully renewable.

            On top of that, solar power is completely green, meaning it doesn't negatively impact the environment in any way. Its carbon footprint is incredibly low (around 20 times smaller than typical electricity consumption) and is arguably the best alternative to traditional energy production.

            ‍

          <h5>  Possibility of receiving tax breaks</h5>
            ‍

            Not only will your electricity bills be lower than without solar energy, but you'll most likely receive important tax breaks for using it. You could also inquire about solar loans and the solar tax credit which further lower the costs associated with solar energy.

            There's currently a pretty strong drive towards switching from non-renewables to renewables and that includes solar power. It might be the perfect time for you to invest in solar energy and take out a solar loan in case you can't cover the associated electricity costs at the beginning of solar energy usage.

            ‍

          <h5>  Net-metering lets you sell excess solar energy</h5>
            ‍

            Whether or not you think you'll produce excess solar power, investing in net metering is a smart idea. The reason is simple - with net metering, you'll eventually be able to tell if you're producing more electricity than you can use.

            And, if that happens, you'll be able to sell that energy to a local utility company or other entities. You can even receive a tax credit for your contribution to the grid. Net metering is permitted on a state-by-state basis, so be mindful of your local politics.

            ‍

          <h5>  Lower electric bills</h5>
            ‍

            Now, this isn't always the case. It all depends on the size of your system and how much of your house you electrify, but generating your own electric power provides you all the tools to be self reliance when it comes to electricity. In most cases, your energy costs will drop over the intermediate- to long-term.
            </p>
            ‍
          </div> <div className="blog_p">
           <h3> The Cons of Home Solar Panels</h3>
            ‍
          <p>
           <h5> Maintenance and installation costs are fairly high</h5>
            ‍

            Although the cost of a solar installation has gone down in recent years, it is still considered high, especially when looking at maintenance and the complete process. Most of the solar panel system cost comes during the purchase of equipment. Many solar financiers also charge a significant upfront fee known as a 'Dealer Fee'.

            Following that, you'll need to pay someone to install the solar panel system for you, preferably someone with a lot of experience installing and preparing solar systems. And then, there are recurring maintenance costs.

            The cost of operation predominantly depends on how many panels you've chosen to install. Also, keep in mind that a power outage could severely damage the systems installed in your home, though this is a rare occurrence.

            ‍

          <h5>  Certain parts need replacing every few years although you have a system warranty for between 20-30 years.</h5>
            ‍

            Not all solar panels are the same. Cheaper ones are more affordable but generally don't last as long as the more expensive versions. Additionally, most parts of a solar system need to be replaced after a few years of constant use which causes additional strain on a person's finances.

            The home solar system needs constant care to work at an efficient level. Failure to do so will not only prevent it from generating electricity in an effective manner, but it'll also turn out as an investment failure. Be mindful of this before you make the decision to start installing solar panels.

            ‍
            </p>

            ‍

            ‍
          </div>
        </div>
       
      

        <div className="work">
          <div className="img">
            <img src={w1} alt="" />
          </div>
          <div className="write">
            <h3>“YourEnergyGuy” – The Solar Energy Solutions Expert!</h3>
            Industry: Entertainment

            ~As the world shifts focus to more sustainable and renewable energy “YourEnergyGuy” (Augustus Ajaonu), puts the focus on Solar and the benefits that accompany it!


          </div>
        </div>
        {/* <div className="work"> 
             
              <div className="write">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure delectus vero veritatis similique quas officiis fuga praesentium, soluta dolorem. Cupiditate non aliquid voluptatem eos nulla id necessitatibus exercitationem facilis quas Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam error nostrum, similique ipsa officia, ducimus architecto eos, quod mollitia sequi cumque fugiat labore iste repudiandae nihil quia odio corporis est.
              </div>
           <div className="img">
                  <img src={W3} alt="" />
              </div>
          </div>  */}

       

      </div>
    )
}
export default Contact