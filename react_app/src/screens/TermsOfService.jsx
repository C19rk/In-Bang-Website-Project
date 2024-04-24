import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import "./InvisiScroll.css";
import pic from "../images/homepage.jpg";
import "../screens/mediaqueries.css";

function TermsOfService() {
  useEffect(() => {
    return () => {};
  }, []);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in the browser history
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    // Show message for a short duration before redirecting
    if (userInfo) {
      setShowMessage(true); // Show the message
    }
  }, [userInfo, navigate]);

  const linkStyle = {
    position: "fixed",
    top: "2vh",
    right: "15vh",
    cursor: "pointer",
    fontSize: "4.4vh",
    fontWeight: "bolder",
    backgroundColor: "#ffe600",
    border: "0.4vh solid #fff380",
    borderRadius: "1vh",
    color: "#000000",
  };

  return (
    <div className="card-container">
      <Footer />
      {userInfo && (
        <React.Fragment>
          <button style={linkStyle} onClick={() => navigate("/dashboard")}>
            Return to Dashboard
          </button>
        </React.Fragment>
      )}
      {!userInfo && (
        <React.Fragment>
          <button style={linkStyle} onClick={() => navigate("/")}>
            Return to Home
          </button>
        </React.Fragment>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          margin: 30,
          padding: "2vh",
        }}
      >
        <div
          style={{
            border: "2vh solid #ccc",
            padding: "2vh",
            textAlign: "center",
          }}
        >
          {/* 서비스 이용 약관 텍스트 */}
          <h1>Website Terms & Conditions</h1>
          <p>
            Please read this Agreement carefully before accessing or using the
            Service. It is understood that upon submission of the registration
            form, you agree to be bound by the terms and conditions set forth
            below. If you do not wish to be bound by these terms and conditions,
            you may not access or use this Service. Globe Telecom may at any
            time modify this Agreement, and such modifications shall be
            effective immediately upon posting of the modified Agreement. You
            agree to review the Agreement periodically and your continued access
            or use of the Service shall be deemed your conclusive acceptance of
            the modified Agreement.
          </p>
          <h2>1. USE OF THE SERVICE</h2>
          <p>
            You understand that, except for information, products, or services
            clearly identified as being supplied by Globe Telecom, Globe Telecom
            does not in any way operate, control, or endorse any information,
            products, or services on the Internet. Except for Globe Telecom`s
            identified information, products, or services, all other
            information, products, and services offered through the Service or
            on the Internet generally are offered by third parties that are not
            affiliated with Globe Telecom. You understand that in case of
            conflict or inconsistencies between the online bill and the monthly
            bill received by you through mail or courier service, the latter
            shall prevail. If your online credit card payment has not been
            successfully executed, resulting to a dispute with your credit card
            company, you hereby authorize Globe Telecom to charge back to your
            account the unpaid bill. You understand that Globe Telecom cannot
            and does not guarantee or warrant that files available for
            downloading through the Service will be free of infection or
            viruses, worms, Trojan horses, or other code that manifest
            contaminating or destructive properties. You are responsible for
            implementing sufficient procedures and checkpoints to satisfy your
            particular requirements for accuracy of data input and output, and
            for maintaining a means external to the Service for the
            reconstruction of any lost data. You therefore assume total
            responsibility and risk for your use of the Service and the
            Internet. You understand that the Internet contains unedited
            materials, some of which are sexually explicit or may be offensive
            to you. You further understand that Globe Telecom has no control
            over and accepts no responsibility whatsoever for such materials.
            You may access such materials at your own risk. Globe Telecom does
            not make any express or implied warranties, representations, or
            endorsements whatsoever (including without limitation warranties of
            title or non-infringement, or the implied warranties of
            merchantability or fitness for a particular purpose) with regard to
            the Service, any merchandise, information, or service provided
            through the Service or on the Internet generally, and as such, Globe
            Telecom shall not be liable for any cost or damage arising either
            directly or indirectly from any such transaction. It is solely your
            responsibility to evaluate the accuracy, completeness, and
            usefulness of all opinions, advice, services, merchandise, and other
            information provided through the Service or on the Internet
            generally. Globe Telecom does not warrant that the Service will be
            uninterrupted or error-free or that defects in the Service will be
            corrected. The Service and any software made available on the
            Service are provided on an "as is, as available" basis.
          </p>
          <h2>2. INDEMNIFICATION</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Globe Telecom, its
            officers, directors, employees, agents, licensors, suppliers, and
            any third party information providers to the Service from and
            against all losses, expenses, damages, and costs, including
            reasonable attorneys` fees, resulting from any violation of this
            Agreement by you. Notwithstanding the following, you hold Globe
            Telecom free and harmless from suit or action arising from improper
            use of data, unauthorized intrusion into the site, and unlawful
            exposure of data.
          </p>
          <h2>3. THIRD PARTY RIGHTS</h2>
          <p>
            The provisions of paragraphs 1 (Use of the Service), and 2
            (Indemnification) are for the benefit of Globe Telecom and its
            officers, directors, employees, agents, licensors, suppliers, and
            any third party information providers to the Service. Each of these
            individuals or entities shall have the right to assert and enforce
            those provisions directly against you on its own behalf.
          </p>
          <h2>4. ACCURACY OF PWCI</h2>
          <p>
            You understand that it is your sole responsibility to evaluate the
            accuracy, completeness, and usefulness of any opinion, advice,
            services, or other information provided. The information on this
            website may be changed or updated without notice. Globe Telecom may
            also make improvements and/or changes in the products, services,
            and/or programs described on this website at any time without
            notice. Information provided on this website is believed to be
            reliable when posted. However, Globe Telecom cannot guarantee that
            information will be accurate, complete, and current at all times.
            All information in this Web Site is subject to modification from
            time to time without notice. Every time you access this Web Site,
            make sure that you check this page. Globe Telecom has used its
            discretion, best judgment, and all reasonable efforts in collecting
            and preparing the information, documents (including copy, graphics,
            pictures, etc.), or other items provided or available herein, but
            any such information, document, or other item is provided or
            available without any warranty of any kind, either express or
            implied, including, but not limited to, the warranties of
            completeness, accuracy, fitness for a particular purpose, or
            non-infringement of any intellectual property rights.
          </p>
          <h2>COPYRIGHT</h2>
          <p>
            All site design, text, graphics, interfaces, and the selection and
            arrangements thereof are (c) 2009, Globe Telecom. ALL RIGHTS
            RESERVED. Permission is granted to electronically copy and to print
            hard copy portions of this site for the sole purpose of
            viewing/paying Globe Telecom bills. Any other use of materials on
            this website, including reproduction for purposes other than those
            noted above, modification, distribution, or republication, without
            the prior written permission of Globe Telecom is strictly
            prohibited.
          </p>
          {/* 약관의 나머지 내용 */}
        </div>

        {/* Back Button */}
        <button
          onClick={handleGoBack}
          style={{
            position: "fixed",
            top: "2vh",
            right: "2vw",
            cursor: "pointer",
            border: "0.4vh solid rgba(18, 0, 184, 1)",
            backgroundColor: "rgba(18, 0, 134, 1)",
            borderRadius: "1vh",
            color: "#ffffff",
            padding: "0.01vh 1vw",
            fontSize: "4.5vh",
            fontWeight: "bolder",
            transform: "scaleY(-1)",
            zIndex: 3,
          }}
        >
          ↩
        </button>
      </div>
    </div>
  );
}

export default TermsOfService;
