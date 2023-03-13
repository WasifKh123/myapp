import { Steps } from 'intro.js-react';
import 'intro.js/introjs.css';
import React, { useEffect, useState } from 'react';
import Auth from '../pages/authuser';
import {
    MDBBtn,
    MDBCollapse, MDBContainer, MDBIcon, MDBListGroup,
    MDBListGroupItem, MDBNavbar,
    MDBNavbarBrand, MDBNavbarItem,
    MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBRipple
} from 'mdb-react-ui-kit';

export default function Sidebar({ children }) {
    const [showShow, setShowShow] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const { gettoken, logOut } = Auth();
    const toggleShow = () => setShowShow(!showShow);
    const options = {
        showProgress: true,
        showBullets: true,
        exitOnOverlayClick: true,
        exitOnEsc: true,
        nextLabel: 'Next',
        prevLabel: 'Prev',
        // skipLabel: 'Skip',
        hidePrev: true,
        doneLabel: 'Done',
        overlayOpacity: 0.5,
        overlayColor: '#000',
        showStepNumbers: true,
        keyboardNavigation: true,
        scrollToElement: true,
        helperElementPadding: 10,
        showButtons: true
    };
    const steps = [
        {
            element: '.sidebar',
            intro: 'This is your sidebar menu. You can navigate through different sections of your website from here.',
        },
        {
            element: '.dashboard',
            intro: 'This is your dashboard. sYou can view your recent activity, statistics and other information here.',
        }

    ];

    const [stepsenabled, setstepsenabled] = useState(false);

    const onExit = () => setstepsenabled(false)


    useEffect(() => {
        if (isLoaded) {
            setstepsenabled(true)
        }
        else {
            setIsLoaded(true)
        }
    }, [isLoaded])


    return (
        <>
            {/* helooooooooooooooooooooooooooooooooo */}
            <link
                href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
                rel="stylesheet"
            />
            <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
                <div className="position-sticky">
                    <MDBListGroup flush className="mx-3 mt-4">

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded dashboard'>
                                <MDBIcon fas icon="tachometer-alt me-3" />
                                Main Dashboard
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' active aria-current='true'>
                                <MDBIcon fas icon="chart-area me-3" />
                                Website traffic
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="lock me-3" />
                                Password
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="chart-line me-3" />
                                Analitics
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="chart-pie me-3" />
                                SEO
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon far icon="chart-bar me-3" />
                                Orders
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="globe me-3" />
                                International
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="building me-3" />
                                Partners
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="calendar me-3" />
                                Calendar
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="users me-3" />
                                User
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem onClick={() => setstepsenabled(true)} tag='a' href='#' action className='border-0 rounded' >
                                <MDBIcon fas icon="money-bill me-3" />
                                User Guide
                            </MDBListGroupItem>
                        </MDBRipple>
                    </MDBListGroup>
                </div>
            </MDBCollapse>

            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
                        <MDBNavbarToggler
                            type='button'
                            aria-label='Toggle navigation'
                            // onMouseOver={!(showShow) ? toggleShow : undefined}
                            onClick={toggleShow}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBNavbarBrand href='#'>
                            <img
                                src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                                height='30'
                                alt=''
                                loading='lazy'
                            />
                        </MDBNavbarBrand>



                    </MDBNavbarNav>
                    <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">



                        <MDBNavbarItem className='me-3 me-lg-0'>
                            <MDBNavbarLink href='#'>
                                <MDBIcon fas icon='fill-drip' />
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-3 me-lg-0'>
                            <MDBNavbarLink href='#'>
                                <MDBIcon fab icon='github' />
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
                            <MDBBtn rounded onClick={logOut} className='mx-2' color='dark'>
                                Logout
                            </MDBBtn>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                </MDBContainer>
            </MDBNavbar>
            <>

                <Steps
                    enabled={stepsenabled}
                    steps={steps}
                    initialStep={0}
                    onExit={onExit}
                    options={options}
                />
                {children}</>
        </>
    );
}