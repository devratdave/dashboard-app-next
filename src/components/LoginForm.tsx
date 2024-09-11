import InputBox from "components/ui/InputBox"
import Button from "components/ui/Button"
import ErrorComp from "components/ErrorComp"
import { useState } from "react"
import { useRouter } from "next/router"

const USER = {
  username: "admin",
  password: "password"
}

const LoginForm = () => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const router = useRouter()

  const onClick = () => {
    if(username === USER.username && password === USER.password) {
      router.push('/dashboard')
    } else if(username === '' || password === ''){
      setError('Fill in the credentials.')
      setTimeout(() => setError(''), 3000)
    } else {
      setError('Invalid Credentials.')
      setTimeout(() => setError(''), 3000)
      setUsername('')
      setPassword('')
    }
  }

  return(
    <div className="border border-solid border-slate-200 rounded-md p-6 bg-gray-950">
      <ErrorComp error={error} />
      <InputBox setValue={setUsername} value={username} placeholder="Username" type="text" />
      <InputBox setValue={setPassword} value={password} placeholder="Password" type="password" />
      <div className="px-4 mt-8">
        <Button onClick={onClick} action="Login" text="sm"/>
      </div>
    </div>
  )
}

export default LoginForm