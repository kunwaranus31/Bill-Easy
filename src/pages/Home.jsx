import { Box, Button  } from '@mui/material'
import React from 'react'
import { bannerLaptop, bannerLogo1, bannerLogo2, bannerLogo3, bannerLogo4, bannerLogo5, bannerLogo6, bannerLogo7, benifitImg1, benifitImg2, benifitImg3, benifitImg4, benifitImg5, blueBg, controlIcon1, controlIcon2, controlIcon3, homeBanner } from '../assets'
import { BoxBg, FlexBox, ResponsiveTypography  } from '../component'
import EastIcon from '@mui/icons-material/East';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconText from '../component/IconText';
import GradientButton from '../component/GradientButton';
import HeadingIconText from '../component/HeadingIconText';

const Home = () => {


  const logoImages = [
    bannerLogo1,
    bannerLogo2,
    bannerLogo3,
    bannerLogo4,
    bannerLogo5,
    bannerLogo6,
    bannerLogo7,
  ];


  return (
    <Box>
      <BoxBg
        bgImage={homeBanner}
        sx={{
          overflow: "visible",
          position: "relative"
        }}
      >
        <FlexBox
          sx={{
            display: "block",
            pb: "320px",
            pt:15

          }}
        >
          <Box
            sx={{
              textAlign: "center"
            }}
          >
            <ResponsiveTypography 
              variant='h1'
              width="1100px"
              sx={{
                mx:"auto"
              }}
            >
              Canada’s <Box component="span" color="primary.main" >Construction</Box> Project Management <Box component="span" color="primary.main" >Software</Box> for Builders Who Want Control
            </ResponsiveTypography >
            <ResponsiveTypography 
              variant='h5'
              width="600px"
              sx={{
                pt: 2,
                mx:"auto",
              }}
            >
              Track budgets, manage crews, and stay audit-ready across every project. BillEasy gives you clarity from day one to close-out.
            </ResponsiveTypography >
          </Box>
          <FlexBox sx={{
            justifyContent: "center",
            py: 5
          }} >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(to right, #073E7A, #0C71E0)",
              }}
              endIcon={
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "40px",
                    bgcolor: "#fff",
                    display: "grid",
                    placeItems: "Center",
                    ml: 1
                  }}
                >
                  <EastIcon
                    sx={{
                      color: "primary.main",
                      width: "15px"
                    }}
                  />
                </Box>
              }>
              Book Free Demo
            </Button>
            <Box>
              <Box>
                <ResponsiveTypography 
                variant='h5'
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    
                  }}
                >
                  <PlayCircleIcon
                    fontSize="large"
                  // sx={{
                  //   weight:"50px",
                  //   height:"50px"
                  // }} 
                  />
                  Watch How It Works
                </ResponsiveTypography >
              </Box>
            </Box>
          </FlexBox>

          <Box sx={{
            textAlign: "center"
          }} >
            <ResponsiveTypography  variant='h3'>
              Trusted By <Box component="span" color="primary.main" >Over 100+</Box> Construction Organization
            </ResponsiveTypography >

            <FlexBox
              sx={{
                gap: 0,
                justifyContent: "center",
                pt: 1,
                pb: 10
              }}
            >
              {
                logoImages.map((image, index) => (
                  <Box key={index} component="img" src={image} />
                ))
              }
            </FlexBox>
          </Box>

          <Box component="img"
            sx={{
              display: "flex",
              width: {xs:"100%" ,lg:"1000px"},
              justifySelf: "center",
              zIndex: 1,
              position: "absolute"
            }}
            src={bannerLaptop} />
        </FlexBox>
      </BoxBg>

      <FlexBox
        sx={{
          display: "block",
          pt: 40,
          pb: 5,
          textAlign: "center",
          margin: "0 auto",
          placeItems: "center"
        }}
      >
        <ResponsiveTypography 
          variant='h2'
          width="730px"
        >
          Take control of <Box component="span" color="primary.main" >your projects</Box> and get <Box component="span" color="primary.main" >paid on time</Box>-every single time!
        </ResponsiveTypography >
        <ResponsiveTypography 
          sx={{
            py: 3,
            width: "1250px"
          }}
        >
          Every builder knows the dread of month-end: missing receipts, late invoices, and a stack of paperwork that eats evenings. That’s exactly why we built BillEasy. It’s Canada’s construction financial and project management software built for contractors. BillEasy also works as a construction organization software that helps streamline projects from estimates to reports.
        </ResponsiveTypography >
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #073E7A, #0C71E0)",
          }}
          endIcon={
            <Box
              sx={{
                width: 30,
                height: 30,
                borderRadius: "40px",
                bgcolor: "#fff",
                display: "grid",
                placeItems: "Center",
                ml: 1
              }}
            >
              <EastIcon
                sx={{
                  color: "primary.main",
                  width: "15px"
                }}
              />
            </Box>
          }>
          <ResponsiveTypography  variant='h5' >

            Request beta access
          </ResponsiveTypography >
        </Button>
        <IconText
          items={[
            { image: controlIcon1, text: "Get Paid Faster" },
            { image: controlIcon2, text: "Control Costs" },
            { image: controlIcon3, text: "Build With Confidence." },
          ]}
        />
      </FlexBox>
      <Box
        sx={{
          py: 6
        }} >
        <FlexBox
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start"
          }} >
          <Box>
            <ResponsiveTypography  variant='h2'
              width="600px"
            >
              Why <Box component="span" color="primary.main" >Canadian Builders</Box> and Contractors Choose <Box component="span" color="primary.main" >BillEasy</Box>
            </ResponsiveTypography >
            <ResponsiveTypography  variant='h3'
              width="460px"
              sx={{
                pt: 1
              }}
            >
              BillEasy was founded by builders, for builders, to solve this exact problem.
            </ResponsiveTypography >
          </Box>
          <Box>
            <ResponsiveTypography  variant='body'
              sx={{
                display: "block",
                width: "545px"
              }}
            >
              Canadian construction isn’t like anywhere else. Between provincial lien acts, complex holdback regulations, HST reporting, and the sheer pace of project work, your bottom line is constantly under pressure. You became a builder to build, but too often your nights are lost to financial chaos across disconnected apps and endless paper trails.
            </ResponsiveTypography >
            <GradientButton buttonText="Read More" btnlink="#" />
          </Box>
        </FlexBox>
      </Box>

      <FlexBox
        sx={{
          display: "block",
          pb: 5
        }}
      >
        <Box
          sx={{
            placeItems: 'center'
          }}        >
          <ResponsiveTypography  variant='h3' width="480px" textAlign="center" >
            <Box component="span" color="primary.main" >Key Benefits</Box> That Keep Your Projects and Cash Flow on Track
          </ResponsiveTypography >
        </Box>
        <Box sx={{
          pt: 4
        }} >
          <HeadingIconText
            items={[
              { heading: "Financial insights that protect your margins", image: benifitImg1, text: "Turn an estimate into a contract in minutes. Assign crews, set milestones, and track progress on a single calendar. Daily logs and field updates land where your project manager is looking, not buried in a chain of messages.", containerWidth: "400px" },
              { heading: "Project efficiency that actually helps your day", image: benifitImg2, text: "Stop guessing about profitability. Real-time WIP reporting shows committed costs, actual costs, and forecasted outcomes. Spot overruns early, make corrections on time, and avoid surprises at close-out.", containerWidth: "400px" },
              { heading: "Invoicing that gets results", image: benifitImg3, text: "Send branded invoices tied to milestones and holdbacks. Automate reminders and accept payments the way clients prefer. Bulk invoices, recurring billing, and payment tracking reduce cash flow friction and shorten pay cycles.", containerWidth: "400px", headingWidth: "200px" },
            ]}
          />
        </Box>
        <Box sx={{
          py: 4
        }} >
          <HeadingIconText items={[
            { heading: "Working together to remove obstacles", image: benifitImg4, text: "Role-based dashboards keep project managers, foremen, and office staff focused on the right tasks. Approval workflows cut email back-and-forth. When a signature is needed, the request goes directly to the right person so work keeps moving.", containerWidth: "620px", textWidth: "515px" },
            { heading: "Compliance that saves time", image: benifitImg5, text: "Stop guessing about profitability. Real-time WIP reporting shows committed costs, actual costs, and forecasted outcomes. Spot overruns early, make corrections on time, and avoid surprises at close-out. Reports are export-ready for accountants and lenders.", containerWidth: "620px", textWidth: "515px" },
          ]} />
        </Box>
      </FlexBox>
      <FlexBox sx={{
        display: "block",
        backgroundImage: `url(${blueBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 6,
        borderRadius: 5,
        textAlign: "center",
        color: "#fff",
        mt: 3,
        mb: 7
      }} >
        <ResponsiveTypography  variant='h2' >
          One Platform, Every Stage of Your Build
        </ResponsiveTypography >
        <ResponsiveTypography  variant='h3' sx={{
          py: 1
        }} >
          Construction moves fast, and paperwork slows you down.
        </ResponsiveTypography >
        <ResponsiveTypography  variant='h5'
            width= "850px"
          sx={{
            display: 'block',
            placeSelf: "center"
          }}
        >
          BillEasy ties estimates, contracts, schedules, invoices, and audits into one connected system built for Canadian rules and real jobsite demands. The result? Less chasing, fewer delays, and more time building.
        </ResponsiveTypography >
        <FlexBox sx={{
          justifyContent: "center",
          py: 5
        }} >
          <Button
            variant="contained"
            sx={{
              background: "#fff",
              color: "primary.main"
            }}
            endIcon={
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: "40px",
                  bgcolor: "primary.main",
                  display: "grid",
                  placeItems: "Center",
                  ml: 1
                }}
              >
                <EastIcon
                  sx={{
                    color: "#fff",
                    width: "15px"
                  }}
                />
              </Box>
            }>
            Book Free Demo
          </Button>
          <Box>
            <Box>
              <ResponsiveTypography 
              variant='h5'
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center"
                }}
              >
                <PlayCircleIcon
                  fontSize="large"
                // sx={{
                //   weight:"50px",
                //   height:"50px"
                // }} 
                />
                Watch How It Works
              </ResponsiveTypography >
            </Box>
          </Box>
        </FlexBox>
      </FlexBox>
      <FlexBox sx={{
        display:"block"
      }}>
        <Box
          sx={{
            textAlign: "center"
          }}
        >
          <ResponsiveTypography 
            variant='h3'
            color="primary.main"
            width= "280px"
            sx={{
              background: "#F2F9FF",
              borderRadius: 9,
              p: "10px 10px",
              placeSelf: "center"
            }} >
            The Bill Easy Difference:
          </ResponsiveTypography >
          <ResponsiveTypography  variant='h2'sx={{
            py:2
          }} >
            A Flow that Matches the <Box component="span" color="primary.main" >Jobsite</Box>
          </ResponsiveTypography >
          <ResponsiveTypography 
            width= "800px"
            variant='h5'
            sx={{
              placeSelf: "center"
            }} >
            Construction projects move through predictable stages. BillEasy mirrors that flow. The result is less double-entry, fewer mistakes, and clearer accountability across teams. Here is how the workflow keeps your business tight.

          </ResponsiveTypography >
        </Box>
      </FlexBox>

    </Box>
  )
}

export default Home
