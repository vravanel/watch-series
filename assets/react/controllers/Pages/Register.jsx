import { useState } from "react";
import Layout from "../Components/Layout";
import {
    FormControl,
    FormLabel,
    Input,
    Heading,
    Button,
    Checkbox,
} from "@chakra-ui/react";

export default function Register({ csrf_token }) {
    const [email, setEmail] = useState("");
    const [plainPassword, setPlainPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPlainPassword(e.target.value);
    };

    const handleAgreeTermsChange = (e) => {
        setAgreeTerms(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(async () => {
            const response = await fetch("https://localhost/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrf_token,
                },
                body: JSON.stringify({ email, plainPassword, agreeTerms }),
            });
            if (response.ok) {
                setEmail("");
                setPlainPassword("");
                setAgreeTerms(false);
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <Layout>
            <Heading color="white" marginBottom="1rem">
                Inscription
            </Heading>
            <form action="" method="post" onSubmit={handleSubmit}>
                <FormControl marginBottom="1rem">
                    <FormLabel htmlFor="email" color="white">
                        Email
                    </FormLabel>
                    <Input
                        placeholder="example@email.com"
                        name="email"
                        color="white"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password" color="white">
                        Mot de passe
                    </FormLabel>
                    <Input
                        placeholder="mot de passe"
                        name="plainPassword"
                        color="white"
                        value={plainPassword}
                        onChange={handlePasswordChange}
                    />
                </FormControl>
                <FormControl id="agreeTerms" isRequired>
                    <Checkbox
                        isChecked={agreeTerms}
                        onChange={handleAgreeTermsChange}
                        colorScheme="teal"
                        color="white"
                    >
                        Accepter les conditions
                    </Checkbox>
                </FormControl>
                <Button
                    marginTop="1rem"
                    isLoading={isLoading}
                    colorScheme="teal"
                    variant="solid"
                    type="submit"
                >
                    S'inscrire
                </Button>
            </form>
        </Layout>
    );
}
