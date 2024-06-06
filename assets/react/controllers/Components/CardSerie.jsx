import { Card, Image, Stack, Heading } from "@chakra-ui/react";

export default function CardSerie({ poster, name }) {
    return (
        <Card maxW="2xs">
            <Image
                src={`https://image.tmdb.org/t/p/w500${poster}`}
                alt={name}
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h="auto"
            />
            <Stack mt="6" spacing="3" position="absolute">
                <Heading size="md" color="#FFFFFF">
                    {name}
                </Heading>
            </Stack>
        </Card>
    );
}
