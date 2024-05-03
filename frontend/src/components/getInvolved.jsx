import React from "react";
import "./getInvolved.css";
import Navbar from "./Navbar.jsx";

const GetInvolved = () => {
  return (
    <div>
      <Navbar />

      <div className="tagline">
        <h1>Empower Change, </h1>
        <h1>
          <span>Volunteer</span> Today!
        </h1>
      </div>

      <div className="container">
        <div>
          <h1>Volunteering as Experts</h1>
          <p1 style={{ fontWeight: "bold" }}>
            Become a volunteer medical expert on our platform and offer valuable
            advice and consultations to those in need. Your knowledge can make a
            lasting impact on the health and lives of individuals seeking
            guidance.
          </p1>
          <a
            href="https://www.rahfoundation.org/become-volunteer.php"
            target="blank1"
          >
            <button>Know More</button>
          </a>
        </div>

        <div>
          <h1>NGOs Support & Donations</h1>
          <p1 style={{ fontWeight: "bold" }}>
            NGOs, register with us and receive support from our community.
            Individuals, contribute to the causes you believe in, and let's
            collectively build a healthier future.
          </p1>
          <a href="https://www.rahfoundation.org/payment.php" target="blank2">
            <button>Know More</button>
          </a>
        </div>

        <div>
          <h1>Expert Talk & Workshops</h1>
          <p1 style={{ fontWeight: "bold" }}>
            NGOs and experts, seize the opportunity to host webinars on topics
            that matter. Share your insights, conduct workshops, and inspire
            positive change in healthcare practices.
          </p1>
          <a
            href="https://www.rahfoundation.org/become-volunteer.php"
            target="blank3"
          >
            <button>Know More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
