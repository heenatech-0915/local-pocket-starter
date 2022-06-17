import IndexNavBar from '../components/indexNavBar'
import IndexMidSection from '../components/indexMidSection'
import Slide from '../components/slide'
import IndexServices from './indexServices';
import IndexFooter from './indexFooter';

function IndexDesktop() {
    return (
     
      <>
     
         <IndexNavBar/>
         <Slide/>
         <IndexMidSection/>
         <IndexServices/>
         <IndexFooter/>
         
      
         </>
   
    )
}

export default IndexDesktop;