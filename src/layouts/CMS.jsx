import { Builder, BuilderComponent } from '../components/Builder/builder.js'
import registerComponents from '../components/Builder/register-components.js';
import HeaderBar from '../components/HeaderBar/HeaderBar.jsx'
import Footer from '../components/Footer/Footer.jsx';

registerComponents(Builder);
	
export default function CMS({ pages, page }) {
  return (
    <>
      <HeaderBar pages={pages} page={page}/>

        <main>		
          <BuilderComponent model="page" content={page} />
        </main>	

      <Footer pages={pages} page={page} />
    </>
  );
}  
