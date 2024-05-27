import {
    ChakraProvider,
    Box,
    List,
    ListItem,
    Heading,
    Divider,
    Link,
} from "@chakra-ui/react";

export default function NavBar() {
    return (
        <ChakraProvider>
            <Box
                height="100vh"
                width="20%"
                bg="gray.200"
                p={4}
                boxShadow="md"
                background="#FFCD01"
            >
                {" "}
                <nav>
                    <Heading>Wild Series</Heading>
                    <Divider orientation="horizontal" />
                    <List spacing={3}>
                        <ListItem>
                            <Link>Accueil</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Series</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Favoris</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Connexion</Link>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </ChakraProvider>
    );
}
