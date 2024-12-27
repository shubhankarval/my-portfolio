import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { type ContactFormData } from "@lib/schema";

export default function ContactMe({
  contactData,
}: {
  contactData: ContactFormData;
}) {
  const { name, email, subject, message } = contactData;

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Text style={headerText}>Contact Form Submission</Text>
          </Section>
          <Section style={contentSection}>
            <Row style={row}>
              <Column style={labelColumn}>Name</Column>
              <Column style={valueColumn}>{name}</Column>
            </Row>
            <Row style={row}>
              <Column style={labelColumn}>Email</Column>
              <Column style={valueColumn}>{email}</Column>
            </Row>
            <Row style={row}>
              <Column style={labelColumn}>Subject</Column>
              <Column style={valueColumn}>{subject}</Column>
            </Row>
            <Row style={{ ...row, borderBottom: "none" }}>
              <Column style={labelColumn}>Message</Column>
              <Column style={valueColumn}>{message} </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  fontFamily,
  backgroundColor: "#efeef1",
  padding: "30px 0",
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerSection = {
  backgroundColor: "#4a90e2",
  padding: "15px",
};

const headerText = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  color: "#ffffff",
  textAlign: "center" as const,
  margin: "0",
};

const contentSection = {
  padding: "20px",
};

const row = {
  display: "flex",
  padding: "10px 0",
  borderBottom: "1px solid #e0e0e0",
};

const labelColumn = {
  width: "75px",
  fontWeight: "bold",
  color: "#333333",
  paddingRight: "10px",
};

const valueColumn = {
  color: "#555555",
  textAlign: "left" as const,
  wordWrap: "break-word" as const,
};
