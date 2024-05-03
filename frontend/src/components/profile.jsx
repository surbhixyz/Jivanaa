import React, { useState } from "react";
import "./profile.css";
import { toast } from "react-toastify";
import Navbar from "./Navbar.jsx";
import { auth } from "./Auth/firebase.js";

const Profile = () => {
  const [formData, setformData] = useState({
    name: "",
    age: "",
    sexAssignedAtBirth: "Female",

    uterusPresence: "",
    menstrualstartdate: "",
    menstruallength: "",
    menstrualComments: "",

    contraceptionPill: false,
    contraceptionCondom: false,

    stiTestingHistory: "",
    testedSTIs: "",

    cervicalCancerScreening: "",
    cervicalCancerScreeningResult: "Normal",

    relationshipStatus: "",
    sexualOrientation: "",
    genderIdentity: "",

    medicationsSpecificNames: "",
    medicationsCategory: "",

    shortNote: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setformData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.age < 18 || formData.age > 100) {
      toast.error("Invalid age. Please enter an age between 18 and 100.");
      return;
    }

    console.log(formData);
  }

  return (
    <div>
      <Navbar />

      <div className="profile-form">
        <div className="header">
          <h1>
            Welcome <user className="displayName"></user>
          </h1>

          <img src="../images/rhea.svg"></img>
        </div>

        <form className="profile" onSubmit={handleSubmit}>
          <div className="fields">
            <fieldset>
              <legend>Basic Information</legend>

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <br></br>

              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="18"
                max="100"
                required
              />

              <br></br>
              <label htmlFor="sexAssignedAtBirth">Sex assigned at birth:</label>
              <select
                id="sexAssignedAtBirth"
                name="sexAssignedAtBirth"
                value={formData.sexAssignedAtBirth}
                onChange={handleChange}
                required
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </fieldset>

            <fieldset>
              <legend>Reproductive Health</legend>

              <label>Uterus presence:</label>
              <br></br>

              <input
                type="radio"
                id="uterusYes"
                name="uterusPresence"
                value="yes"
                checked={formData.uterusPresence === "yes"}
                onChange={handleChange}
              />
              <label htmlFor="uterusYes">Yes</label>

              <input
                type="radio"
                id="uterusNo"
                name="uterusPresence"
                value="no"
                checked={formData.uterusPresence === "no"}
                onChange={handleChange}
              />
              <label htmlFor="uterusNo">No</label>

              <br></br>
              <br></br>

              {formData.uterusPresence === "yes" && (
                <div>
                  <label id="specific-label">
                    Menstrual cycle information-
                  </label>
                  <br></br>
                  <br></br>

                  <label htmlFor="menstrualCycleDate">
                    Start date of the menstrual cycle :
                  </label>
                  <input
                    type="date"
                    id="menstrualCycleDate"
                    name="menstrualstartdate"
                    value={formData.menstrualstartdate}
                    onChange={handleChange}
                  />
                  <br></br>
                  <label htmlFor="menstrualCycleLength">
                    Length of the menstrual cycle :
                  </label>
                  <input
                    type="text"
                    id="menstrualCycleLength"
                    name="menstruallength"
                    value={formData.menstruallength}
                    onChange={handleChange}
                  />

                  <br></br>
                  <label htmlFor="menstrualCycleComments">Comments:</label>
                  <br></br>

                  <textarea
                    id="menstrualCycleComments"
                    name="menstrualComments"
                    value={formData.menstrualComments}
                    onChange={handleChange}
                    rows="4"
                    cols="50"
                  ></textarea>
                </div>
              )}

              <label>Contraception usage:</label>
              <div>
                <input
                  type="checkbox"
                  id="contraceptionPill"
                  name="contraceptionPill"
                  value="pill"
                  checked={formData.contraceptionPill}
                  onChange={handleChange}
                />
                <label htmlFor="contraceptionPill">Contraception Pill</label>

                <input
                  type="checkbox"
                  id="contraceptionCondom"
                  name="contraceptionCondom"
                  value="condom"
                  checked={formData.contraceptionCondom}
                  onChange={handleChange}
                />
                <label htmlFor="contraceptionCondom">Condom</label>
              </div>

              <br></br>
              <label>STI testing history:</label>
              <div>
                <input
                  type="radio"
                  id="stiTestingYes"
                  name="stiTestingHistory"
                  value="yes"
                  checked={formData.stiTestingHistory === "yes"}
                  onChange={handleChange}
                />
                <label htmlFor="stiTestingYes">Yes</label>

                <input
                  type="radio"
                  id="stiTestingNo"
                  name="stiTestingHistory"
                  value="no"
                  checked={formData.stiTestingHistory === "no"}
                  onChange={handleChange}
                />
                <label htmlFor="stiTestingNo">No</label>
              </div>
              <br></br>
              {formData.stiTestingHistory === "yes" && (
                <div>
                  <label htmlFor="testedSTIs">Specify tested STIs:</label>
                  <input
                    type="text"
                    id="testedSTIs"
                    name="testedSTIs"
                    value={formData.testedSTIs}
                    onChange={handleChange}
                  />
                </div>
              )}

              {formData.uterusPresence === "yes" && (
                <div>
                  <label>Cervical cancer screening results:</label>
                  <div>
                    <input
                      type="radio"
                      id="cervicalCancerScreeningYes"
                      name="cervicalCancerScreening"
                      value="yes"
                      checked={formData.cervicalCancerScreening === "yes"}
                      onChange={handleChange}
                    />
                    <label htmlFor="cervicalCancerScreeningYes">Yes</label>

                    <input
                      type="radio"
                      id="cervicalCancerScreeningNo"
                      name="cervicalCancerScreening"
                      value="no"
                      checked={formData.cervicalCancerScreening === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="cervicalCancerScreeningNo">No</label>
                  </div>

                  {formData.cervicalCancerScreening === "yes" && (
                    <div>
                      <label htmlFor="cervicalCancerScreeningResult">
                        Result:
                      </label>
                      <select
                        // id="cervicalCancerScreeningResult"
                        name="cervicalCancerScreeningResult"
                        value={formData.cervicalCancerScreeningResult}
                        onChange={handleChange}
                      >
                        <option value="normal">Normal</option>
                        <option value="abnormal">Abnormal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}
                </div>
              )}
            </fieldset>

            <fieldset>
              <legend>Relationship Preferences</legend>

              <label htmlFor="relationshipStatus">Relationship status:</label>
              <select
                id="relationshipStatus"
                name="relationshipStatus"
                value={formData.relationshipStatus}
                onChange={handleChange}
                required
              >
                <option value="">Select status</option>
                <option value="single">Single</option>
                <option value="inRelationship">In a relationship</option>
                <option value="married">Married</option>
                <option value="openRelationship">Open relationship</option>
                <option value="otherRelationshipStatus">Other</option>
              </select>

              {formData.relationshipStatus === "otherRelationshipStatus" && (
                <div>
                  <label htmlFor="otherRelationshipStatus">Specify:</label>
                  <input
                    type="text"
                    name="otherRelationshipStatus"
                    value={formData.otherRelationshipStatus}
                    onChange={handleChange}
                  />
                </div>
              )}

              <br></br>
              <br></br>
              <label htmlFor="sexualOrientation">Sexual orientation:</label>
              <select
                name="sexualOrientation"
                value={formData.sexualOrientation}
                onChange={handleChange}
                required
              >
                <option value="">Select orientation</option>
                <option value="heterosexual">Heterosexual</option>
                <option value="homosexual">Homosexual</option>
                <option value="bisexual">Bisexual</option>
                <option value="pansexual">Pansexual</option>
                <option value="otherSexualOrientation">Other</option>
              </select>

              {formData.sexualOrientation === "otherSexualOrientation" && (
                <div>
                  <label htmlFor="otherSexualOrientation">Specify:</label>
                  <input
                    type="text"
                    name="otherSexualOrientation"
                    value={formData.otherSexualOrientation}
                    onChange={handleChange}
                  />
                </div>
              )}

              <br></br>
              <br></br>

              <label htmlFor="genderIdentity">Gender identity:</label>
              <select
                id="genderIdentity"
                name="genderIdentity"
                value={formData.genderIdentity}
                onChange={handleChange}
                required
              >
                <option value="">Select identity</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonBinary">Non-Binary</option>
                <option value="genderqueer">Genderqueer</option>
                <option value="agender">Agender</option>
                <option value="otherGenderIdentity">Other</option>
              </select>

              {formData.genderIdentity === "otherGenderIdentity" && (
                <div>
                  <label htmlFor="otherGenderIdentity">Specify:</label>
                  <input
                    type="text"
                    id="otherGenderIdentity"
                    name="otherGenderIdentity"
                    value={formData.otherGenderIdentity}
                    onChange={handleChange}
                  />
                </div>
              )}
            </fieldset>

            <fieldset>
              <legend>Additional Information</legend>

              <label htmlFor="medicationsCategory">Medications category:</label>
              <select
                id="medicationsCategory"
                name="medicationsCategory"
                onChange={handleChange}
              >
                <option value="">Select category</option>

                <option value="hormonal">Hormonal</option>
                <option value="antidepressants">Antidepressants</option>
                <option value="birthControl">Birth Control</option>
                <option value="fertilityDrugs">Fertility Drugs</option>
                <option value="contraceptives">Contraceptives</option>
                <option value="sleepAids">Sleep Aids</option>
                <option value="ovulationInducers">Ovulation Inducers</option>
                <option value="Other">Other</option>
              </select>

              <br></br>
              <br></br>

              <label htmlFor="medicationsSpecificNames">
                Specific medication names:
              </label>
              <input
                type="text"
                name="medicationsSpecificNames"
                value={formData.medicationsSpecificNames}
                onChange={handleChange}
              />

              <br></br>
              <label htmlFor="shortNote">Short Note:</label>
              <br></br>
              <textarea
                id="shortNote"
                name="shortNote"
                value={formData.shortNote}
                onChange={handleChange}
                rows="4"
                cols="40"
              ></textarea>
            </fieldset>
          </div>

          <button className="save"> SAVE</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
