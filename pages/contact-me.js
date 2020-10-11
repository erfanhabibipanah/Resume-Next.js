import styles from '../components/layout.module.css'
import Link from 'next/link'
import Header from '../components/header';
import Head from 'next/head';
import Footer from '../components/footer';
import { useState } from 'react';
import emailjs from 'emailjs-com'
import contactStyles from '../styles/contact-me.module.css'

const siteTitle = 'Erfan\'s portfolio'

const sites = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setmessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success') {
            alert("Message Sent."); 
            this.resetForm()
            } else if(response.data.status === 'fail') {
            alert("Message failed to send.")
            }
        })
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template-erfan-site', e.target, 'user_jVscyLQtWJGg1JAAAUiJ3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div>
        <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={siteTitle}
        />
        <meta
          property="og:image"
          content="/images/profile.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Header />
            
        <div className={`${contactStyles.container100} `}>
            <div class="background">
            <div class="container">
                <div class="screen">
                    <div class="screen-header">
                        <div class="screen-header-left">
                            <div class="screen-header-button close"></div>
                            <div class="screen-header-button maximize"></div>
                            <div class="screen-header-button minimize"></div>
                        </div>
                        <div class="screen-header-right">
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                        </div>
                    </div>
                <div class="screen-body">
                    <div class="screen-body-item left">
                        <div class="app-title">
                            <span>Contact</span>
                            <span>Me</span>
                        </div>
                    </div>
                    <div class="screen-body-item">
                    <form class="app-form" onSubmit={sendEmail}>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="Name" type="text" value="" />
                        </div>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="Email" type="email" />
                        </div>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="Subject" type="text" />
                        </div>
                        <div class="app-form-group message">
                        <textarea class="app-form-control" placeholder="messagr" cols="30" rows="8" />
                        </div>
                        <div class="app-form-group buttons">
                        <button class="app-form-button">SEND</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className={styles.backToHome}>
            <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <Link href="/" >
            <span class="inline-flex rounded-md shadow-sm">
            <button type="button" class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                ← Back to home
            </button>
            </span>
            </Link>
        </div>
            </div>
            </div>
            <Footer />
            <style jsx>{`
                body, button, input {
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                letter-spacing: 1.4px;
                }

                .background {
                display: flex;
                min-height: 100vh;
                }

                .container {
                flex: 0 1 700px;
                margin: auto;
                padding: 10px;
                }

                .screen {
                position: relative;
                background: #3e3e3e;
                border-radius: 15px;
                }

                .screen:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 20px;
                right: 20px;
                bottom: 0;
                border-radius: 15px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
                z-index: -1;
                }

                .screen-header {
                display: flex;
                align-items: center;
                padding: 10px 20px;
                background: #4d4d4f;
                border-top-left-radius: 15px;
                border-top-right-radius: 15px;
                }

                .screen-header-left {
                margin-right: auto;
                }

                .screen-header-button {
                display: inline-block;
                width: 8px;
                height: 8px;
                margin-right: 3px;
                border-radius: 8px;
                background: white;
                }

                .screen-header-button.close {
                background: #ed1c6f;
                }

                .screen-header-button.maximize {
                background: #e8e925;
                }

                .screen-header-button.minimize {
                background: #74c54f;
                }

                .screen-header-right {
                display: flex;
                }

                .screen-header-ellipsis {
                width: 3px;
                height: 3px;
                margin-left: 2px;
                border-radius: 8px;
                background: #999;
                }

                .screen-body {
                display: flex;
                }

                .screen-body-item {
                flex: 1;
                padding: 50px;
                }

                .screen-body-item.left {
                display: flex;
                flex-direction: column;
                }

                .app-title {
                display: flex;
                flex-direction: column;
                position: relative;
                color: #ea1d6f;
                font-size: 26px;
                }

                .app-title:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                bottom: -10px;
                width: 25px;
                height: 4px;
                background: #ea1d6f;
                }

                .app-contact {
                margin-top: auto;
                font-size: 8px;
                color: #888;
                }

                .app-form-group {
                margin-bottom: 15px;
                }

                .app-form-group.message {
                margin-top: 40px;
                }

                .app-form-group.buttons {
                margin-bottom: 0;
                text-align: right;
                }

                .app-form-control {
                width: 100%;
                padding: 10px 0;
                background: none;
                border: none;
                border-bottom: 1px solid #666;
                color: #ddd;
                font-size: 14px;
                text-transform: uppercase;
                outline: none;
                transition: border-color .2s;
                }

                .app-form-control::placeholder {
                color: #666;
                }

                .app-form-control:focus {
                border-bottom-color: #ddd;
                }

                .app-form-button {
                background: none;
                border: none;
                color: #ea1d6f;
                font-size: 14px;
                cursor: pointer;
                outline: none;
                }

                .app-form-button:hover {
                color: #b9134f;
                }

                .credits {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                color: #ffa4bd;
                font-family: 'Roboto Condensed', sans-serif;
                font-size: 16px;
                font-weight: normal;
                }

                .credits-link {
                display: flex;
                align-items: center;
                color: #fff;
                font-weight: bold;
                text-decoration: none;
                }

                .dribbble {
                width: 20px;
                height: 20px;
                margin: 0 5px;
                }

                @media screen and (max-width: 520px) {
                .screen-body {
                    flex-direction: column;
                }

                .screen-body-item.left {
                    margin-bottom: 30px;
                }

                .app-title {
                    flex-direction: row;
                }

                .app-title span {
                    margin-right: 12px;
                }

                .app-title:after {
                    display: none;
                }
                }

                @media screen and (max-width: 600px) {
                .screen-body {
                    padding: 40px;
                }

                .screen-body-item {
                    padding: 0;
                }
                }
        `}</style>
        </div>
    );
}

export default sites;