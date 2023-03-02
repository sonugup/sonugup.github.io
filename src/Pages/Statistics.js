import React from "react";
import {
  Stack,
  Box,
  Heading,
  Center,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';
const Statistics = () => {
  return (
    <Stack id="cal" bg="#16161a" p={6} color="white" fontFamily="Calibri Light" mb="60px">
      <Heading    textDecoration="underline white solid 2px"
        textUnderlineOffset="15px"
        fontSize={["30px", "40px"]}
        letterSpacing={5}
        fontWeight={300}
        pb={20}
        fontFamily={"Titillium Web"}
        pt={3}
        >
        _STATISTICS_
      </Heading>
      <SimpleGrid
        justify="space-evenly"
        color="whiteSmoke"
        columns={[3, 3, 5, 5]}
      >
        <Box align="center">
          <Heading color="#2cb67d">1200+</Heading>
          <Text>hours of coding</Text>
        </Box>
        <Box>
          <Heading color="#2cb67d">500+</Heading>
          <Text>hours of DSA</Text>
        </Box>

        <Box>
          <Heading color="#2cb67d">7</Heading>
          <Text>Months of Training</Text>
        </Box>
        <Box>
          <Heading color="#2cb67d">7</Heading>
          <Text>Projects Completed</Text>
        </Box>
        <Box w="80%">
          <Heading color="#2cb67d">7</Heading>
          <Text>Months of training on interpersonal skills</Text>
        </Box>
      </SimpleGrid>
      <Text color="#2cb67d" fontWeight="bold" textDecoration="underline"  textUnderlineOffset="15px" letterSpacing={1}>
       MY CONTRIBUTIONS 
      </Text>
      <Center m="auto" align="center" p={10}>
        <GitHubCalendar
          username="sonugup"
          style={{border:"1px solid black",fontSize:"16px",padding:"10px", boxShadow:"rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}
        />
      </Center>
    </Stack>
  );
};

export default Statistics;