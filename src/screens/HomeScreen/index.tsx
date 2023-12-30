import { Button, FlatList, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { SetStateAction, useEffect, useState } from "react";
import {ProductDTO} from '../../dto/productDTO';
import { api } from "../../utils/api";
import { ProductComponentHome } from "../../components/ProductsComponents";

import { CreateProductScreen } from "../CreateProductScreen";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import { Container } from "./styles";

export function HomeScreen(){
    const navigation = useNavigation();
    const [isLoading,setIsLoading] = useState(true);
    const {signOut,authToken}  = useAuth();
    const [products,SetProducts] = useState<ProductDTO[]>([]);
    async function FetchProducts (){
        let resulta: ProductDTO[]
        const result = await api.get('/products/allProducts',{headers:{
        'Authorization': 'Bearer '+ authToken.token,
       }})

       if(result){
        SetProducts(result.data);
        console.log(result.data);
       }
    }
    function HandlerCreateProductScreen(){
        navigation.navigate("createProduct");
    }
    useEffect(()=>{
        FetchProducts();
    },[]);
    return(
        
        <Container>
            <Button title="Cadastre o produto" onPress={()=> navigation.navigate("createProduct")} color={theme.COLORS.GREEN_SUBMIT}/>
            
      {products.length === 0 ? (
        <Text>Você não criou nenhum produto ainda.</Text>
      ) : (
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <ProductComponentHome name={item.name}price={(item.price || 0).toString()}stock={(item.stock || 0).toString()}/>

            )}
            />
            
            )}
        </Container>
    )
}