import React from "react";
import { Box, Image, ListItem, Text, UnorderedList,useColorModeValue,Button,useColorMode } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import { nav } from "../db.js";



const Navbar = () => {
  return (
    <Box
      bg="rgb(82,94,101)"
      w="100%"
      p={[2]}
      pl={[1, 2]}
      pr={[1, 2]}
      color="white"
      fontSize={["17px", "20px"]}
      fontWeight={400}
      zIndex={1000}
      position="fixed"
      top="0px"
      borderBottom="1px solid white"
      boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      
    >
      <UnorderedList
        listStyleType="none"
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        gap={["4.5%", "3%"]}
      >
        {nav.map((el) => (
       
            <Link to={el.to}>
              <ListItem borderBottom="3px solid rgb(82,94,101)"  _hover={{borderBottom:"3px solid red",transition:".5s"}}>{el.title}</ListItem>
            </Link>
       
        ))}

        <a href="Sonu Gupta Resume.pdf" download>
          <ListItem  display="flex" ><Text borderBottom="2px solid rgb(82,94,101)" _hover={{borderBottom:"2px solid white",transition:".4s"}}>Resume</Text><span> <Image w="15px" bg="white" borderRadius="50%" src="download1.svg"/></span></ListItem>
        </a>
      </UnorderedList>
      
    </Box>
  );
};

export default Navbar;