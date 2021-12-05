import Image from "next/image";
import styles from "../styles/Landing.module.css";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import useApply from "../hooks/api";
import JoinDiscord from "../components/buttons/JoinDiscord";

export default function Home() {
  const { register, handleSubmit } = useForm({});

  const apply = useApply();

  const onSubmit = handleSubmit((data) => {
    const email = data.email;
    apply.mutate({ email });
  });

  return (
    <div className={classNames("min-vh-100 w-100", styles.bgHome)}>
      <div className="pa4">
        <div className="container center">
          <header className="flex justify-between items-center mb6">
            <Image
              alt="Hyperscale logo"
              src="/logo.svg"
              width={70}
              height={70}
            />
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
              <p className="f4">
                You&apos;ll receive a decision within 1 week.
              </p>
              <form action="/api/apply" method="post" onSubmit={onSubmit}>
                <fieldset>
                  <div
                    className={classNames(
                      "flex br-pill ph3 pv2 shadow-1",
                      styles.formCta
                    )}
                  >
                    <input
                      {...register("email")}
                      className="w-100"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button
                      disabled={apply.isLoading}
                      type="submit"
                      className="btn br-pill ph4 pv2"
                    >
                      Apply
                    </button>
                  </div>
                </fieldset>
              </form>
              <JoinDiscord />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
