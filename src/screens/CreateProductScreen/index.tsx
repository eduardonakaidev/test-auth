import React, { useState } from "react";
import { Container } from "./styles";
import { Input } from "../../components/Inputs";
import { Alert, Button } from "react-native";
import theme from "../../theme";
import { api } from "../../utils/api";
import { useNavigation } from "@react-navigation/native";


export function CreateProductScreen() {
    const [name, setName] = useState('');
    const [urlPhotoProduct, setUrlPhotoProduct] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState<number | 0.0>(0.0);
    const [stock, setStock] = useState<number | 0>(0);
    const navigation = useNavigation();
    async function handleCreateProduct() {
       
            const res = await api.post('/products/create', { name, urlPhotoProduct, description, category, price, stock },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
                if(res){
                Alert.alert('produto registrado com sucesso')
            navigation.goBack();}
            else{
                Alert.alert('Erro ao cadastrar o produto')
            }
       
    };
    return (
        <Container>
            <Input placeholder="name" value={name} onChangeText={(text) => setName(text)} />
            <Input placeholder="descrição" value={description} onChangeText={(text) => setDescription(text)} />
            <Input placeholder="categoria" value={category} onChangeText={(text) => setCategory(text)} />
            <Input placeholder="preço" value={price.toString() || '0.0'} onChangeText={(text) => setPrice(text ? parseFloat(text) : 0.0)}
                keyboardType="numeric" />
            <Input placeholder="estoque" value={stock.toString() || '0.0'} onChangeText={(text) => setStock(text ? parseInt(text, 10) : 0)}
                keyboardType="numeric" />
            <Button title="Cadastrar produto" color={theme.COLORS.GREEN_SUBMIT} onPress={handleCreateProduct} />
        </Container>
    )
}