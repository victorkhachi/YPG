import { BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from './pages/Landing/yeg.png'
import { PopupModal } from 'react-calendly';
import Contact from './pages/Contact';
import Faq from './pages/faq';

function App() {
  const [openNav, setOpenNav] = useState(false);
  let screenWidth = window.innerWidth;
  const [style, setStyle] = useState({})
  const [navstyle, setNavstyle] = useState({})
  const callBack = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setStyle({})
      setNavstyle({})
    }
    else {
      setStyle({
        position: 'fixed',
        boxShadow: '1px 1px 10px rgb(0 0 0 / 15%)',
        background: 'rgba(255,255,255,0.5)',
        transition: 'all linear .3s',


      })
      setNavstyle({ color: 'rgba(0,0,0,0.8)' })
    }
  };
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const watchRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    const target = watchRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [watchRef]);


  const [open, setOpen] = useState(false)
  return (
    <Router>
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
        onModalClose={() => setOpen(false)}
      />
    <div className="App">
        <div
          onClick={() => setOpenNav(!openNav)}
          className={openNav ? "slide_nav" : "slide_in"}
        >
          <div onClick={(e) => e.stopPropagation()} className="links">
            <Link to={""}>Home</Link>
            <a href={"/#about"}>About</a>
            <a href="#contact">Contact Us</a>

            <Link to={"/faq"}>FAQ</Link>
            <Link to={"/blog"}>BLOG</Link>
          </div>
        </div>
        {screenWidth <= 700 && (
          <div className="small_header" style={style}>
            <div className="logo" style={{ width: '50px' }}><img style={{ width: '100%' }} src={Logo} alt="" /></div>
            <FaBars style={navstyle} onClick={() => setOpenNav(!openNav)} />
          </div>
        )}
       {screenWidth>700&& <div className="head">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="links">
            <a href="/#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <Link to="/faq">FAQ</Link>
            <Link to="/blog">BLOG</Link>
            <button onClick={() => setOpen(true)}>Book an Appointment</button>
          </div>
        </div>}
     <Routes>
          <Route path='' element={<Landing open={(e) => setOpen(e)} />} />
          <Route path='/blog' element={<Contact open={(e) => setOpen(e)} />} />
          <Route path='/faq' element={<Faq open={(e) => setOpen(e)} />} />
     </Routes>
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
            <input type="text" placeholder='Full Name' />
            <input type="tel" placeholder='Phone Number' />
            <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="builder">This Site was built by <a href="www.linkedin.com/in/onyedikachi-obi">Onyedikachi Obi</a></div>

    </div>
    </Router>
  );
}

export default App;
