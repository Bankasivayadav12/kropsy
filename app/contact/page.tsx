import ContactPage from "../components/layout/Contact/contactsupport";
import React
 from "react";
import MapHelpDesk from "../components/layout/Contact/helpdesk";
import SupportPage from "../components/layout/Contact/business";
import ReadyToJoin from "../components/layout/Contact/join";
const Contact = () => {
  return (
    <div className="w-full">
      <ContactPage/>
      <MapHelpDesk/>
      <SupportPage/>
      <ReadyToJoin/>
    </div>
  );
};

export default Contact