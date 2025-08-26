import TopBar from "@/components/Header/components/TopBar"
import SearchBar from "@/components/Header/components/SearchBar"
import MobileBanner from "../MobileAppPromotion/MobileBanner"

const Index = () => {  
  
     
  return (
    <>
    <header>
      <div className="relative">
        <TopBar/>
        <SearchBar/>
        <MobileBanner/> 
      </div>
    </header>
    </>
  )
}

export default Index