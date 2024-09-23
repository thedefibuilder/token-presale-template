import DappTokenPage from "@/components/dapp/dapp-token";
import { COMPANY_DETAILS } from "@/lib/dapp-config";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DappTokenPage
        projectName={COMPANY_DETAILS.name}
        socials={COMPANY_DETAILS.socials}
      />
    </main>
  );
}
