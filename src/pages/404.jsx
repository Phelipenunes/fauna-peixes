import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function pagina404() {
  return (
    <>
      <Head>
        <title>Ops - Fauna</title>
      </Head>
      <Styled404>
        <h2>Algo de errado não está certo!</h2>
        <Container>
          <h3>Ops! Algo deu errado</h3>
          <Image
            src="/images/peixonauta.png"
            width={500}
            height={296}
            alt="foto de um peixe"
          />
        </Container>
      </Styled404>
    </>
  );
}

const Styled404 = styled.section`
  text-align: center;
  img {
    max-width: 100%;
  }
  h2::before {
    content: 😢;
  }
`;
