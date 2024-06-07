import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { Flex, Heading, Image, Text, Grid, Card } from "@chakra-ui/react";

export default function Serie(props) {
    const [serie, setSerie] = useState([]);

    useEffect(() => {
        const fetchSerie = async () => {
            const response = await fetch(
                `https://localhost/api/serie/${props.id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            setSerie(await response.json());
        };
        fetchSerie();
    }, []);

    return (
        <Layout>
            <Flex
                flexDirection="row"
                justifyContent="space-between"
                marginTop="2rem"
            >
                <Image
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                    borderRadius="lg"
                    objectFit="cover"
                    w="20%"
                    h="auto"
                />
                <Flex flexDirection="column" justifyContent="center">
                    <Heading color="white">{serie.name}</Heading>
                    <Text color="white" maxWidth="65ch" marginTop="2rem">
                        {serie.overview}
                    </Text>
                </Flex>
            </Flex>
            <Heading color="white" marginTop="2rem">
                Les saisons disponibles
            </Heading>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {serie.seasons?.map((season) => (
                    <Card maxW="4xs">
                        <Image
                            key={season.id}
                            src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                            alt={season.name}
                            borderRadius="lg"
                            objectFit="cover"
                            w="100%"
                            h="auto"
                        />
                        <Text>{season.name}</Text>
                    </Card>
                ))}
            </Grid>
        </Layout>
    );
}
