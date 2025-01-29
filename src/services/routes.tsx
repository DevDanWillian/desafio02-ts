import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "src/components/AppContext"
import { Conta } from "src/pages/Conta"
import { ContaInfo } from "src/pages/ContaInfo"
import { Home } from "src/pages/Home"

export const MainRoutes = () => {

    const { isLoggedIn } = useContext(AppContext)

  return(

    <Routes>
                <Route path="/" element={!isLoggedIn ? <Home /> : <Conta/>} />
                <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home/>} />
                <Route path='/containfo/:id' element={isLoggedIn ? <ContaInfo/> : <Home/>}/>
                
              </Routes>
  )
}