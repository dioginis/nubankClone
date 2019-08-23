import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation
} from "./styles";

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"></Icon>
            <Icon name="visibility-off" size={28} color="#666"></Icon>
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description> R$ 50.000,00</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              {" "}
              Transferência de R$ 100,00 recebida de Dióginis
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
