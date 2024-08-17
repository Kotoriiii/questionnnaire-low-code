import { GetServerSideProps } from "next";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.writeHead(302, { Location: "https://www.jasonlidevelop.com/lowcode/" });
  res.end();

  return { props: {} };
};
