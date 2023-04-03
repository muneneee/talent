import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How does Talent Assessment recommend careers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We use a unique algorithm that takes into account your grades, talents, hobbies, and course category to recommend careers that best fit your profile. Our algorithm is constantly being updated and improved to provide the most accurate and personalized recommendations possible.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is Talent Assessment free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, our website is completely free to use. We believe that everyone should have access to the tools and resources they need to succeed in their career journey.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I trust the recommendations provided by Talent Assessment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, our algorithm is based on extensive research and analysis of career data. We use a variety of reliable sources to ensure that our recommendations are accurate and up-to-date.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What if I don't like the recommended careers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our algorithm is designed to provide a list of potential careers that match your profile. However, we understand that not every career is right for everyone. That's why we encourage you to explore the recommended careers and do your own research to determine which one is the best fit for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I sign up?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Simply visit our homepage and enter your information to create an account. It's quick and easy!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I contact you if I have questions or concerns?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can contact us by visiting our Contact Us page and send an email or make a call. We will get back to you as soon as possible.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is my personal information secure on this career recommendation platform?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we take the security of your personal information very seriously. We use industry-standard security measures to protect your data and ensure that it is not shared with third parties without your consent.         
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  
  );
}