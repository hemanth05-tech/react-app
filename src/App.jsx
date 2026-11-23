import './App.css'
import MemberCard from './Components/TeamMemberCard'
import { team } from './Data/Data'
function App() {
  return (
    <>
     <h1>Hey Guys this is my team member card</h1>
     {team.map((member) => (
       <MemberCard key={member.id} name={member.name} role={member.role} />
     ))}
    
    </>
    
  )
}

export default App
