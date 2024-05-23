import React from "react";
import { Button, IconeFacebook, Title } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { EvilIcons } from '@expo/vector-icons';

interface Props extends RectButtonProps {
  title: string;
  iconName: React.ComponentProps<typeof EvilIcons>["name"]
}

const ButtonSocial: React.FC<Props> = ({ title, iconName, ...rest }) => {
  return (
    <Button {...rest}>
      <IconeFacebook name={iconName} />
      <Title>{title}</Title>
    </Button>
  );
};

export { ButtonSocial };
