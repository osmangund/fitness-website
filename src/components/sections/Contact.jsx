import styled from "styled-components"
import { motion } from "framer-motion"

const Section = styled.section`
  height: 100vh;
  display: flex;
  background-color: black;
  color: white;
  padding-inline-start: 3rem;

  .contact__info {
    width: 50%;
    h1 {
      font-size: 3rem;
      margin-block: 3rem 0.4rem;
      margin-inline: 0;
    }
    p {
      font-size: 1.5rem;
      font-weight: 300;
      margin: 0;
    }
    a {
      color: white;
      text-decoration: none;
    }
    .wgh-500 {
      font-weight: 500;
    }
  }
  .contact__photo {
    width: 50%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      max-height: 1024px;
      object-fit: cover;
    }
  }
`
export default function Contact() {
  return (
    <Section id="contact">
      <div className="contact__info">
        <h1>Contact</h1>
        <p>
          <span className="wgh-500">111 Fitness Club</span>
          <br />
          1234/56 Gym St. No: 356
          <br />
          Gym City, Gym State 34000
          <br />
          (123) 456-7890
        </p>
        <h1>Hours</h1>
        <p>
          <span className="wgh-500">Mon-Fri: </span>5AM - 11PM
        </p>
        <p>
          <span className="wgh-500">Sat-Sun: </span>7AM - 7PM
        </p>
        <motion.h1
          initial={{ x: -400 }}
          whileInView={{ x: 0 }}
          transition={{ delay: 0.75 }}
          viewport={{ once: true }}
        >
          Start today.
        </motion.h1>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/osmangund"
            className="wgh-500"
          >
            osmangund®
          </a>{" "}
          2024. All rights reserved.
        </span>
      </div>
      <div className="contact__photo">
        <img
          src="images/gym-inside4.jpg"
          alt="Reception of the fitness centre"
        />
      </div>
    </Section>
  )
}