import Link from "next/link";

export default function JoinDiscord() {
  return (
    <Link href="https://discord.gg/pVSbzYny2c">
      <div
        className="rounded-full inline-block py-2.5 px-6 mt-7 cursor-pointer hover:shadow-xl"
        style={{ backgroundColor: "#6875EF" }}
      >
        <img src="/icons/join_discord.svg" />
      </div>
    </Link>
  );
}
