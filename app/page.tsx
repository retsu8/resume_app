"use client";

import { useState } from 'react';
import Image from "next/image";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Email, Phone } from "hidden-from-bots-react";
import About from "./pages/about";
import NavBar from "./pages/navbar"

export default function Home() {
  return (
    <>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Container>
          <Col>
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
            <Row>
              <Col>
                <h2 className="text-info">Experience</h2>
              </Col>
            </Row>
            <Row>
              <hr />
            </Row>
          </Col>
        </Container>
      </div>
    </ThemeProvider>
    </>
    );
}
