import ChoosePage from "./components/layout/Home/choose";
import RegisterContactPage from "./components/layout/Home/contact";
import DigitalCardPage from "./components/layout/Home/digitalcard";
import HeroSection from "./components/layout/Home/hero";
import HowWorksPage from "./components/layout/Home/how";
import MobileComingSoon from "./components/layout/Home/mobileapp";
import ServicesPage from "./components/layout/Home/services";
import WhatIsSection from "./components/layout/Home/whatis";
import WhoCanJoin from "./components/layout/Home/whocanjoin";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <WhatIsSection/>
      <ServicesPage/>
      <ChoosePage/>
      <DigitalCardPage/>
      <HowWorksPage/>
      <WhoCanJoin/>
      <MobileComingSoon/>
      <RegisterContactPage/>
    </div>
  );
}
