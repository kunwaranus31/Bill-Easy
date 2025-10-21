import React, { useState, useRef } from 'react'
import FlexBox from './FlexBox'
import { Box, Divider, Typography, IconButton } from '@mui/material'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const ReviewCarousel = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const containerRef = useRef(null)

    const handlePrev = () => {
        setIsTransitioning(true)
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        )
        setDragOffset(0)
        setTimeout(() => setIsTransitioning(false), 500)
    }

    const handleNext = () => {
        setIsTransitioning(true)
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        )
        setDragOffset(0)
        setTimeout(() => setIsTransitioning(false), 500)
    }

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.clientX)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        const diff = e.clientX - startX
        setDragOffset(diff)
    }

    const handleMouseUp = (e) => {
        setIsDragging(false)
        const diff = e.clientX - startX
        const threshold = 50

        if (diff > threshold) {
            handlePrev()
        } else if (diff < -threshold) {
            handleNext()
        }
        setDragOffset(0)
    }

    const handleTouchStart = (e) => {
        setIsDragging(true)
        setStartX(e.touches[0].clientX)
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        const diff = e.touches[0].clientX - startX
        setDragOffset(diff)
    }

    const handleTouchEnd = (e) => {
        setIsDragging(false)
        const diff = e.changedTouches[0].clientX - startX
        const threshold = 50

        if (diff > threshold) {
            handlePrev()
        } else if (diff < -threshold) {
            handleNext()
        }
        setDragOffset(0)
    }

    const getVisibleReviews = () => {
        const itemsPerPage = 2
        const visible = []
        for (let i = 0; i < itemsPerPage; i++) {
            visible.push(reviews[(currentIndex + i) % reviews.length])
        }
        return visible
    }

    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <FlexBox
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                sx={{
                    gap: 3,
                    overflow: 'hidden',
                    pb: 2,
                    transition: isDragging ? 'none' : 'all 0.5s ease-in-out',
                    transform: `translateX(${dragOffset}px)`,
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                }}
            >
                {getVisibleReviews().map((review, index) => (
                    <FlexBox
                        key={index}
                        sx={{
                            borderRadius: 3,
                            padding: "20px",
                            backgroundColor: "#fff",
                            border: "1px solid",
                            borderColor: "primary.main",
                            maxWidth: review.image ? "560px" : "335px",
                            gap: 2,
                            flexDirection: {xs:"column", md:review.image ? "row" : "column"},
                            flex: "1 1 calc(33.333% - 24px)",
                            minWidth: "280px",
                            height:{md:"310px"},
                            justifyContent:"center",
                            pointerEvents: isDragging ? 'none' : 'auto',
                            animation: isTransitioning ? `slideIn 0.5s ease-in-out` : 'none',
                            '@keyframes slideIn': {
                                from: {
                                    opacity: 0,
                                    transform: 'translateX(20px)',
                                },
                                to: {
                                    opacity: 1,
                                    transform: 'translateX(0)',
                                },
                            },
                        }}>
                        {review.image && (
                            <Box
                                sx={{
                                    flexShrink: 0,
                                    width: "200px",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={review.image}
                                    sx={{
                                        width: "100%",
                                        borderRadius: 3,
                                    }}
                                />
                            </Box>
                        )}
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 600, mb: 1 }}
                            >
                                {review.text}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    mb: 3,
                                    flex: 1,
                                }}
                            >
                                {review.quote}
                            </Typography>

                            <Divider
                                sx={{
                                    height: "1px",
                                    border: "none",
                                    background:
                                        "linear-gradient(to right, #FFFFFF, #140F2A, #FFFFFF)",
                                    mb: 2,
                                }}
                            />

                            <Box>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                    {review.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {review.role}
                                </Typography>
                            </Box>
                        </Box>
                    </FlexBox>
                ))}
            </FlexBox>

            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    right: 70,
                    top: -100,
                     color: 'primary.main',
                    border:"1px solid",
                    borderColor:"primary.main",
                    px:4,
                    borderRadius:6,
                    zIndex: 10,
                    width: 44,
                    height: 44,
                    transition: 'all 0.3s ease',
                    '&:active': {
                        transform: 'scale(0.95)',
                    }
                }}
            >
                <WestIcon />
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: -100,
                    color: 'primary.main',
                    border:"1px solid",
                    borderColor:"primary.main",
                    px:4,
                    borderRadius:6,
                    zIndex: 10,
                    width: 44,
                    height: 44,
                    transition: 'all 0.3s ease',
                    '&:active': {
                        transform: 'scale(0.95)',
                    }
                }}
            >
                <EastIcon />
            </IconButton>
        </Box>
    )
}

export default ReviewCarousel