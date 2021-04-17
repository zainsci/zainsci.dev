import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="home__left">
          <div className="home__left__img">
            <img src="/assets/images/me.jpg" alt="zainsci" />
          </div>
        </div>
        <div className="home__right">
          <p>Hello There!</p>
          <h1>zain(sci) Here.</h1>
          <p>
            I am a self taught Web Developer and work mostly with Python, Flask,
            JavaScript and React. Your can find me on{" "}
            <a
              href="https://www.twitter.com/zainsci"
              target="_blank"
              rel="nereferrer"
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://www.github.com/zainsci"
              target="_blank"
              rel="nereferrer"
            >
              Github
            </a>{" "}
            and{" "}
            <a
              href="https://www.instagram.com/zainsci"
              target="_blank"
              rel="nereferrer"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
