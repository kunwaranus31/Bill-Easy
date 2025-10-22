import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { bannerLaptop, bannerLogo1, bannerLogo2, bannerLogo3, bannerLogo4, bannerLogo5, bannerLogo6, bannerLogo7, benifitImg1, benifitImg2, benifitImg3, benifitImg4, benifitImg5, blueBg, box1, box2, box3, box4, box5, boxImg1, boxImg2, boxImg3, boxImg4, boxImg5, controlIcon1, controlIcon2, controlIcon3, homeBanner, industries1, industries2, industries3, IndustriesBg, invoicingBg, powerfullImg1, powerfullImg2, powerfullImg3, powerfullImg4, powerfullImg5, review1, review2, review3, videoImg } from '../assets'

import { BoxBg, Faq, FlexBox, GradientButton, HeadingIconText, IconHeadingText, ImageTextBox, JobsiteBox, ResponsiveTypography, StickyWrapper, IconText, ReviewCarousel } from '../component'

import EastIcon from '@mui/icons-material/East';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
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
            pb="30px"
          >
            Discover how businesses like yours are simplifying invoicing, boosting efficiency, and accelerating growth with BillEasy.
          </ResponsiveTypography>

          <ReviewCarousel reviews={[
            {
              image:review1,
              text:"BillEasy has streamlined our entire billing process.",
              quote:"We used to spend hours each week chasing invoices. Now, everything is automated—our team gets paid faster and with zero confusion.",
              name:"Jason M.",
              role:"Construction Project Manager"
            },
            {
              text:"BillEasy has streamlined our entire billing process.",
              quote:"We used to spend hours each week chasing invoices. Now, everything is automated—our team gets paid faster and with zero confusion.",
              name:"Jason M.",
              role:"Construction Project Manager"
            },
            {
              image:review2,
              text:"Payments are faster and more transparent.",
              quote:"Our clients appreciate the clear, milestone-based invoicing. It builds trust and keeps cash flow healthy.",
              name:"Emily W.",
              role:"Developer & Builder"
            },
            {
              image:review3,
              text:"Managing multiple projects has never been easier.",
              quote:"BillEasy gives us the clarity we need to track progress, budgets, and milestones across all developments in real time.",
              name:"Sophia L.",
              role:"Real Estate Developer"
            },
            
          ]} />
        </FlexBox>
      </Box>

      <FlexBox
        sx={{
          display: "block",
          py: 7
        }}>
        <Box
          sx={{
            textAlign: "center",
            mx: "auto",
            width: "100%",
            pb: 3
          }}>
          <ResponsiveTypography
            variant="h2">
            Frequently Asked <Box component="span" color="primary.main" >Questions</Box>
          </ResponsiveTypography>
          <ResponsiveTypography
            variant="h5"
            width="570px"
            pt="10px"
            mx="auto">
            Got questions? We’ve got answers. Here’s everything you need to know about using Bill Easy.
          </ResponsiveTypography>
        </Box>
        <Grid container spacing={{ xs: 0, md: 7 }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Faq items={[
              {
                question: "What is construction management software, and how does it work?",
                answer: "Software that organizes projects, budgets, and invoices in one place. BillEasy adds construction-specific features like holdbacks and milestone billing so the platform fits the real workflow. It is also considered one of the best software for construction in Canada."
              },
              {
                question: "How is BillEasy different from general project tools?",
                answer: "BillEasy models the construction lifecycle from estimate to audit. The platform includes finance controls, contract versioning, and export tools aligned to Canadian practice."
              },
              {
                question: "How can construction management software help me save time and reduce project delays?",
                answer: "BillEasy keeps everything in one place, so you’re not juggling spreadsheets or hunting through emails. Estimates automatically become contracts, schedules update in real time, and invoices connect directly to budgets. That means fewer mistakes, faster approvals, and projects that stay on track across Canada."
              },
              {
                question: "Does this software support project scheduling and real-time progress tracking?",
                answer: "Yes. You can create detailed schedules, assign crews, set milestones, and see live updates from the field. Progress is tracked alongside your budget, so you always know exactly where each project stands."
              },
              {
                question: "Can I manage budgets, costs, and invoices with this software?",
                answer: "Absolutely. BillEasy is built with finances first. Budgets, actual costs, purchase orders, and invoices are all visible in one dashboard, helping you catch overruns early and protect your margins."
              },
              {
                question: "Does BillEasy handle holdbacks and provincial rules?",
                answer: "Yes. You can set up holdbacks for each project and generate reports that follow provincial regulations. BillEasy ensures your financials comply with CRA requirements and construction industry standards across Canada."
              },
              {
                question: "Is the software cloud-based, and can I access it from anywhere on-site or in the office?",
                answer: "Yes. Being cloud-based means you can log in securely from the office, your home, or directly on the jobsite. All you need is an internet connection, and your team can access up-to-date project info anytime."
              },
              {
                question: "Does it integrate with accounting tools like QuickBooks, Xero, or other financial software?",
                answer: "Not at the moment. Integrations with third-party accounting tools are on the roadmap, but today BillEasy focuses on giving contractors a strong all-in-one platform of its own."
              },
              {
                question: "Can subcontractors and field workers easily use the software without advanced technical skills?",
                answer: "Definitely. BillEasy uses role-based dashboards so each team member sees only what they need, be it their daily logs, photos, or approvals. It’s designed to be intuitive for crews of any tech experience level."
              },

            ]} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Faq items={[

              {
                question: "How secure is the data stored in the system, and is it backed up automatically?",
                answer: "BillEasy prioritizes security. The two-factor authentication, audit trails, and encrypted cloud storage, helps keep your data stays safe. Automatic backups ensure you never lose critical project information."
              },
              {
                question: "Does the software allow document sharing, blueprint storage, and version control?",
                answer: "Yes. All your contracts, drawings, permits, and site photos live in one secure space. The latest version is always at the top, so your team is working with the most current documents."
              },
              {
                question: "Can I generate custom reports for clients, budgets, and compliance purposes?",
                answer: "Absolutely. You can create WIP reports, profit analyses, and compliance exports that are fully customizable. Reports can be shared in PDF or CSV formats for accountants, lenders, or clients."
              },
              {
                question: "How flexible is the software in handling multi-project management at the same time?",
                answer: "Very flexible. BillEasy is made for contractors managing multiple jobs. You can track budgets, schedules, and invoices for all your sites in one place while keeping each project organized and on track."
              },
              {
                question: "Can I export data for my accountant?",
                answer: "Yes. Export your project financials in CSV or PDF, along with detailed audit trails, making it simple to share everything with your accountant or lender."
              },
              {
                question: "Is there a mobile app for field crews?",
                answer: "BillEasy can be accessed from any device through its cloud platform. While there isn’t a dedicated mobile app yet, crews can log in from phones or tablets on-site to update tasks and upload reports."
              },
              {
                question: "What kind of customer support and training does the software provider offer?",
                answer: "BillEasy provides Canadian-based onboarding specialists to help set up your first projects, import data, and train your team. Ongoing support is available through helpful articles, ticketing, and direct access to our support team whenever you need it."
              },
              {
                question: "What is the pricing model subscription, one-time payment, or per-user license?",
                answer: "BillEasy is offered as a monthly subscription. Plans starting at just $99/month."
              },
              {
                question: "How do I get started?",
                answer: "Book a demo and speak to a Canadian onboarding specialist who will help import your data and set up your first projects using builder software tools."
              },
            ]} />
          </Grid>
        </Grid>
      </FlexBox>

      <FlexBox
        sx={{
          backgroundImage: `url(${invoicingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          py: 4,
          px: 7,
          borderRadius: 5,
          display: "block",
          mb: 8
        }}>
        <Box
          sx={{
            mx: "auto",
            textAlign: "center"
          }}>
          <ResponsiveTypography
            variant="h2">
            Explore Our <Box component="span" color="primary.main" >Construction Invoicing </Box>Software
          </ResponsiveTypography>
          <ResponsiveTypography
            variant="h5"
            width="800px"
            mx="auto"
            pt="10px">
            Invoicing sits at the heart of construction finance. BillEasy lets you issue branded invoices, link them to milestones and expenses, and track payment status in a single view. Holdbacks are calculated and tracked per provincial rules.
          </ResponsiveTypography>
        </Box>
        <FlexBox sx={{
          px: 0,
          pt: 4
        }}>
          <Box>
            <ResponsiveTypography
              variant="h2">
              Want to see invoicing in action?
            </ResponsiveTypography>
            <ResponsiveTypography
              variant="h3"
              width="580px"
              pt="20px">
              <Typography
                component={Link}
                to="#"
                variant='h3'
                color='primary.main'
              >
                Request a demo</Typography> and we’ll walk through a sample project from estimate to paid invoice using construction billing software.
            </ResponsiveTypography>
            <FlexBox sx={{
              px: 0,
            }} >
              <GradientButton buttonText="Request a Free Demo" btnlink="#" />
              <Button
                variant="text"
                component={Link}
                to="#"
                endIcon={<EastIcon />}

                sx={{
                  p: 0,
                  color: "primary.main",
                  "&:hover": {
                    background: "none"
                  }
                }}
              >
                Join Our Free Beta
              </Button>
            </FlexBox>
          </Box>
          <Box>
            <Box
              component="img"
              src={videoImg}
              width="100%"
            />
          </Box>
        </FlexBox>
      </FlexBox>




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
