import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import components
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../components/Button/ButtonSocial";
import {
  Container,
  ContentHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
  ViewButton,
} from "./styles";

const Login: React.FC = () => {
  return (
    <View>
      <Container>
        <ContentHeader>
          <Title>Seja bem vindo(a) {"\n"} a App Carteira</Title>

          <Description>Entrar com redes sociais</Description>

          <ViewButton>
            <GestureHandlerRootView style={{flexDirection: 'row'}}>
              <ButtonSocialGoogle title="Google" />
              <ButtonSocial iconName="sc-facebook" title='facebook' />
            </GestureHandlerRootView>
          </ViewButton>
        </ContentHeader>

        <ContentBody></ContentBody>

        <ContentFooter></ContentFooter>
      </Container>
    </View>
  );
};

export { Login };
