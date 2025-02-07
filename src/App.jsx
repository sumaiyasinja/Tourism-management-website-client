import { Outlet } from "react-router"

function App() {

  return (
    <div className="bg-blue-500">
      <h2 className="text-center py-6">Destina Go </h2>
      <p className="text-center">app</p>
      <Outlet></Outlet>
    </div>
  )
}

export default App
