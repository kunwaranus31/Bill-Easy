import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { bannerLaptop, bannerLogo1, bannerLogo2, bannerLogo3, bannerLogo4, bannerLogo5, bannerLogo6, bannerLogo7, benifitImg1, benifitImg2, benifitImg3, benifitImg4, benifitImg5, blueBg, box1, box2, box3, box4, box5, boxImg1, boxImg2, boxImg3, boxImg4, boxImg5, controlIcon1, controlIcon2, controlIcon3, homeBanner, industries1, industries2, industries3, IndustriesBg, powerfullImg1, powerfullImg2, powerfullImg3, powerfullImg4, powerfullImg5 } from '../assets'
import { BoxBg, FlexBox, ImageTextBox, JobsiteBox, ResponsiveTypography } from '../component'
import EastIcon from '@mui/icons-material/East';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconText from '../component/IconText';
import GradientButton from '../component/GradientButton';
import HeadingIconText from '../component/HeadingIconText';
import IconHeadingText from '../component/IconHeadingText';
import StickyWrapper from '../component/StickyWrapper';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';


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
            pt: 15

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
                mx: "auto"
              }}
            >
              Canada’s <Box component="span" color="primary.main" >Construction</Box> Project Management <Box component="span" color="primary.main" >Software</Box> for Builders Who Want Control
            </ResponsiveTypography >
            <ResponsiveTypography
              variant='h5'
              width="600px"
              sx={{
                pt: 2,
                mx: "auto",
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
            <ResponsiveTypography variant='h3'>
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
              width: { xs: "100%", lg: "1000px" },
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
          <ResponsiveTypography variant='h5' >

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
            <ResponsiveTypography variant='h2'
              width="600px"
            >
              Why <Box component="span" color="primary.main" >Canadian Builders</Box> and Contractors Choose <Box component="span" color="primary.main" >BillEasy</Box>
            </ResponsiveTypography >
            <ResponsiveTypography variant='h3'
              width="460px"
              sx={{
                pt: 1
              }}
            >
              BillEasy was founded by builders, for builders, to solve this exact problem.
            </ResponsiveTypography >
          </Box>
          <Box>
            <ResponsiveTypography variant='body'
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
          <ResponsiveTypography variant='h3' width="480px" textAlign="center" >
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
        <ResponsiveTypography variant='h2' >
          One Platform, Every Stage of Your Build
        </ResponsiveTypography >
        <ResponsiveTypography variant='h3' sx={{
          py: 1
        }} >
          Construction moves fast, and paperwork slows you down.
        </ResponsiveTypography >
        <ResponsiveTypography variant='h5'
          width="850px"
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
        display: "block"
      }}>
        <Box
          sx={{
            textAlign: "center",
            pb: 4
          }}
        >
          <ResponsiveTypography
            variant='h3'
            color="primary.main"
            width="280px"
            sx={{
              background: "#F2F9FF",
              borderRadius: 9,
              p: "10px 10px",
              placeSelf: "center"
            }} >
            The Bill Easy Difference:
          </ResponsiveTypography >
          <ResponsiveTypography variant='h2' sx={{
            py: 2
          }} >
            A Flow that Matches the <Box component="span" color="primary.main" >Jobsite</Box>
          </ResponsiveTypography >
          <ResponsiveTypography
            width="800px"
            variant='h5'
            sx={{
              placeSelf: "center"
            }} >
            Construction projects move through predictable stages. BillEasy mirrors that flow. The result is less double-entry, fewer mistakes, and clearer accountability across teams. Here is how the workflow keeps your business tight.

          </ResponsiveTypography >
        </Box>
      </FlexBox>
      <Box>

        <Box>
          <StickyWrapper zIndex={1} index={5} total={5}>
            <JobsiteBox fromColor="#F1F9FF" toColor="#FFFFFF" heading="Estimate with clarity" numImg={box1} text="Build estimates using construction-specific templates that include materials, labor, subcontractor rates, taxes, and proposed holdbacks. Your bids look professional and tell a clear story about expected costs and margins. Pre-construction software makes estimating a way to win work, not a source of stress." img={boxImg1} direction="row" />
          </StickyWrapper>

          <StickyWrapper zIndex={2} index={4} total={5}>
            <JobsiteBox fromColor="#FFFFFF" toColor="#F1F9FF" heading="Convert to contract without friction" numImg={box2} text="Whenever a client accepts an estimate, convert it into a construction contract instantly. Add milestone payments, set holdback percentages, attach scope documents, and capture e-signatures. In order to make sure that nothing is overlooked, contracts are automatically linked to the construction project budget and future invoices." img={boxImg2} direction="row-reverse" textWidth="500px" />
          </StickyWrapper>

          <StickyWrapper zIndex={3} index={3} total={5}>
            <JobsiteBox fromColor="#F1F9FF" toColor="#FFFFFF" heading="Plan and execute the task in real time." numImg={box3} text="Create a consolidated timetable for daily chores and milestones. Using a construction planning software and construction management software, assign teams, reserve resources, and monitor labor hours in relation to budgets. Update the schedule and notify the team right away if site conditions change. The task list and calendar cease to be static files and become functional tools." img={boxImg3} textWidth="530px" direction="row" />
          </StickyWrapper>

          <StickyWrapper zIndex={4} index={2} total={5}>
            <JobsiteBox fromColor="#FFFFFF" toColor="#F1F9FF" heading="Quicker invoicing and reconciliation" numImg={box4} text="Create progress invoices based on milestones, send branded PDF invoices with secure payment links, and apply holdbacks as necessary. Automated reminders cut down on overdue balances. Each payment ties back to the construction project software and project budget so reconciliation is straightforward." img={boxImg4} direction="row-reverse" textWidth="510px" />
          </StickyWrapper>

          <StickyWrapper zIndex={5} index={1} total={5}>
            <JobsiteBox fromColor="#F1F9FF" toColor="#FFFFFF" heading="Report and audit with confidence" numImg={box5} text="Run WIP statements, project profitability reports, and export audit-ready documents in multiple formats. Every entry keeps a versioned history so you can explain changes, support claims, and hand clean books to your accountant or a lender using financial construction management software online." img={boxImg5} textWidth="530px" direction="row" />
          </StickyWrapper>
        </Box>

      </Box>

      <FlexBox
        sx={{
          alignItems: "stretch",
          py: 7,
          justifyContent: "center",
          mt: 9
        }}>
        <Box
          sx={{
            backgroundImage: `url(${IndustriesBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            py: 4,
            px: 7,
            color: "#ffff",
            borderRadius: 4,
            alignContent: "center"
          }}>
          <ResponsiveTypography
            variant="h1"
            width="250px"
          >
            Industries We Serve
          </ResponsiveTypography>
          <ResponsiveTypography
            variant="h5"
            width="300px"
            sx={{
              py: 2
            }}
          >
            Built for every role on the job site - from contractors to developers and project managers - BillEasy adapts to the way you build.
          </ResponsiveTypography>
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
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}>
          <IconHeadingText items={[
            { heading: "Construction Contractors", text: "From framing crews to subcontractors, BillEasy removes the admin burden that eats time and margins. Track labor, parts, and subcontractor invoices in one place so payments and punch lists are straightforward using construction company software.", image: industries1, containerWidth: "805px" },
            { heading: "Builders & Developers", text: "Manage multiple builds, phase billing, and complex change orders while keeping a clear view of cash flow and completion timelines with builders software. This makes BillEasy a reliable building construction software that supports both small and large-scale projects.", image: industries2, containerWidth: "805px" },
            { heading: "Construction Project Managers", text: "Run safer, cleaner projects. Access the data that matters-schedules, budget variance, and contractor performance, without hunting through emails or spreadsheets using construction management platform.", image: industries3, containerWidth: "805px" },
          ]} />
        </Box>
      </FlexBox>

      <FlexBox
        sx={{
          display: "block",
          pb: 4
        }}>
        <Box
          sx={{
            textAlign: "center"
          }}>
          <ResponsiveTypography
            variant="h2"
            // display='block'
            width="500px"
            mx="auto"
          >
            <Box component="span" color="primary.main">Powerful Features</Box> for Every Part of Your <Box component="span" color="primary.main">Project</Box>
          </ResponsiveTypography>
          <ResponsiveTypography
            variant="body"
            display='block'
            width="620px"
            mx="auto"
            py="20px"
          >
            From estimates to final handoff, Bill Easy keeps your team, finances, and paperwork in sync — so you can build efficiently, stay compliant, and protect your margins.
          </ResponsiveTypography>
          <FlexBox
            sx={{
              justifyContent: "center",
              px: 0,
              pt: 4
            }}>
            <Box>
              <ImageTextBox heading="Project Scheduling & Tracking" text="Construction schedules don’t have to be a nightmare. Build a master plan, break it into daily tasks, and assign each one to the right trade. Timelines are easy to set and just as easy" image={powerfullImg1} containerWidth="500px" btnlink="#" />
            </Box>
            <Box>
              <ImageTextBox heading="Budgeting & Financial Management" text="Money runs a project. That’s why our construction financial management software keeps your budget and actuals side by side. Every purchase order, invoice, or change order" image={powerfullImg2} containerWidth="500px" btnlink="#" />
            </Box>
          </FlexBox>
          <FlexBox
            sx={{
              justifyContent: "center",
              py: 5,
              px: 0
            }}>
            <Box>
              <ImageTextBox heading="Document & Contract Management" text="Paper piles slow everyone down. Here, all drawings, permits, contracts, and even site photos live in one secure record. The latest version is always at the top, so there’s no" image={powerfullImg3} containerWidth="500px" btnlink="#" />
            </Box>
            <Box>
              <ImageTextBox heading="Team & Client Communication" text="Forget endless email threads. Each project has its own space for messages, comments, and quick @mentions. Clients get a simple portal too-they can check progress, " image={powerfullImg4} containerWidth="500px" />
            </Box>
          </FlexBox>
          <Box
            sx={{
              justifySelf: "center"
            }}>
            <ImageTextBox heading="Reporting & Analytics" text="When questions about cash flow or profit come up, answers are ready in minutes. Custom dashboards track outstanding invoices, WIP, and job-level performance." image={powerfullImg5} containerWidth="1050px" display="flex" contentWidth="410px" />
          </Box>
        </Box>
      </FlexBox>

      <Box
        sx={{
          backgroundColor: "#F2F9FF",
          py: 9
        }}>
        <FlexBox
          sx={{
            display: "block"
          }}>
          <Typography
            variant='h2'
            color="primary.main"
          >
            Success Stories
          </Typography>


          <ResponsiveTypography
            variant='h3'
            width="900px"
            pt="10px"
          >
            Discover how businesses like yours are simplifying invoicing, boosting efficiency, and accelerating growth with BillEasy.
          </ResponsiveTypography>


        </FlexBox>
      </Box>
      <FlexBox
        sx={{
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
        }}>
        <ResponsiveTypography
          variant="h2">
          Stop running your business on scattered files.
        </ResponsiveTypography>
        <ResponsiveTypography
          variant="h5"
          width="920px"
          sx={{
            placeSelf: "center",
            py: 2
          }}
        >
          BillEasy gives Canadian contractors one platform for estimates, contracts, scheduling, invoicing, and audit-ready reporting. Protect your margins, shorten payment cycles, and keep every job on the right track.
        </ResponsiveTypography>
        <ResponsiveTypography
          variant="h3"
          width="750px"
          sx={{
            placeSelf: "center",

          }}>
          Plans start at just $99/month. Book a demo today or request beta access to try the platform on a real job.
        </ResponsiveTypography>
        <FlexBox sx={{
          justifyContent: "center",
          pt: 5
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
            Book a Demo
          </Button>
          <Button
            variant="text"
            component={Link}
            to="#"
            endIcon={<ChevronRightIcon />}

            sx={{
              p: 0,
              color: "#fff",
              "&:hover": {
                background: "none"
              }
            }}
          >
            Request beta access
          </Button>
        </FlexBox>
      </FlexBox>
    </Box>
  )
}

export default Home
