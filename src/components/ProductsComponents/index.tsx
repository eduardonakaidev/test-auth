import React from "react";
import { Container, ContainerView,ContainerInfo,NameProduct,PhotoProduct,PriceText,StockText } from "./styles";
import ImageExample from '../../assets/productexample.jpeg';

type Props = {
    name:String;
    price:String;
    stock:String;
}
export function ProductComponentHome({name,price,stock}:Props){
    return(
    <Container>
            <ContainerView>
                <PhotoProduct source={ImageExample} />
                <ContainerInfo>
                    <NameProduct>{name}</NameProduct>
                    <PriceText>{price}</PriceText>
                    <StockText>{stock}</StockText>
                </ContainerInfo>
            </ContainerView>
        </Container>
    )
}