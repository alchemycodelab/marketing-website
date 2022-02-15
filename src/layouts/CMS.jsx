import { Builder, BuilderComponent } from '../components/Builder/builder.js'
import registerComponents from '../components/Builder/register-components.js';
import HeaderBar from '../components/HeaderBar/HeaderBar.jsx'
import Footer from '../components/Footer/Footer.jsx';

registerComponents(Builder);
	
export default function CMS({ page }) {
  return <BuilderComponent model="page" content={page} />;
}  
