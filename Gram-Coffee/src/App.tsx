import Home from "./pages/home"
import Navbar from "./common/navbar"
import { SelectedPage } from "./common/utils/types"
import { useState } from "react"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  return (
    <div className="app bg-gray-20">
      <Navbar         
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
