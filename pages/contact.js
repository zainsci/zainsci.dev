import Layout from "../components/layout";
import SocialIcons from "../components/social-icons";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="contact">
        <p>
          ____________{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="feather feather-send"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>{" "}
          ____________
        </p>
        <p>
          I don't look at the emails most of the time so if anyone wants to
          contact me, they can do so by by messaging me on my{" "}
          <a
            href="https://twitter.com/zainsci"
            target="_blank"
            rel="noreferrer"
          >
            Twitter Account
          </a>
          .
        </p>
        <SocialIcons />
      </div>
    </Layout>
  );
};

export default Contact;
