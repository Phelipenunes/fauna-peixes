import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";
import serverapi from "@/pages/api/server";
import ListaCategorias from "@/components/ListaCategorias";
import StyledSobre from "@/pages/sobre";
import StyledContato from "@/pages/contato";
import Container from "@/components/ui/Container";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverapi}/posts.json`);
    const dados = await resposta.json();
    console.log(dados);

    if (!resposta.ok) {
      throw new Error(
        `Erro requisição: ${resposta.status} - ${resposta.statusText}`
      );
    }

    /* colocando os dados dos objetos dentro de um array */
    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados[post],
        id: post,
      };
    });

    console.log(arrayDePosts);

    const categorias = arrayDePosts.map((post) => post.categoria);
    console.log(categorias);

    /* Gerando um array de categorias Únicas*/
    const categoriasUnicas = [...new Set(categorias)];
    console.log(categoriasUnicas);

    return {
      props: {
        posts: arrayDePosts,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu Ruim: " + error.massage);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  const aplicarFiltro = (event) => {
    const postEscolhido = event.currentTarget.textContent;
    const cursosFiltrados = postEscolhido
      ? posts.filter((post) => post.categoria === postEscolhido)
      : posts;
    setFiltroAtivo(true);
    setListaDePosts(cursosFiltrados);

    setCategoriaAtiva(postEscolhido);
  };

  const limparFiltro = () => {
    setFiltroAtivo(false);
    setListaDePosts(posts);
    setCategoriaAtiva("");
  };

  return (
    <>
      <Head>
        <title>Fauna</title>
        <meta
          name="description"
          content="Web App Fauna criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta name="keywords" content="Fauna, Peixes, Aquario, Animais" />
      </Head>
      <StyledHome>
        <h2>Peixes: {listaDePosts.length}</h2>

        <ListaCategorias
          categorias={categorias}
          aplicarFiltro={aplicarFiltro}
          limparFiltro={limparFiltro}
          filtroAtivo={filtroAtivo}
          categoriaAtiva={categoriaAtiva}
        />

        <ListaPosts posts={listaDePosts} />
      </StyledHome>
      <br />
      <StyledSobre />
      <br />
      <StyledContato />
      <br />
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "🦈 ";
  }
`;
