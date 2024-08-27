import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const baseUrl = "http://localhost:8000";

  const sendEmail = async () => {
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return; // Stop execution if fields are empty
      }

      let dataSend = {
        name: name,
        email: email,
        msg: msg,
      };

      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json(); // Parse JSON response

      if (data.success) {
        toast.success(data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while sending the email.");
    }
  };

  // // handel submit button
  // const handelSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (!name || !email || !msg) {
  //       toast.error("Please provide all fileds");
  //     }
  //     const res = await axios.post("/api/v1/portfolio/sendEmail", {
  //       name,
  //       email,
  //       msg,
  //     });
  //     // validation
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0 container">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="card1">
                <div className="row border-line">
                  <img src="" alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="card card2 d-flex border-0 px-4 py-3">
                <h6>
                  Conctact With{" "}
                  <FaLinkedin color="blue" size={28} className="m-2" />
                  <FaGithub color="black" size={28} className="m-2" />
                </h6>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your E-mail"
                    className="mb-3"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Enter your message"
                    className="mb-3"
                    value={msg}
                    onChange={(e) => {
                      setMsg(e.target.value);
                    }}
                  />
                </div>
                <div className="row px-3">
                  <button
                    onClick={() => {
                      sendEmail();
                    }}
                    className="button mb-3"
                  >
                    Send your message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
