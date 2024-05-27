import * as React from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <ChakraProvider>
            <Flex height="100vh">
                <NavBar />
                <Box flex="1" p={4} background="#000000">
                    <main>{children}</main>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
