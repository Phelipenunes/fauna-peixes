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
            Conectar entusiastas de aquarismo e amantes de peixes, fornecendo
            informações confiáveis, produtos de qualidade e uma comunidade
            acolhedora para promover o bem-estar e a beleza dos aquários.
          </p>

          <h3>Visão</h3>
          <p>
            Ser a principal plataforma online para todos os apaixonados por
            peixes, oferecendo uma experiência completa que inspire, eduque e
            capacite os aquaristas de todos os níveis, contribuindo para um
            mundo onde a preservação da vida aquática seja valorizada e
            incentivada.
          </p>

          <h3>Valores</h3>
          <ul>
            <li>
              Paixão pela Vida Aquática: Promover e compartilhar a fascinação e
              o respeito pela diversidade e beleza dos peixes e seus habitats.
            </li>
            <br />
            <li>
              Integridade: Compromisso com a transparência, honestidade e
              responsabilidade em todas as interações com nossa comunidade e
              parceiros.
            </li>
            <br />
            <li>
              Excelência: Buscar constantemente a excelência em tudo o que
              fazemos, desde a qualidade dos produtos que oferecemos até o
              suporte ao cliente e a experiência do usuário em nosso site.
            </li>
            <br />
            <li>
              Inovação: Estimular a inovação contínua, seja na oferta de
              produtos e serviços, na entrega de conteúdo educacional ou na
              criação de ferramentas e recursos que tornem a vida dos aquaristas
              mais fácil e gratificante.
            </li>
            <br />
            <li>
              Sustentabilidade: Promover práticas de aquarismo responsáveis e
              sustentáveis, incentivando a conservação dos recursos naturais e o
              bem-estar dos peixes em cativeiro.
            </li>
            <br />
            <li>
              Comunidade: Cultivar uma comunidade inclusiva e colaborativa, onde
              os aquaristas possam compartilhar conhecimentos, experiências e
              paixão pelos peixes, criando conexões significativas e duradouras.
            </li>
          </ul>
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
