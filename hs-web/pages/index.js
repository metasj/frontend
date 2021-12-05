import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Landing.module.css';
import classNames from 'classnames';

export default function Home() {
  return (
    <div className={classNames('min-vh-100 w-100', styles.bgHome)}>
      <Head>
        <title>hyperscale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pa4">
        <div className="container center">
          <header className="flex justify-between items-center mb6">
            <Image src="/logo.svg" width={70} height={70} />
            <ul className="list list-clear list-inline">
              <li>
                <a className="pa2" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="pa2 ml2" href="#">
                  Vetting
                </a>
              </li>
              <li>
                <a className="pa2 ml2" href="#">
                  Process
                </a>
              </li>
              <li>
                <a className="pa2 ml2" href="#">
                  Mission
                </a>
              </li>
              <li>
                <a className="ml2 ph4 pv2 btn br-pill" href="#">
                  Apply
                </a>
              </li>
            </ul>
          </header>

          <section>
            <div className="mw6">
              <h1 className="f1">Fast funding for early crypto projects</h1>
              <p className="f4">
                Receive $200k for 5% by filling out a simple application.
              </p>
              <p className="f4">You'll receive a decision within 1 week.</p>
              <form>
                <fieldset>
                  <div
                    className={classNames(
                      'flex br-pill ph3 pv2 shadow-1',
                      styles.formCta,
                    )}
                  >
                    <input
                      className="w-100"
                      type="text"
                      placeholder="Your email address"
                      name="email"
                    />
                    <button type="submit" className="btn br-pill ph4 pv2">
                      Apply
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
