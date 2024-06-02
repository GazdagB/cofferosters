import React from "react";
import { useState } from "react";
import PageCard from "../components/PageCard";
import "./Subscribe.css"

import bgImageHero from "../assets/plan/mobile/image-hero-blackcup.jpg";
import HowItCard from "../components/HowItCard";
import Question from "../components/Question";
import AnswerCard from "../components/AnswerCard";

const Subscribe = () => {
  const constants = {
    heroTitle: "Create a plan",
    heroBody:
      "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.",

      questions: [
        {
            question: "How do you drink your coffee?",
            answers: [
                {
                    title: "Capsule",
                    body: "Compatible with Nespresso systems and similar brewers"
                },
                {
                    title: "Filter",
                    body: "For pour over or drip methods like Aeropress, Chemex, and V60"
                },
                {
                    title: "Espresso",
                    body: "Dense and finely ground beans for an intense, flavorful experience"
                }
            ]

        },
        {
            question: "What type of coffee?",
            answers: [
                {
                    title: "Single Origin",
                    body: "Distinct, high quality coffee from a specific family-owned farm"
                },
                {
                    title: "Decaf",
                    body: "Just like regular coffee, except the caffeine has been removed"
                },
                {
                    title: "Blended",
                    body: "Combination of two or three dark roasted beans of organic coffees"
                }
            ]
        },
        {
            question: "How much would you like?",
            answers: [
                {
                    title: "250g",
                    body: "Perfect for the solo drinker. Yields about 12 delicious cups."
                },
                {
                    title: "500g",
                    body: "Perfect option for a couple. Yields about 40 delectable cups."
                },
                {
                    title: "1000g",
                    body: "Perfect for offices and events. Yields about 90 delightful cups."
                }
            ]
        },
        {
            question: "Want us to grind them?",
            answers: [
                {
                    title: "Wholebean",
                    body: "Best choice if you cherish the full sensory experience"
                },
                {
                    title: "Filter",
                    body: "For drip or pour-over coffee methods such as V60 or Aeropress"
                },
                {
                    title: "Cafetiére",
                    body: "Course ground beans specially suited for french press coffee"
                }
            ]
        },
        {
            question: "How often should we deliver?",
            answers: [
                {
                    title: "Every week",
                    body: "$7.20 per shipment. Includes free first-class shipping."
                },
                {
                    title: "Every 2 weeks",
                    body: "$9.60 per shipment. Includes free priority shipping."
                },
                {
                    title: "Every month",
                    body: "$12.00 per shipment. Includes free priority shipping."
                }
            ]
        }

      ]
  };

  const [how, setHow] = useState("...");
  const [coffeType,setCoffeType] = useState("...");
  const [quantity, setQuantity] = useState("...");
  const [grind,setGrind] = useState("...")
  const [often,setOften] = useState("...")

  return (
    <div>
      <PageCard
        classes={"h-[400px] mb-[125px] mx-[25px]"}
        title={constants.heroTitle}
        body={constants.heroBody}
        bgImage={bgImageHero}
      />

      <div className="h-[1200px] w-full bg-[#2C343E] py-[90px] px-[35px] mb-[125px] rounded-[10px]">
        <HowItCard
          number={"01"}
          title={"Pick your coffee"}
          bodyTxtColor="text-white"
          body={
            "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
          }
        />

        <HowItCard
          number={"02"}
          title={"Choose the frequency"}
          bodyTxtColor="text-white"
          body={
            "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
          }
        />

        <HowItCard
          number={"03"}
          title={"Receive and enjoy"}
          bodyTxtColor="text-white"
          body={
            "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
          }
        />
      </div>

      <div className="mx-[25px]">
        <Question result={setHow} questions={constants.questions[0]}/>
        <Question result={setCoffeType} questions={constants.questions[1]}/>
        <Question result={setQuantity} questions={constants.questions[2]}/>
        <Question result={setGrind} questions={constants.questions[3]}/>
        <Question result={setOften} questions={constants.questions[4]}/>
      </div>

      <div title="summary" className="summary h-[338px] mb-[56px] p-[27px] rounded-[8px] mx-[25px]">
          <p className="uppercase text-white opacity-[50%] mb-[8px]">order summary</p>
          <p className="u-h4 leading-[40px] text-white">“I drink my coffee as <span className="summary-turkiz">{how}</span>, with a <span className="summary-turkiz">{coffeType}</span> type of bean. <span className="summary-turkiz">{quantity}</span> ground ala <span className="summary-turkiz">{grind}</span>, sent to me <span className="summary-turkiz">{often}</span>.”</p>
      </div>
    </div>
  );
};

export default Subscribe;
