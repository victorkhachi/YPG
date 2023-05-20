import "./index.scss";

import { FaAngleDown, FaAngleUp, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Faq = (props) => {
  const questions = [
    {
      question: "Does using solar panels save money?",
      answer:
        "Yes! Using solar panels for electricity generation will eventually save you money.However, you'll need to determine whether or not it is viable to install a solar system, the size and how quickly your system will pay itself off. Depending on the system installed, you'll either break even after a while or start saving more than you were spending previously. We've already covered a lot of the factors that contribute to whether or not solar power will pay off for you.Again, there are plenty of factors at play and each homeowner is in a different situation than the rest.Reach out to an expert to break down the numbers.",
    },
    {
      question: " How much does it cost to install solar panels on my home?",
      answer:
        "Solar power generation systems have been getting cheaper and cheaper over the years but you can still expect to pay in five digits. An average-sized house in the US will have to pay between $20,000 and $30,000, after accounting for solar tax credits.The price may end up being even higher if the electricity requirements are greater and if the homeowner is planning to produce vast amounts of electric energy.",
    },
    {
      question: "Are panels insured if something happens to them?",
      answer:
        "This is often over-looked, so you'll be glad you read this far. You'll need to add your new solar system onto your homeowners policy. This will ensure that those large storms aren't a financial drag on your pocketbook.",
    },
   
  ];


  return (
    <div className="landing faq">
      <div className="banner">
        <div className="write-up">
          <h2>Schedule free consultation with us and get our promo services </h2>
          <p> own your power and turn your energy into cash flowing assets. Zero money downn</p>
          <button onClick={() => props.open(true)}>Schedule an appointment</button>
        </div>
        <img src={require('../../asset/vivint-solar-9CalgkSRZb8-unsplash.jpg')} alt="" />

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


      <section className="questions">
        <h1>FAQ</h1>

        <div className="questions">
          {questions.map((question) => (
            <QnA {...question} />
          ))}
        </div>
        </section>
        <section style={{margin:'auto',width:'80%'}} className="blog_p">
        <h3 style={{textAlign:'center',marginBottom:'12px'}}>   Understanding how Solar Power Works</h3>
         
            <p className="cat">
       
          ‍

          <b> Solar panels generate electricity by catching photons from the Sun.</b> A photovoltaic solar energy system can generate a Kilowatt-hour or more (depending on the size of the installation) and can reliably sustain a household's basic electricity needs.
<br />
          Up until the last couple of years, solar companies charged quite a lot for solar panel installation, which made solar energy an expensive choice for most homes. As the cost of the raw materials have dropped and installation has become more common, the cost for purchasing your own solar electricity has dropped dramatically. Moreover, as fires rage in the west and storms cause persistent black-outs,<b> more homeowners are placing greater value on the ability to independently produce energy at lower per-unit prices.

          </b>       <br />  Now, let's talk about energy efficiency. Solar panels have a 'capacity factor'; a percentage of usable electricity produced by the panels themselves. This percentage is usually between 15% and 30%. <b> Why so low? The sun is moving during the day and most panels only are in position to absorb the sun's energy for a fraction of the day.</b> Remember: Keep in mind that solar panels can't generate electricity during the night!

      <br />    The average size of a residential solar system in the US is about 8 kW system. Here's a quick example of how much electricity an 8kW solar system can produce.

        <br /> <b> 8kWh x 20% x 24hr/day x 365 days/year = 14,016kWh/year.</b>

          According to the EIA, the average household used abut 10,715 kilowatt hours (kWh) of electricity. Though every household is different, (and if you continue to electrify your home your electricity needs will certainly increase), in many cases you can create more electricity than you need!

          There are a lot of factors that influence how efficient a solar system is. Your best bet would be to contact a reputable solar installer for further information on the viability of a solar panel system for your home. Solar homeowners usually spend a lot of time doing research to make sure such an investment makes sense. There are also great online resources.

‍ 
          </p>
        </section>
     
    </div>
  );
};

export default Faq;

const QnA = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="qna">
      <div
        onClick={() => setOpen(!open)}
        className={`question ${open ? "selected" : ""}`}
      >
        {open ? <FaAngleUp /> : <FaAngleDown />}
        <p>{question}</p>
      </div>
      {open && <div className="answer">{answer}</div>}
    </div>
  );
};
