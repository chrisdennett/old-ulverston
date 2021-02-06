import FacebookPost from "@components/facebookPost/FacebookPost";
import Map from "@components/map/Map";
import Photo from "@components/photo/Photo";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Old Ulverston</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Photo />
        <Map />
        <FacebookPost />
      </main>
    </div>
  );
}
//
