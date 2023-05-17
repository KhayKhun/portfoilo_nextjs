import WelcomeComponent from "@/components/welcome"
import PersonalInformationComponent from "@/components/personal"
import SkillsComponent from "@/components/skills"

export default async function Home() {

  return (
  <div className="">
    <WelcomeComponent/>
    <PersonalInformationComponent/>
    <SkillsComponent/>
  </div>
  )
}
