import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";


const Skill = () => {

 

  return (
    <Box p={4} color="white" pt={20}>
      <Text
        textDecoration="underline white solid 2px"
        textUnderlineOffset="15px"
        fontSize={["30px", "40px"]}
        letterSpacing={5}
        fontWeight={300}
      >
        {" "}
        _TECH-STACK_
      </Text>

      <Box
        w="100%"
        display={["block", "flex"]}
        justifyContent="center"
        alignItems="center"
        pt={8}
        pb={8}
        color="rgb(210,223,205)"
      
     
      >
        {/* //first box */}
        <Box w={["100%", "35%"]} h="80%">
          <Text fontSize={[30]} pb={8}>
            __Frontend__
          </Text>
          <Box
            w="100%"
            h="25%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="15px"
          >
             <Box
              w="100%"
              h="25%"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              transition=".8s"
              _hover={{transition:".8s", transform:"rotate(360deg)"}}
            >
              <Image
                w="28%"
                borderRadius="50%"
                src="javascript.svg"
                title="JavaScript"
              />
            </Box>
            <Box
              w="100%"
              h="25%"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              gap="10px"
             
            >
              <Image
                w="24%"
                transition=".8s"
                _hover={{transition:".8s", transform:"rotate(360deg)"}}
                src="html.svg"
                title="HTML: Hyper Text Markup Language"
              />
              <Image
                w="24%"
                transition=".8s"
                _hover={{transition:".8s", transform:"rotate(360deg)"}}
                src="css.svg"
                title="CSS: Cascading Style Sheets"
              />{" "}
            </Box>
            <Box
              w="100%"
              h="25%"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              gap="10px"
            >
              <Image
                w="25%"
                transition=".8s"
              _hover={{transition:".8s", transform:"rotate(360deg)"}}
                src="logo512.png"
                title="React"
              />
              <Image w="25%"        transition=".8s"
              _hover={{transition:".8s", transform:"rotate(360deg)"}} borderRadius="50%" src="redux.svg" title="Redux" />
            </Box>
            <Box
              w="100%"
              h="25%"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              gap="10px"
            >
              <Image
                w="20%"
                borderRadius="50%"
                src="chakra-ui.jfif"
                title="Chakra-Ui"
                transition=".8s"
              _hover={{transition:".8s", transform:"rotate(360deg)"}}
              />
              <Image
                w="23%"
                transition=".8s"
                _hover={{transition:".8s", transform:"rotate(360deg)"}}
                src="bootstrap.png"
                title="Bootstrap"
              />
            </Box>
           
          </Box>
        </Box>

        {/* //second box */}
        <Box w={["100%", "30%"]}>
          <Text fontSize={30} pb={8} pt={[8, 0]}>
            __Backend__
          </Text>
          <Box
            h="80%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap="10px"
          >
            <Box w="36%" borderRadius="50%" transition=".8s"
              _hover={{ transition:".8s", transform:"rotate(360deg)"}}>
              {" "}
              <Image borderRadius="50%" src="nodejs.png" title="Node.js" />
            </Box>
            <Box w="31%" borderRadius="50%"  transition=".8s"
              _hover={{ transition:".8s", transform:"rotate(360deg)"}}>
              {" "}
              <Image
                borderRadius="50%"
                src="expressjs.png"
                title="Express.js"
              />
            </Box>
            <Box w="31%" borderRadius="50%" transition=".8s"
              _hover={{ transition:".8s", transform:"rotate(360deg)"}}>
              {" "}
              <Image borderRadius="50%" src="mongoDb.png" title="MongoDb" />
            </Box>
          </Box>
        </Box>

        {/* //third box */}
       



<Box w={["100%", "35%"]} h="80%">
          <Text fontSize={[30]} pb={8}>
          __Tools__
          </Text>
          <Box
            w="100%"
            h="25%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="15px"

          >
             <Box
              w="100%"
              h="25%"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="10px"
              transition=".8s"
              _hover={{transition:".8s", transform:"rotate(360deg)"}}
            >
              <Image
                w="28%"
                
                borderRadius="50%"
                src="git.png"
                title="GitHub"
               
              />
            </Box>
            <Box
              w="100%"
              h="25%"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              gap="10px"
            >
              <Image
                w="26%"
                transition=".8s"
                _hover={{transition:".8s", transform:"rotate(360deg)"}}
                borderRadius="50%"
                src="vscode.svg"
                title="Virtual Studio Code"
              />
              <Image
                w="26%"
                transition=".8s"
                _hover={{transition:".8s", transform:"rotate(360deg)"}}
                borderRadius="50%"
                src="codesandbox.svg"
                title="CodeSand Box"
              />{" "}
            </Box>
            <Box
              w="100%"
              h="25%"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              gap="10px"
            >
              <Image
                w="25%"
                transition=".8s"
              _hover={{transition:".8s", transform:"rotate(360deg)"}}
                borderRadius="50%"
                src="postman.svg"
                title="Postman"
              />
              <Image w="25%"     transition=".8s"
              _hover={{transition:".8s", transform:"rotate(360deg)"}} borderRadius="50%" src="heroku.svg" title="Heroku" />
            </Box>
            <Box
              w="100%"
              h="25%"
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              gap="10px"
            >
              <Image
                w="20%"
                transition=".8s"
                _hover={{transition:".8s", transform:"rotate(360deg)"}}
                borderRadius="50%"
                src="vercel.png"
                title="Vercel"
              />
              <Image
                w="20%"
                transition=".8s"
                _hover={{transition:".8s", transform:"rotate(360deg)"}}
                borderRadius="50%"
                src="netlify.svg"
                title="Netlify"
              />
            </Box>
           
          </Box>
        </Box>

      </Box>



    </Box>
  );
};

export default Skill;