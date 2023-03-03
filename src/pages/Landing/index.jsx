import React from 'react'
import Logo from './yeg.png'
import './index.scss'
import Img from '../../asset/banner1.jpeg'
import Img2 from '../../asset/banner2.jpeg'
import W1 from '../../asset/w1.jpeg'
import W2 from '../../asset/w2.jpeg'
import W3 from '../../asset/w3.jpeg'


export default function Landing() {
  return (
    <div className='landing'>
        <div className="head">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links">
                  <a href="#about">About Us</a>
                  <a href="#contact">Contact Us</a>
                  <a href="#services">Our Services</a>
                 <button>Book an Appointment</button>
            </div>
        </div>
        <div className="banner">
             <img src={Img2} alt="" />
             <div className="write-up">
                <h2>Lorem, ipsum dolor. Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, odio!, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse alias voluptatibus delectus. Adipisci voluptate fuga iure necessitatibus illo sequi ex!</p>
                   <button>Get Started</button>
             </div>
             <div className="statistics">
                  <div><h1>20k+</h1>  lorem</div>
                  <div> <h1>20k+</h1> ipsum</div>
                  <div><h1>20k+</h1> dolor</div>
             </div>
        </div>

        <div id="services">
            <div className="img">
                <img src={Img} alt="" />
            </div>
            <div className="write-up">
                <h2>
                    Your Power Guy Services
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
                          <h2>Lorem, ipsum dolor.</h2>
                          <p>
                              Lorem  magnam ratione vero, nulla quod. Officia voluptatem sunt autem consequatur nemo corporis veritatis esse assumenda ex ducimus dignissimos perspiciatis molestias porro maiores eveniet sint eaque illum reiciendis quae, ut, aut molestiae debitis totam. Mollitia, laudantium?
                          </p>
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
                          <h2>Lorem, ipsum dolor.</h2>
                          <p>
                              Lorem  magnam ratione vero, nulla quod. Officia voluptatem sunt autem consequatur nemo corporis veritatis esse assumenda ex ducimus dignissimos perspiciatis molestias porro maiores eveniet sint eaque illum reiciendis quae, ut, aut molestiae debitis totam. Mollitia, laudantium?
                          </p>
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
                          <h2>Lorem, ipsum dolor.</h2>
                          <p>
                              Lorem  magnam ratione vero, nulla quod. Officia voluptatem sunt autem consequatur nemo corporis veritatis esse assumenda ex ducimus dignissimos perspiciatis molestias porro maiores eveniet sint eaque illum reiciendis quae, ut, aut molestiae debitis totam. Mollitia, laudantium?
                          </p>
                      </div>
                  </div>
            </div>
        </div>

        <div id="about">
            <div className="img">
                <img src={W1} alt="" />
            </div>
            <div className="write-up">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem velit iste nobis? Aperiam nihil repellat labore sit officiis quam voluptatum sunt eum illum dolor in reprehenderit porro, rerum autem odit odio corrupti voluptas earum, ad aspernatur ullam sapiente. Iste corrupti distinctio officiis neque aliquid magnam, numquam asperiores quaerat sit ipsa!
                </p>
            </div>
        </div>

          <div className="work">
              <div className="img">
                  <img src={W2} alt="" />
              </div>
              <div className="write">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam error nostrum, similique ipsa officia, ducimus architecto eos, quod mollitia sequi cumque fugiat labore iste repudiandae nihil quia odio corporis est.
              </div>
          </div> 
          <div className="work">
             
              <div className="write">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure delectus vero veritatis similique quas officiis fuga praesentium, soluta dolorem. Cupiditate non aliquid voluptatem eos nulla id necessitatibus exercitationem facilis quas Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam error nostrum, similique ipsa officia, ducimus architecto eos, quod mollitia sequi cumque fugiat labore iste repudiandae nihil quia odio corporis est.
              </div>
               <div className="img">
                  <img src={W3} alt="" />
              </div>
          </div>

          <div id="contact">
            <h2>Contact Us</h2>
            <div>
              <div className="con">
                  <h2>
                      Tel
                  </h2>
                  <p>12345678</p>
              </div> <div className="con">
                  <h2>
                      Address Line
                  </h2>
                  <p>Lorem, ipsum dolor.</p>
              </div> <div className="con">
                  <h2>
                      Instagram
                  </h2>
                  <p>lorem</p>
              </div> <div className="con">
                  <h2>
                      twitter
                  </h2>
                  <p>lorem@ipssum</p>
              </div></div>
          </div>

          <div className="footer">
            <h2>How can we help you today?</h2>
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
