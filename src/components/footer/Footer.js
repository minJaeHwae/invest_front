'use client';

import Link from "next/link";
import styles from "./Footer.module.sass"
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useEffect } from "react";
import TextAnim1 from "../textAnim1/TextAnim1";

function Footer() {
  return (
    <footer className={styles.footer}>
      <TextAnim1>
        <h2>
          RELAX, GET CARRIED <br />
          AWAY AND ENJOY <br />
          DESIGN
        </h2> 
      </TextAnim1>

      <div className={styles.line}></div>

      <div className={styles.info}>
        <div>
          <div>
            <TextAnim1 delay={1}>
              <h3><span></span>Contact us</h3>
            </TextAnim1>
            <Link href="/">
              FORM
            </Link>
          </div>
        </div>
        <div>
          <div>
            <TextAnim1 delay={1}>
              <h3><span></span>Call us</h3>
            </TextAnim1>
            <Link href="/">
              +XX XXX XXX XXX
            </Link>
          </div>
        </div>
        <div>
          <div>
            <TextAnim1 delay={1}>
              <h3><span></span>WhatsApp</h3>
            </TextAnim1>
            <Link href="/">
              +XX XXX XXX XXX
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.contact}>
        <div className={styles.newsletter}>
          <TextAnim1>
            <h2>NEWSLETTER</h2>
          </TextAnim1>
          <div>
            <input type="text" placeholder="ENTER YOUR EMAIL HERE" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={styles.follow}>
          <TextAnim1>
            <h2>FOLLOW US</h2>
          </TextAnim1>
          <div>
            <Link href="https://www.instagram.com">
              <button>
                <AiOutlineInstagram />
              </button>
            </Link>
            <Link href="https://www.instagram.com">
              <button>
                <FaFacebookF />
              </button>
            </Link>
            <Link href="https://www.instagram.com">
              <button>
                <AiOutlineInstagram />
              </button>
            </Link>
            <Link href="https://www.instagram.com">
              <button>
                <FaFacebookF />
              </button>
            </Link>
            <Link href="https://www.instagram.com">
              <button>
                <AiOutlineInstagram />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <TextAnim1>
        <h2>MEMBERS OF</h2>
      </TextAnim1>
      <div className={styles.line}></div>

      <div className={styles.members}>
        <Link href="/">
          <img src="/img/members/default.png" alt="default member" />
        </Link>
        <Link href="/">
          <img src="/img/members/default.png" alt="default member" />
        </Link>
        <Link href="/">
          <img src="/img/members/default.png" alt="default member" />
        </Link>
      </div>

      <div className={styles.line}></div>

      <p className={styles.copyright}>&copy; 2023 | a lot of references a lot of references a lot of references a lot of references</p>
    </footer>
  );
}

export default Footer;