import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface CertificateEmailProps {
  username?: string;
  certLink?: string;
  routeLink?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const CertificateEmail = ({
  username,
  certLink,
  routeLink,
}: CertificateEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Beer Diplom Certificate has been approved.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={`/favicon-32x32.png`} width="32" height="32" alt="Github" />

        <Text style={title}>
          <strong>@{username}</strong>, your Beer Diplom Certificate has been
          approved.
        </Text>

        <Section style={section}>
          <Text style={text}>
            Hey <strong>{username}</strong>!
          </Text>
          <Text style={text}>
            {/*       a brief paragraph congratulating their journey complete and instructing them to download certificate */}
            Congratulations on completing your Beer Diplom journey! Your Beer
            Diplom Certificate has been approved and is ready for download. You
            can download your certificate by clicking the button below. If you
            run into any issues, please contact support. We&apos;re here to
            help. Cheers!
            <Link href="mailto:info@beerdiplom.com">info@beerdiplom.com</Link>
          </Text>

          <Button style={button}>
            <Link href={certLink || process.env.NEXT_PUBLIC_SITE_URL}>
              Download your certificate
            </Link>
          </Button>
          <Button style={button}>
            <Link href={routeLink || process.env.NEXT_PUBLIC_SITE_URL}>
              See results and status
            </Link>
          </Button>
        </Section>

        <Text style={footer}>@beerdiplom</Text>
      </Container>
    </Body>
  </Html>
);

CertificateEmail.PreviewProps = {
  username: 'alanturing',
} as CertificateEmailProps;

export default CertificateEmail;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const button = {
  fontSize: '14px',
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '12px 24px',
};

const links = {
  textAlign: 'center' as const,
};

const link = {
  color: '#0366d6',
  fontSize: '12px',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};
