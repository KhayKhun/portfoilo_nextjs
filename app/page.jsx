import WelcomeComponent from "@/components/welcome"
import PersonalInformationComponent from "@/components/personal"
import SkillsComponent from "@/components/skills"
import Script from 'next/script'

export default async function Home() {

  return (
  <div className="">
    <WelcomeComponent/>
    <PersonalInformationComponent/>
    <SkillsComponent/>
  </div>
  )
}
