import IndexNavBar from '../components/indexNavBar'
import IndexMidSection from '../components/indexMidSection'
import Slide from '../components/slideMobile'
import IndexServices from './indexServices';
import IndexFooter from './indexFooter';

function IndexMobile({ setShowDownloadModal }) {
    return (
     
      <>
     
         <IndexNavBar/>
         <SlideMobile/>
         <IndexMidSection/>
         <IndexServices/>
         <IndexFooter/>
         
      
         </>
   
    )
}

export default IndexMobile;