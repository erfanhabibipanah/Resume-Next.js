import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";
import emailjs from "emailjs-com";
import contactStyles from "../styles/contact-me.module.css";
import { getActive } from "../components/header";
import { NextSeo } from "next-seo";

const siteTitle = "Erfan's Contact Me";
const siteDescription =
  "I am Erfan Habibi Panah Fard and I’m a Front-End developer. You can contact me from this page.";

const Contact = () => {
  const [padding, setPadding] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template-erfan-site",
        e.target,
        "user_jVscyLQtWJGg1JAAAUiJ3",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        canonical="https://www.erfanhabibipanah.vercel.app/"
        openGraph={{
          url: "https://www.erfanhabibipanah.vercel.app/",
          title: { siteTitle },
          description: { siteDescription },
          images: [
            {
              url: "/favicon.ico",
              width: 800,
              height: 600,
              alt: "Erfan's picture",
            },
          ],
          site_name: { siteTitle },
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Header isActive={setPadding} />
      <div className={`${contactStyles.body}`}>
        <div className={`${contactStyles.background}`}>
          <div
            className={`${
              padding ? contactStyles.container : contactStyles.contactPadding
            }`}
          >
            <div className={`${contactStyles.screen}`}>
              <div className={`${contactStyles.screenHeader}`}>
                <div className={`${contactStyles.screenHeaderLeft}`}>
                  <div
                    className={`${contactStyles.screenHeaderButton} ${contactStyles.close}`}
                  ></div>
                  <div
                    className={`${contactStyles.screenHeaderButton} ${contactStyles.maximize}`}
                  ></div>
                  <div
                    className={`${contactStyles.screenHeaderButton} ${contactStyles.minimize}`}
                  ></div>
                </div>
                <div className={`${contactStyles.screenHeaderRight}`}>
                  <div
                    className={`${contactStyles.screenHeaderEllipsis}`}
                  ></div>
                  <div
                    className={`${contactStyles.screenHeaderEllipsis}`}
                  ></div>
                  <div
                    className={`${contactStyles.screenHeaderEllipsis}`}
                  ></div>
                </div>
              </div>
              <div className={`${contactStyles.screenBody}`}>
                <div
                  className={`${contactStyles.screenBodyItem} ${contactStyles.left}`}
                >
                  <div className={`${contactStyles.appTitle}`}>
                    <span>Contact</span>
                    <span>Me</span>
                  </div>
                </div>
                <div className={`${contactStyles.screenBodyItem}`}>
                  <form
                    className={`${contactStyles.appForm}`}
                    onSubmit={sendEmail}
                  >
                    <div className={`${contactStyles.appformGroup}`}>
                      <input
                        className={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Name"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className={`${contactStyles.appformGroup}`}>
                      <input
                        className={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Email"
                        type="email"
                        name="email"
                      />
                    </div>
                    <div className={`${contactStyles.appformGroup}`}>
                      <input
                        className={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Subject"
                        type="text"
                        name="subject"
                      />
                    </div>
                    <div
                      className={`${contactStyles.appformGroup} ${contactStyles.message}`}
                    >
                      <textarea
                        className={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Message"
                        cols="30"
                        rows="8"
                        name="message"
                      />
                    </div>
                    <div
                      className={`${contactStyles.appformGroup} ${contactStyles.buttons} ${contactStyles.button}`}
                    >
                      <button className={`${contactStyles.appFormButton}`}>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticProps({ active = true }) {
  console.log(active);
  const activeItem = await getActive(active);
  return {
    props: { activeItem },
  };
}

export default Contact;
