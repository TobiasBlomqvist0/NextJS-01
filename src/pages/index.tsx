import style from '../styles/Home.module.css'
import Box from '@/components/Box/Box'
import Form from '@/components/Box/Form'
import Topbar from '@/components/Box/Topbar'

export default function Home() {
  //Logic
  async function fetchUsers() {
    const response = await fetch("http://10.111.3.78:3000/api/users")
    const data = await response.json()
    console.log(data)
  }
  fetchUsers()

  return (
    <div>
      <Topbar/>
      <h1>Welcome</h1>
      <div className={style.main}>
        <Box color={'blue'} num={1}/>
        <Box color={'green'} num={2}/>
        <Box color={'orange'} num={3}/>
      </div>
      <Form/>
    </div>
  )
}
