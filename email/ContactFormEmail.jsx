import * as React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function ContactFormEmail({ message, email }) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem do seu Portfólio.</Preview>
      <Tailwind>
        <Body className="bg-slate-900">
          <Container>
            <Section className="bg-white border-slate-900/95 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Nova mensagem:</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>O email do remetente é: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
