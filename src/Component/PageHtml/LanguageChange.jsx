import {
    Nav,
    Navbar,
    Card,
    Col,
    Row,
    Button,
    NavDropdown
  } from "react-bootstrap";

export default function LanguageChange({ChoosedLanguage}){
    
    function getFlagEmoji(countryCode) {
        const codePoints = countryCode
          .toUpperCase()
          .split('')
          .map(char =>  127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }

      
    const handleNavbar = (e) => {
        ChoosedLanguage(e.currentTarget.dataset.lang)
        console.log(e.currentTarget.dataset.lang);
    }

    return <>

        <Navbar
            className="Navy"
            collapseOnSelect
            expand="full"
        
        >
        <Navbar.Brand href="#home">Choose language</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" data-lang='English' onClick={handleNavbar}>English {getFlagEmoji('US')} </Nav.Link>
                    <Nav.Link href="#" data-lang='French' onClick={handleNavbar}>French {getFlagEmoji('FR')} </Nav.Link>
                    <Nav.Link href="#" data-lang='Spanish' onClick={handleNavbar}>Spanish        {getFlagEmoji('ES')} </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
        
    </>
}