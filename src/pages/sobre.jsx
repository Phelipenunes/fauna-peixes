import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/container";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Fauna</title>
        <meta name="description" content="Fauna, Peixes, Aquario, Animais" />
        <meta name="keywords" content="Fauna, Peixes, Aquario, Animais" />
      </Head>
      <StyledSobre>
        <h2>Sobre nós</h2>

        <Container>
          <h3>Missão</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            totam veritatis facilis asperiores placeat. Quos tempore
            exercitationem soluta recusandae eum.
          </p>

          <h3>Visão</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            aliquam praesentium aliquid soluta! Vel quasi earum debitis ullam,
            aut maxime ratione soluta tenetur. Harum repellat dolor, inventore
            cumque ipsam totam, fugiat ipsum delectus nulla quas fugit quam
            reiciendis perspiciatis quaerat?
          </p>

          <h3>Valores</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            est ducimus libero consequuntur nulla odit.
          </p>
        </Container>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡 ";
  }
  img {
    width: 100%;
    height: 50%;
  }
`;
