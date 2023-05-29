import WelcomeComponent from "@/components/welcome"
import PersonalInformationComponent from "@/components/personal"
import SkillsComponent from "@/components/skills"
import Script from 'next/script'

export default async function Home() {

  return (
  <div className="">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QZKLNHKL35" 
      strategy="afterInteractive"
      />
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window && window.dataLayer && dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-QZKLNHKL35');
        `}
      </Script>
    <WelcomeComponent/>
    <PersonalInformationComponent/>
    <SkillsComponent/>
  </div>
  )
}
