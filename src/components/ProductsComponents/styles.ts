import styled from "styled-components/native";
import theme from "../../theme";


export const Container = styled.TouchableOpacity`  
    margin-top: 20px;
   
`;
export const ContainerView = styled.View`

    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 50px;
    padding-left: 50px;
    width: 100%;
    height: 128px;
    background-color: ${theme.COLORS.WHITE};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    border-radius: 8px;
    gap: 24px;
`;
export const PhotoProduct = styled.Image`
    width: 96px;
    height: 96px;
`;
export const ContainerInfo = styled.View`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;
export const NameProduct = styled.Text`
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

`;
export const PriceText = styled.Text`
      color: ${theme.COLORS.BLACK};
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
`;
export const StockText = styled.Text`
      color: ${theme.COLORS.BLACK};
      font-size: ${theme.FONT_SIZE.MD}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
`;
