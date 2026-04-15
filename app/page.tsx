"use client";

import { useState } from 'react';
import Image from "next/image";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import About from "./pages/about";
import SkillList from "./pages/skilllist";
import WorkList from "./pages/worklist";
import data from "./db/database.json";

const skills = data["skills"]

export default function Home() {
  return (
    <>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
        <Container>
            <Row>
              <h1 className="text-info">William Paddock</h1>
            </Row>
            <Row>
              <h4 className="text-light">Full Stack Engineer</h4>
            </Row>
            <Row className="justify-content-md-left"> 
                <Col md="auto"><a href="https://github.com/retsu8"><FaGithub /></a></Col>
                <Col md="auto"><a href="https://www.linkedin.com/in/wpaddock08/"><FaLinkedin /></a></Col>
            </Row>
            <br />
            <Row>
              <h4 className="text-light"><b>Summary</b></h4>
            </Row>
            <Row>
              <Col sm={10}>
Senior Software Engineer with over 9 years of experience in back-end and full-stack development, specializing in scalable API design and microservices. Proven expertise in Node.js, RESTful APIs, and relational databases, with a solid track record in transforming complex requirements into efficient solutions. Demonstrates a strong aptitude for algorithm design, debugging, and collaborative problem-solving in fast-paced environments.
              </Col>
              <Col  sm={2}></Col>
            </Row>
            <br />
            <Row>
              <Col>
                <h4 className="text-light"><b>Skills</b></h4>
              </Col>
              <hr />
            </Row>
            <Row>
              <SkillList key="Skills" data={skills}/>
            </Row>
            <Row>
            <br />
            </Row>
            <Row>
              <Col>
                <h2 className="text-info">Work Experience</h2>
              </Col>
            </Row>
            <Row>
              <hr />
            </Row>
            <Row>
                <Col><b>Oracle</b></Col>
                <Col style={{textAlign: "right"}}><b>Dec 2019 - April 2026</b></Col>
            </Row>
            <Row>
              <Col>Senior Technical Support Engineer</Col>
              <Col style={{textAlign: "right"}}>Bozeman, MT</Col>
            </Row>
            <Row>
              <Col sm={.5}></Col>
              <Col>
              <WorkList data={data.work.Oracle} />
              </Col>
              <Col sm={1}></Col>
            </Row>
            <Row>
              <h5>Vault Innovation Group</h5>
            </Row>
            <Row>
              <p>Full Stack Engineer</p>
            </Row>
            <Row>
              <Col sm={.5}></Col>
              <Col>
              <WorkList key="Vault Innovation Group" data={data.work['Vault Innovation Group']} />
              </Col>
              <Col sm={1}></Col>
            </Row>
            <Row>
              <h5>Frontline Processing</h5>
            </Row>
            <Row>
              <p>Lead Developer</p>
            </Row>
            <Row>
              <Col sm={.5}></Col>
              <Col>
                <WorkList key="Frontline Processinga" data={data.work['Frontline Processing']} />
              </Col>
              <Col sm={1}></Col>
            </Row>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2026 Copyright: Made with
              <a className='text-white' href='https://getbootstrap.com/'>BootStrap </a>and 
              <a className='text-white' href='https://nextjs.org/'>
               Next.js/React
              </a>
            </div>
        </Container>
      </ThemeProvider>
    </>
    );
}
