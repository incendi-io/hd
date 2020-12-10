import Navbar from "react-bootstrap/Navbar";
import { Logo } from "~components/Logo";
import React from "react";

export const Header = () =>     <Navbar bg="dark" variant="dark">
    <Logo />
    <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
</Navbar>