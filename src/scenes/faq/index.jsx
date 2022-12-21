import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently asked questions" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        So how do I hire a handsome, brilliant css prodidy?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Simple my friend. Just write to <a href="mailto:tsumirez@zoho.com">my mail</a> and share your problem.
                        Now i won't get your wife to lose weight or dog to stop barking all the time, but if your website needs to be
                        faster or way faster, I'm your guy!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Why CSS?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Because it's the huge gaping hole of modern web development. Eeeeeverybody knows css.
                        Same for karate. But how many are black belts?
                        True CSS knowledge sets one miles apart from competition, expecially when it comes to making
                        lightning fast website with visuals vastly superior to the industry norm, which lets be honest
                        is blandness and bloat incarnate.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What of Javascript then?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Javascript is one of three fundamental languages of the web, and obviously has it's place.
                        But a true website is a mixture of technology and art, while programmers who are often 
                        aesthetically inept try to force solve everything with javascript, often pushing square peg
                        into round hole, because they specialize in square peg only.
                        They can't really be blamed here, as IT job market focuses on latest and greatest wrapped in buzzwords
                        often ignoring strong fundamentals along with balanced and moderate use of scripting.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some other question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga sunt est at repudiandae. Accusantium numquam nisi quos tempore esse? Quisquam officia asperiores placeat corrupti nulla similique nostrum minus sit.
                        Autem, cupiditate distinctio perferendis beatae exercitationem ratione quo, voluptatibus qui totam non fugiat, delectus eum possimus nemo doloribus officiis voluptates consequatur nisi? Culpa vel velit optio accusantium! Expedita, repellat eveniet.
                        Voluptates asperiores vel sed incidunt veniam debitis fugiat labore aperiam rem dolor quasi facilis odio, perspiciatis recusandae molestiae sunt! Culpa velit nam impedit deleniti id tenetur voluptatibus magni voluptates sequi.
                        Possimus eaque illum dolor officia hic quae! Earum ipsam repellat similique nesciunt reprehenderit dolorum sed nulla explicabo ipsa numquam harum sequi tempora optio voluptate, culpa libero eos molestiae quis dolores.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga sunt est at repudiandae. Accusantium numquam nisi quos tempore esse? Quisquam officia asperiores placeat corrupti nulla similique nostrum minus sit.
                        Autem, cupiditate distinctio perferendis beatae exercitationem ratione quo, voluptatibus qui totam non fugiat, delectus eum possimus nemo doloribus officiis voluptates consequatur nisi? Culpa vel velit optio accusantium! Expedita, repellat eveniet.
                        Voluptates asperiores vel sed incidunt veniam debitis fugiat labore aperiam rem dolor quasi facilis odio, perspiciatis recusandae molestiae sunt! Culpa velit nam impedit deleniti id tenetur voluptatibus magni voluptates sequi.
                        Possimus eaque illum dolor officia hic quae! Earum ipsam repellat similique nesciunt reprehenderit dolorum sed nulla explicabo ipsa numquam harum sequi tempora optio voluptate, culpa libero eos molestiae quis dolores.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga sunt est at repudiandae. Accusantium numquam nisi quos tempore esse? Quisquam officia asperiores placeat corrupti nulla similique nostrum minus sit.
                        Autem, cupiditate distinctio perferendis beatae exercitationem ratione quo, voluptatibus qui totam non fugiat, delectus eum possimus nemo doloribus officiis voluptates consequatur nisi? Culpa vel velit optio accusantium! Expedita, repellat eveniet.
                        Voluptates asperiores vel sed incidunt veniam debitis fugiat labore aperiam rem dolor quasi facilis odio, perspiciatis recusandae molestiae sunt! Culpa velit nam impedit deleniti id tenetur voluptatibus magni voluptates sequi.
                        Possimus eaque illum dolor officia hic quae! Earum ipsam repellat similique nesciunt reprehenderit dolorum sed nulla explicabo ipsa numquam harum sequi tempora optio voluptate, culpa libero eos molestiae quis dolores.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ