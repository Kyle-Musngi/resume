import React from "react";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <img 
      alt="Profile" 
      className="profile-pic" 
      src="/images/Profile.jpeg" 
      />
      <h1 className="name">
        Lance Kyle <br /> Musngi
      </h1>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <p>
        <strong>Address</strong>
        <br />
        Block 9 Lot 25, Villa Santo Domingo, Sto Domingo, Mexico, Pampanga
      </p>
      <p>
        <strong>Phone</strong>
        <br />
        +639770148227
      </p>
      <p>
        <strong>Email</strong>
        <br />
        lkmusngi@gmail.com
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h3>Skills</h3>
      <ul>
        <li>Basic networking (LAN/WAN setup, configuration)</li>
        <li>Communication and teamwork</li>
        <li>Adaptability and problem-solving</li>
        <li>Problem-solving & system design</li>
        <li>HTML & CSS</li>
      </ul>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <p>
        I am a college student from the University of the Assumption taking up Information Technology. 
        I want to learn more about web development, both front-end and back-end. 
        I am eager to gain experience through school projects, 
        internships, and working with others while improving my problem-solving and teamwork skills.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="section">
      <h2>Education</h2>

      <div className="edu-entry">
        <div className="edu-details">
          <p><strong>Bachelor of Science in Information Technology</strong></p>
          <p>University of the Assumption</p>
        </div>
      </div>

      <div className="edu-entry">
        <div className="edu-details">
          <p><strong>Senior High School</strong></p>
          <p>University of the Assumption</p>
        </div>
      </div>

      <div className="edu-entry">
        <div className="edu-details">
          <p><strong>High School</strong></p>
          <p>Saint Mary&apos;s Angels College of Pampanga</p>
        </div>
      </div>

      <div className="edu-entry">
        <div className="edu-details">
          <p><strong>Grade School</strong></p>
          <p>Sta Ana Elementary School</p>
        </div>
      </div>

      <div className="edu-entry">
        <div className="edu-details">
          <p><strong>Pre-School</strong></p>
          <p>Sta Ana Elementary School</p>
        </div>
      </div>
    </div>
  );
}

function JobEntry({ year, title, bullets }) {
  return (
    <div className="job-entry">
      <div className="job-header">
        <span className="job-date">{year}</span>
        <span className="job-title">{title}</span>
      </div>
      <ul className="job-list">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <div className="section">
      <h2>Experience</h2>
      <JobEntry
        year="2024"
        title="Web Development Project"
        bullets={[
          "We developed a responsive website for the Education Department",
          "We Use HTML and CSS for the front-end design.",
        ]}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="cv">
      <div className="left-column">
        <Header />
        <Contact />
        <Skills />
      </div>
      <div className="right-column">
        <Profile />
        <Education />
        <Experience />
      </div>
    </div>
  );
}
