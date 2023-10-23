import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        smartWallet(embeddedWallet(),{
          factoryAddress: "0xe9A6f04e4Da9c9d6146d7Ea52b6F56ED3aeDfE47",
          gasless: true,
          // personalWallets: [
          //   paperWallet({
          //     paperClientId: "c7b36ae5-5f1f-49bd-a3f9-598fbf1a2459"
          //   })
          // ]
        }),
      ]}
    >
      <Component {...pageProps} />
      <Navbar/>
    </ThirdwebProvider>
  );
}

export default MyApp;
