import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { products } from "../db.js";

const Project = () => {
  return (
    <Box p={[0, 4]} color="white" mb="150px">
      <Text
      
        pb={10}
        pt="70px"
        textDecoration="underline white solid 2px"
        textUnderlineOffset="15px"
        fontSize={["30px", "40px"]}
        letterSpacing={5}
        fontWeight={300}
      >
        {" "}
        _PROJECTS_
      </Text>

      <Box
        display={["flex", "flex", "flex", "grid", "flex"]}
        gridTemplateColumns="repeat(2,1fr)"
        gridTemplateRows="auto"
        justifyContent="center"
        alignItems="center"
        mt="70px"
        flexDirection="column"
        gap={["50px", "50px", "50px", "50px", "50px"]}
      >
        {products.map((el) => (
          <Box
            w={["95%", "90%", "75%", "80%", "80%"]}
            h="inherit"
            // border="1px solid lightgrey"
            ml={[0, 0, 0, "45px", 0]}
            mr={[0, 0, 0, "45px", 0]}
            display={["block", "block", "block", "block", "flex"]}
            justifyContent="space-evenly"
            alignItems="center"
            boxShadow="rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
            fontFamily="Calibri Light"
          >
            <Box
              w={["100%", "100%", "100%", "100%", "35%"]}
              h={["35%", "35%", "35%", "35%", "348px"]}
            >
              {" "}
              <Box w="100%" h="78%" overflow="hidden">
                <Image mt={2} ml={2} w="100%" h="100%" src={el.src} />
              </Box>{" "}
              <Box w="100%" h="22%">
                <Text
                  fontSize={20}
                  pt={2}
                  fontFamily="Copperplate Gothic Light"
                >
                  {el.projectType}
                </Text>
                <Text
                  fontSize={15}
                  color="rgb(210,223,205)"
                  fontFamily="Calibri Light"
                >
                  {el.skillUsed}
                </Text>
              </Box>
            </Box>

            <Box
              w={["100%", "100%", "100%", "100%", "65%"]}
              h={["65%", "65%", "65%", "65%", "100%"]}
              pl={5}
              pt={3}
              pr={4}
              pb={4}
            >
              <Box display="flex" justifyContent="space-between">
                <Text
                  fontSize={25}
                  textAlign="start"
                  textDecoration="underline"
                  color={el.color}
                  fontFamily="Copperplate Gothic Light"
                >
                  {el.title}
                </Text>
                <Box
                  display="flex"
                  gap={6}
                  pr={8}
                  alignItems="center"
                  fontFamily="Calibri Light"
                >
                  <a href={el.liveLink} target="_blank">
                    <button
                      textAlign="right"
                      style={{
                        backgroundColor: "white",
                        color: "red",
                        width: "60px",
                        height: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      LIVE
                    </button>
                  </a>
                  <a href={el.gitLink} target="_blank">
                    <button
                      textAlign="right"
                      style={{
                        backgroundColor: "white",
                        color: "rgb(34,39,51)",
                        width: "60px",
                        height: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      CODE
                    </button>
                  </a>
                </Box>
              </Box>
              <Text
                fontSize={17}
                textAlign="start"
                fontFamily="Calibri Light"
                pt={2}
                pl={5}
                color="rgb(210,223,205)"
              >
                {" "}
                {el.description}
              </Text>

              <Text
                fontSize={19}
                textAlign="start"
                pt={2}
                fontWeight="100"
                fontFamily="Century Gothic"
              >
                Features :
              </Text>
              <Text
                fontSize={17}
                textAlign="start"
                pt={2}
                display={["block", "block", "block", "block", "flex"]}
                gap="17px"
                listStyleType="none"
                color="rgb(210,223,205)"
                fontFamily="Calibri Light"
              >
                <li>{el.l1}</li>
                <li>{el.l2}</li>
                <li>{el.l3} </li>
                <li>{el.l4}</li>
                <li>{el.l5} </li>
                <li>{el.l6}</li>
              </Text>

              <Text
                fontSize={19}
                textAlign="start"
                pt={2}
                fontWeight="100"
                fontFamily="Century Gothic"
              >
                Responsibility:
              </Text>
              <Text
                fontSize={17}
                textAlign="start"
                pt={2}
                listStyleType="none"
                color="rgb(210,223,205)"
                fontFamily="Calibri Light"
              >
                <li>{el.Rl1}</li>
                <li>{el.Rl2}</li>
                <li>{el.Rl3} </li>
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Project;