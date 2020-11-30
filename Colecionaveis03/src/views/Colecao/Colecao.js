import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import ItemLista from '../../components/ItemLista/ItemLista';
import { MaterialIcons } from '@expo/vector-icons';
import { LivroFB } from '../../firebase/livroFB';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState([]);
    const livroFb = new LivroFB();
    useEffect(() => {
        livroFb.pegarColecao()
            .orderBy('titulo')
            .onSnapshot((query) => {
                const items = [];
                query.forEach((doc) => {
                    items.push({...doc.data(), id: doc.id});
                });
                setColecao(items);
            });
    }, []);
}