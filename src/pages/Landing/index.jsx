import React, { useEffect, useState } from 'react'
import Logo from './yeg.png'
import './index.scss'
import Img from '../../asset/banner1.jpeg'
import Img2 from '../../asset/banner2.jpeg'
import W1 from '../../asset/w1.jpeg'
import W2 from '../../asset/w2.jpeg'
import W3 from '../../asset/w3.jpeg'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {PopupModal} from 'react-calendly'

export default function Landing() {
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
 
//  console.log(PopupWidget);
  useEffect(()=>{setTimeout(()=>setShow(true),15000)},[])
  return (
    <div className='landing'>
          {
            show &&<Pop click={()=>setShow(false)}/>
          }
          <PopupModal 
              url="https://calendly.com/thecollectives2022/"
              /*
               * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
               * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
               */
              rootElement={document.getElementById("root")}
              text="Click here to schedule!"
              textColor="#ffffff"
              color="#00a2ff"
          open={open}
          onModalClose={()=>setOpen(false)}
          />
        <div className="head">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links">
                  <a href="#about">About Us</a>
                  <a href="#contact">Contact Us</a>
                  <a href="#services">Our Services</a>
                  <button onClick={() => setOpen(true)}>Book an Appointment</button>
            </div>
        </div>
        <div className="banner">
             <div className="write-up">
                  <h2>Schedule free quotation with us and get our promo services </h2>
                  <p> own your power and turn your energy into cash flowing assets. Zero money downn</p>
                  <button onClick={() => setOpen(true)}>Schedule an appointment</button>
             </div>
             <img src={Img2} alt="" />
            
             <div className="statistics">
                 
                  <div className="con">
                      <a href="https://instagram.com/yourenergyguy?igshid=YmMyMTA2M2Y=">
                          <h1>
                            <FaInstagram/>  Instagram
                          </h1>
                      </a>
                     
                  </div> 
                  <div className="con">
                      <a href="https://www.facebook.com/yourenergyguy1?mibextid=LQQJ4d">
                          <h1>
                            <FaFacebook/>  Facebook
                          </h1>
                      </a>

                  </div> 
             </div>
        </div>

        <div id="services">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="write-up">
                <h2>
                      Solar Advantage
                </h2>
                  <div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2>County incentives: you get cash incentives from your county ranging from ($2,000 to $5,000)</h2>
                          
                      </div>
                  </div> <div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2>State incentives: you get cash incentives from depending on your state .</h2>
                          
                      </div>
                  </div> <div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2>Federal incentives: you get paid 30% of your system worth depending back as cash from the federal government  </h2>

                      </div>
                  </div>
                  <div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2>Sell excess energy: you get paid from the power companies by selling back unused energy</h2>

                      </div>
                  </div><div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2>Real estate benefits: It becomes a income bringing asset and increases the value of your property </h2>

                      </div>
                  </div><div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2>Roof protection: solar panels protect your roof from wear and tear while increasing the lifespan of your roof.  </h2>
                          
                      </div>
                  </div>
                  <div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2> Free 10 year warranty on roof protection </h2>

                      </div>
                  </div> 
                  <div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2> 10 year warranty on labor   </h2>

                      </div>
                  </div> 
                  <div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                          <h2> 25 years system warranty   </h2>
                         
                      </div>
                  </div>
                   <div className="serv">
                      <div className="icon">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12.6667L16.4 18.2667L14.2667 15.0667L10 19.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M19.333 12.6667H21.9997V15.3334" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.0003 29.3334H20.0003C26.667 29.3334 29.3337 26.6667 29.3337 20.0001V12.0001C29.3337 5.33341 26.667 2.66675 20.0003 2.66675H12.0003C5.33366 2.66675 2.66699 5.33341 2.66699 12.0001V20.0001C2.66699 26.6667 5.33366 29.3334 12.0003 29.3334Z" stroke="#10008B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>

                      </div>
                      <div className="note">
                        
                          <h2> 30 year performance warranty </h2>
                      </div>
                  </div>
            </div>
        </div>

        <div id="about">
            <div className="img">
                <img src={W2} alt="" />
            </div>
            <div className="write-up">
               
                <h1>
                     About Us
                </h1>
                <p>
                      We are a neighborhood, community and environmental friendly service that helps home owners go solar, we’ve installed in a 100+ home in over 5 states like Maryland, DC, Virginia, Houston Texas, Arizona, New Jersey and more
   </p>
                    <p>  We are a growing company that intends on serving your community and neighborhood to keep it green with a hands on approach like no other
                      Own your power and turn your energy into cash flowing assets. Zero money down
             </p>
            </div>
        </div>

       <div className="work">
              <div className="img">
                  <img src={W1} alt="" />
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

          <div id="contact">
            <h2>Contact Us</h2>
            <div>
              <div className="con">
                  <h2>
                      Tel
                  </h2>
                      <p>+1 (240) 681-9255</p>
              </div> <div className="con">
                  <h2>
                     Email
                  </h2>
                      <p>gosolar@yourenergyguy.com</p>
              </div> </div>
          </div>
        
          <div className="footer">
            <h2>Leave us a message</h2>
            <form action="">
                  <input type="text" placeholder='Full Name'/>
                  <input type="tel" placeholder='Phone Number' />
                  <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
                  <button>Send</button>
            </form>
          </div>
          <div className="builder">This Site was built by <a href="www.linkedin.com/in/onyedikachi-obi">Onyedikachi Obi</a></div>
    </div>
  )
}

const Pop=({click})=>{
    return(
        <div onClick={click} className='pop'>

            <form onClick={(e)=>e.stopPropagation()} action="">
                <h2>Let's Keep you updated</h2>
                <input placeholder='Name' />
                <input placeholder='Phone Number'/>
                <button>Send</button>
            </form>
        </div>
    )
}