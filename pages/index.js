import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
const Home = ({ events }) => {
  console.log("events", events);
  return (
    <Layout>
      <h1>Home : upcoming events </h1>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log("events: ", events);
  return {
    props: { events },
    revalidate: 1,
  };
}
