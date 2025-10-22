import { Box, Typography } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import FlexBox from './FlexBox'
import { financialAutomationImg1, iconImg1, iconImg2, iconImg3, financialAutomationImg2, financialAutomationImg3 } from '../assets'

const AutomationSection = () => {
    const [activeBox, setActiveBox] = useState(0); // Track which box is active (0 - 1st, 1 - 2nd, 2 - 3rd)
    const [sectionInView, setSectionInView] = useState(false); // Track if the section is in view

    const sectionRef = useRef(null); // Reference to the section
    const boxRefs = [useRef(), useRef(), useRef()]; // Refs for each box to track visibility

    const boxInfo = [
        { title: 'Auto Alerts', description: 'Get notified before costs go overdue.', icon: iconImg1 },
        { title: 'Approval Workflows', description: 'Keep spending under control.', icon: iconImg2 },
        { title: 'Role-Based Dashboards', description: 'Show the right numbers to the right people.', icon: iconImg3 },
    ];

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // If the section is in view, it becomes sticky
                if (entry.isIntersecting) {
                    setSectionInView(true);
                } else {
                    setSectionInView(false);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.5,
        });

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            sectionObserver.disconnect(); // Cleanup observer
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            boxRefs.forEach((ref, index) => {
                const boxTop = ref.current.getBoundingClientRect().top;
                const boxHeight = ref.current.getBoundingClientRect().height;

                // Change box color when it comes into view
                if (boxTop <= window.innerHeight * 0.5 && boxTop + boxHeight >= 0) {
                    setActiveBox(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box>
            {/* Sticky Section */}
            <FlexBox ref={sectionRef} sx={{
                p: 0,
                gap: 12,
                position: sectionInView ? 'sticky' : 'relative', // Make section sticky when in view
                top: 0,
                zIndex: 1,
            }}>

                {/* Left Image */}
                <Box>
                    <Box component="img" src={activeBox === 0 ? financialAutomationImg1 : activeBox === 1 ? financialAutomationImg2 : financialAutomationImg3} sx={{
                        width: { xs: "100%", md: "600px" },
                    }} />
                </Box>

                {/* Right Boxes */}
                <Box>
                    {boxInfo.map((box, index) => (
                        <Box
                            key={index}
                            ref={boxRefs[index]} // Attach ref to each box for visibility tracking
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                px: 2,
                                borderLeft: "4px solid",
                                borderColor: "primary.main",
                                filter: activeBox === index ? "none" : "grayscale(100%)", // Apply grayscale to non-active boxes
                                transition: "filter 0.3s ease", // Smooth transition for grayscale effect
                                my: index === 1 ? 4 : 0, // Add spacing between the second and third box
                                pl:3
                            }}
                        >
                            <Box>
                                <Box component="img" src={box.icon} sx={{
                                    width: "35px"
                                }} />
                            </Box>
                            <Box>
                                <Typography variant="h3" color={activeBox === index ? 'primary.main' : 'text.secondary'}>
                                    {box.title}
                                </Typography>
                                <Typography variant='h5' color={activeBox === index ? 'text.primary' : 'text.secondary'}>
                                    {box.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </FlexBox>

            
        </Box>
    );
};

export default AutomationSection;
