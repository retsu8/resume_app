"use client";

import { useState } from 'react';
import Image from "next/image";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import About from "./pages/about";
import NavBar from "./pages/navbar"

export default function Home() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Container fluid>
          <Row>
            <Col>
            <NavBar className="d-inline-block"/>
          </Col>
          <Col>
          </Col>
          </Row>
          <Row>
            <Col>William Paddock</Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
    );
}
