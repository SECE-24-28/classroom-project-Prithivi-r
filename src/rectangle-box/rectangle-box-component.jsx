import React from "react";
import { RectangleBoxStyle } from "./rectangle-box-style";

export default function RectangleBox() {
  return (
    <RectangleBoxStyle>
      <div className="content-box">
        <div className="aptitude">
          <h1>Aptitude Guru Hem</h1>
          <h2>At AGH, we shape futures and build skills that</h2>
          <h3>empower you to lead.</h3>
          <p>
            Where Success Meets Opportunity! Are you ready to embark on a
            transformative journey towards success? At Aptitude Guru Hem, we are
            committed to providing you with the essential skills and knowledge
            to excel in your professional endeavors. Our expert training in
            aptitude and coding equips you to conquer every challenge, from
            company interview assessments to prestigious coding platforms like
            LeetCode, GeeksForGeeks, HackerRank , and more.
          </p>
        </div>

        <div className="btn-container">
          <button className="btn btn-grey">Start Your Learning</button>
          <button className="btn btn-red">Join a Live Demo</button>
        </div>

        {/* FIXED HEADING */}
        <div className="symbol">
          <h1>A Symbol of Excellence in Placement Training</h1>
          <p>
            Aptitude Guru Hem was born from the aspiration to create a learning
            environment that inspires greatness. Our founder, driven by personal
            experiences and a desire to make a difference, established the
            company with a mission to empower students with the right skills and
            mindset for success.
          </p>
        </div>

        {/* Vision + Mission */}
        <div className="vm-container">
          <div className="child_one">
            <h2>Our Vision</h2>
            <p>
              Our vision is to empower individuals from diverse backgrounds to
              become accomplished professionals. At Aptitude Guru Hem, we
              believe that knowledge has the power to transcend boundaries.
            </p>
          </div>

          <div className="child_two">
            <h2>Our Mission</h2>
            <p>
              Our mission is to revolutionize education by providing
              comprehensive training in aptitude, coding, and web/mobile
              development. We foster a culture of inclusivity and personal
              growth.
            </p>
          </div>
        </div>

        {/* ⭐ NEW SECTION ADDED HERE ⭐ */}
        {/* <div className="Trust">
          <div className="child01">
            <p>
              100+ <br /> colleges
            </p>
          </div>

          <div className="child02">
            <p>
              150 <br /> Professionals
            </p>
          </div>

          <div className="child03">
            <p>
              1000+ <br /> Study Materials
            </p>
          </div>

          <div className="child04">
            <p>
              10,00,000 <br /> Students
            </p>
          </div>
        </div>

        <div className="pill-box">
          <h1>Learners Today, Leaders Tomorrow</h1>
          <p>
            With our continuous research and development, we provide you with
            excellent Aptitude training.
          </p>
        </div> */}
      </div>
    </RectangleBoxStyle>
  );
}