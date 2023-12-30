import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import theme from "../../theme";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUD};
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: center;

`;
export const ContainerView = styled.View`

`;