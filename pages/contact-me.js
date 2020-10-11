import styles from "../components/layout.module.css";
import Link from "next/link";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import { useState } from "react";
import emailjs from "emailjs-com";
import contactStyles from "../styles/contact-me.module.css";

const siteTitle = "Erfan's portfolio";

const sites = () => {
  const [flag, setFlag] = useState(false);

  // active ? setFlag(active) : setFlag(active);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template-erfan-site",
        e.target,
        "user_jVscyLQtWJGg1JAAAUiJ3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <div className={`${contactStyles.body}`}>
        <div class={`${contactStyles.background}`}>
          <div class={`${contactStyles.container} hidden md:block`}>
            <div class={`${contactStyles.screen}`}>
              <div class={`${contactStyles.screenHeader}`}>
                <div class={`${contactStyles.screenHeaderLeft}`}>
                  <div
                    class={`${contactStyles.screenHeaderButton} ${contactStyles.close}`}
                  ></div>
                  <div
                    class={`${contactStyles.screenHeaderButton} ${contactStyles.maximize}`}
                  ></div>
                  <div
                    class={`${contactStyles.screenHeaderButton} ${contactStyles.minimize}`}
                  ></div>
                </div>
                <div class={`${contactStyles.screenHeaderRight}`}>
                  <div class={`${contactStyles.screenHeaderEllipsis}`}></div>
                  <div class={`${contactStyles.screenHeaderEllipsis}`}></div>
                  <div class={`${contactStyles.screenHeaderEllipsis}`}></div>
                </div>
              </div>
              <div class={`${contactStyles.screenBody}`}>
                <div
                  class={`${contactStyles.screenBodyItem} ${contactStyles.left}`}
                >
                  <div class={`${contactStyles.appTitle}`}>
                    <span>Contact</span>
                    <span>Me</span>
                  </div>
                </div>
                <div class={`${contactStyles.screenBodyItem}`}>
                  <form class={`${contactStyles.appForm}`} onSubmit={sendEmail}>
                    <div class={`${contactStyles.appformGroup}`}>
                      <input
                        class={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Name"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div class={`${contactStyles.appformGroup}`}>
                      <input
                        class={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Email"
                        type="email"
                        name="email"
                      />
                    </div>
                    <div class={`${contactStyles.appformGroup}`}>
                      <input
                        class={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Subject"
                        type="text"
                        name="subject"
                      />
                    </div>
                    <div
                      class={`${contactStyles.appformGroup} ${contactStyles.message}`}
                    >
                      <textarea
                        class={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Message"
                        cols="30"
                        rows="8"
                        name="message"
                      />
                    </div>
                    <div
                      class={`${contactStyles.appformGroup} ${contactStyles.buttons} ${contactStyles.button}`}
                    >
                      <button class={`${contactStyles.appFormButton}`}>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class={`${contactStyles.contactPadding} md:hidden`}>
            <div class={`${contactStyles.screen}`}>
              <div class={`${contactStyles.screenHeader}`}>
                <div class={`${contactStyles.screenHeaderLeft}`}>
                  <div
                    class={`${contactStyles.screenHeaderButton} ${contactStyles.close}`}
                  ></div>
                  <div
                    class={`${contactStyles.screenHeaderButton} ${contactStyles.maximize}`}
                  ></div>
                  <div
                    class={`${contactStyles.screenHeaderButton} ${contactStyles.minimize}`}
                  ></div>
                </div>
                <div class={`${contactStyles.screenHeaderRight}`}>
                  <div class={`${contactStyles.screenHeaderEllipsis}`}></div>
                  <div class={`${contactStyles.screenHeaderEllipsis}`}></div>
                  <div class={`${contactStyles.screenHeaderEllipsis}`}></div>
                </div>
              </div>
              <div class={`${contactStyles.screenBody}`}>
                <div
                  class={`${contactStyles.screenBodyItem} ${contactStyles.left}`}
                >
                  <div class={`${contactStyles.appTitle}`}>
                    <span>Contact</span>
                    <span>Me</span>
                  </div>
                </div>
                <div class={`${contactStyles.screenBodyItem}`}>
                  <form class={`${contactStyles.appForm}`} onSubmit={sendEmail}>
                    <div class={`${contactStyles.appformGroup}`}>
                      <input
                        class={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Name"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div class={`${contactStyles.appformGroup}`}>
                      <input
                        class={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Email"
                        type="email"
                        name="email"
                      />
                    </div>
                    <div class={`${contactStyles.appformGroup}`}>
                      <input
                        class={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Subject"
                        type="text"
                        name="subject"
                      />
                    </div>
                    <div
                      class={`${contactStyles.appformGroup} ${contactStyles.message}`}
                    >
                      <textarea
                        class={`${contactStyles.appFormControl} ${contactStyles.input}`}
                        placeholder="Message"
                        cols="30"
                        rows="8"
                        name="message"
                      />
                    </div>
                    <div
                      class={`${contactStyles.appformGroup} ${contactStyles.buttons} ${contactStyles.button}`}
                    >
                      <button class={`${contactStyles.appFormButton}`}>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default sites;
