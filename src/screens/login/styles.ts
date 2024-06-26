import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Theme {
  FONTS: {
    POPPINSLIGHT: string;
    POPPINSMEDIUM: string;
  };
}


export const Container = styled.View`
  padding: ${RFValue(10)}px;
`;

export const ContentHeader = styled.View`

  align-items: center;
  justify-content: center;
  padding: ${RFValue(20)}px;


`;

export const ContentBody = styled.View``;

export const ContentFooter = styled.View``;

export const ViewButton = styled.View`
  flex-direction: row;
  margin-right: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(25)}px;
  margin-top: ${RFValue(40)}px;
  font-family: ${({ theme }: { theme: Theme }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
  margin-top: ${RFValue(60)}px;
  font-size: ${RFValue(12)}px;
  margin-bottom: ${RFValue(10)}px;
  font-family: ${({ theme }: { theme: Theme }) => theme.FONTS.POPPINSLIGHT};
`;
