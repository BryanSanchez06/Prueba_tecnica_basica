import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../assets/header';
import Footer from '../assets/footer';
import data from '../data/sample.json';
import { useDispatch } from 'react-redux';
import { addserie } from "./redux/slices";

const Series = () => {
    const titulo = "Series populares";
    const [series, setSeries] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const Filtro = data.entries
            .filter((entry) => entry.programType === 'series' && entry.releaseYear >= 2010)
            .sort((a, b) => a.title.localeCompare(b.title));
        setSeries(Filtro.slice(0, 20));

        dispatch(addserie(Filtro.slice(0, 20)));
    }, [dispatch]);

    return (
        <ScrollView>
        <View>
            <Header titulo={titulo}/>

            {series.map((entry) => (
                <TouchableOpacity key={entry.title} style={styles.resultBox}>
                    <Image source={{ uri: entry.images['Poster Art'].url }} style={styles.poster} />
                    <Text style={styles.title}>{entry.title}</Text>
                </TouchableOpacity>
            ))}

            <Footer />
        </View>
    </ScrollView>
    );
};


const styles = StyleSheet.create({
    resultBox: {
        opacity: 0.8,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 10,
        padding: 10,
    },
    poster: {
        width: 100,
        height: 150,
    },
    title: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Series;
