import styled, { css } from "styled-components/native";
import { TextInput, ViewProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


interface IContainerProps extends ViewProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

interface ITextContainerProps extends ViewProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled?: boolean; //Opcional
}

interface Theme {
  COLORS: {
    BLUE1: string;
    RED: string;
    GRAY4: string;
    GRAYS: string;
  };
  FONTS: {
    POPPINSLIGHT: string;
  }
}

export const Container = styled.View`
  width: 85%;
  height: ${RFValue(50)}px;
  flex-direction: row;
  margin-bottom: ${RFValue(10)}px;
`;

export const IContainer = styled.View<IContainerProps>`
  width: ${RFValue(55)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
//verificações
  ${({ isFocused, isFilled }: {isFocused: IContainerProps, isFilled: IContainerProps}) => (isFocused || isFilled) && css`
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: '#2F80ED';
  `}

  ${({ hasError } : {hasError: IContainerProps}) => hasError && css`
    border-bottom-color: '#EB5757';
  `};

  margin-right:${RFValue(3)}px;
  border-top-left-radius: ${RFValue(5)}px;
  border-bottom-left-radius: ${RFValue(5)}px;

  background-color: ${({ theme }: { theme: Theme }) => theme.COLORS.GRAYS};
`;

export const IputText = styled(TextInput)<ITextContainerProps>`
  flex: 1;
  font-size: ${RFValue(12)}px;
  border-top-right-radius: ${RFValue(5)}px;
  border-bottom-right-radius: ${RFValue(5)}px;
  color: ${({ theme } : { theme: Theme }) => theme.COLORS.GRAY4};
  font-family: ${({ theme }: { theme: Theme }) => theme.FONTS.POPPINSLIGHT};
  background-color: ${({ theme }: { theme: Theme }) => theme.COLORS.GRAYS};
//verificações
${({ isFocused, isFilled }: {isFocused: ITextContainerProps, isFilled: ITextContainerProps}) => (isFocused || isFilled) && css`
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: '#2F80ED';
  `}

  ${({ hasError } : {hasError: ITextContainerProps}) => hasError && css`
    border-bottom-color: '#EB5757';
  `};

  padding: 0 ${RFValue(10)}px;

`;

