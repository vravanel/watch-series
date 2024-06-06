import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import CardSerie from "../Components/CardSerie";
import { SimpleGrid, Link } from "@chakra-ui/react";

export default function Home() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://localhost/api/home", {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Une erreur est apparue`);
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    if (!data.results) {
        return <div>Chargement...</div>;
    }

    return (
        <Layout>
            <SimpleGrid columns={4} spacing={10}>
                {data.results.map((serie) => (
                    <Link key={serie.id} href={`/serie/${serie.id}`}>
                        <CardSerie
                            key={serie.id}
                            name={serie.name}
                            poster={serie.poster_path}
                        />
                    </Link>
                ))}
            </SimpleGrid>
        </Layout>
    );
}
