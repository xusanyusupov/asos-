import TopBar from "@/components/Header/components/TopBar"
import SearchBar from "@/components/Header/components/SearchBar"

const Index = () => {
  return (
    <>
    <header>
      <div className="relative">
        <TopBar/>
        <SearchBar/>
     </div>
    </header>
    </>
  )
}

export default Index