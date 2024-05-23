import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { EvilIcons } from '@expo/vector-icons';

interface Theme {
  COLORS: {
    BLUE4: string;
    WHITE: string;
  };
  FONTS: {
    POPPINSLIGHT: string;
  };
}

export const Button = styled(RectButton)`
  width: ${RFValue(130)}px;
  height: ${RFValue(60)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  margin-left: ${RFValue(10)}px;
  border-radius: ${RFValue(15)}px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }: { theme: Theme }) => theme.COLORS.BLUE4};
`;

export const IconeFacebook = styled(EvilIcons)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }: { theme: Theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }: { theme: Theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }: { theme: Theme }) => theme.FONTS.POPPINSLIGHT};
`;
