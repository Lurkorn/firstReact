import Head from "next/head";
import { useEffect } from "react";

const getHeading = () => {
  return document.querySelector('h1')
}

const getParagraph = () => {
  return document.querySelector('p')
}

const setBackgroundColor = (element: HTMLElement | null, color: string) => {
  if (element !== null) {
      element.style.backgroundColor = color;
  }
}

const Home = () => {
  useEffect(() => {
      setBackgroundColor(getHeading(), "blue")
      setBackgroundColor(getParagraph(), "green")
  }, []);
  
  return (
    <>
      <Head>
        <title>Page Title</title>
      </Head>
      <h1>This is a Heading</h1>
      <p>This is a paragraph.</p>
    </>
  )
}

export default Home;