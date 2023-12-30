import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import theme from "../../theme";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${theme.COLORS.WHITE};
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;

`;
export const ErrorText = styled.Text<{ hasError: boolean }>`
opacity:  ${({ hasError }) => (hasError ? 100 : 0)};
font-size: ${theme.FONT_SIZE.MD}px;
color:  ${theme.COLORS.RED_ERROR};
`;