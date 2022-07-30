import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <div>
      <p>Decentralized Loterry</p>
      <ConnectButton moralisAuth={false} />
    </div>
  );
}
