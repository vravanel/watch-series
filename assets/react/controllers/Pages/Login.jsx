import React, { useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    VStack,
    Text,
    Link,
} from "@chakra-ui/react";
import Layout from "../Components/Layout";

const SignIn = ({ error, csrftoken, appuser }) => {
    return (
        <Layout>
            <Box as="form" method="post">
                {error && (
                    <Alert status="error" mb={4}>
                        <AlertIcon />
                        <AlertTitle mr={2}>Erreurs : </AlertTitle>
                        <AlertDescription>{error.message}</AlertDescription>
                    </Alert>
                )}

                {appuser && (
                    <Box mb={3}>
                        <Text color="white">
                            Vous êtes déjà connecté {appuser.userIdentifier},{" "}
                            <Link color="teal.500">Se déconnecter</Link>
                        </Text>
                    </Box>
                )}

                <VStack spacing={3} align="stretch">
                    <Text
                        as="h1"
                        fontSize="lg"
                        fontWeight="normal"
                        color="white"
                    >
                        Connexion
                    </Text>

                    <FormControl id="inputEmail" isRequired>
                        <FormLabel color="white">Email</FormLabel>
                        <Input
                            type="email"
                            autoComplete="email"
                            required
                            autoFocus
                            color="white"
                            name="email"
                        />
                    </FormControl>

                    <FormControl id="inputPassword" isRequired>
                        <FormLabel color="white">Password</FormLabel>
                        <Input
                            type="password"
                            autoComplete="current-password"
                            required
                            color="white"
                            name="password"
                        />
                    </FormControl>

                    <Input type="hidden" name="_csrf_token" value={csrftoken} />

                    <Checkbox name="_remember_me" color="white">
                        Remember me
                    </Checkbox>

                    <Button
                        color="white"
                        colorScheme="teal"
                        size="lg"
                        type="submit"
                    >
                        Sign in
                    </Button>
                </VStack>
            </Box>
        </Layout>
    );
};

export default SignIn;
