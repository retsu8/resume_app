"use client";

import { useState } from 'react';
import Image from "next/image";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Email, Phone } from "hidden-from-bots-react";
import ListGroup from 'react-bootstrap/ListGroup';
import About from "./pages/about";
import SkillList from "./pages/skilllist";
import WorkList from "./pages/worklist";
import data from "./db/database.json";

export default function Home() {
  return (
    <>
        <Container>
            <Row>
              <h1 className="text-info">William Paddock</h1>
            </Row>
            <Row>
              <h4 className="text-light">React Developer</h4>
            </Row>
            <Row className="justify-content-md-left"> 
                <Col md="auto">Belgrade, MT </Col>
                <Col sm={1} > - </Col>
                <Col md="auto"><Phone phone="406-855-1987">406-855-1987</Phone></Col>
                <Col sm={1}> - </Col> 
                <Col md="auto"><Email email="william.paddock08@gmail.com">william.paddock08@gmail.com</Email></Col>
                <Col sm={1}> - </Col>
                <Col md="auto"><a href="https://www.linkedin.com/in/wpaddock08/">linkedin.com/in/wpaddock08</a></Col>
            </Row>
            <br />
            <Row>
              <h4 className="text-light"><b>Summary</b></h4>
            </Row>
            <Row>
              <Col sm={10}>
Senior Software Engineer with over 6 years of experience in back-end and full-stack development, specializing in scalable API design and microservices. Proven expertise in Node.js, RESTful APIs, and relational databases, with a solid track record in transforming complex requirements into efficient solutions. Demonstrates a strong aptitude for algorithm design, debugging, and collaborative problem-solving in fast-paced environments.
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
              <SkillList data={data['skills']}/>
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
              <h5>Oracle</h5>
            </Row>
            <Row>
              <p>Senior Technical Support Engineer</p>
            </Row>
            <Row>
              <WorkList data={data.work.Oracle} />
            </Row>
        </Container>
    </>
    );
}
