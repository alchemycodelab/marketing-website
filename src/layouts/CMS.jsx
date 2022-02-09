
import { Builder, BuilderComponent } from '../components/Builder/builder.js'
import registerComponents from '../components/Builder/register-components.js';

registerComponents(Builder);
	
export default function CMS({ page }) {
  return <BuilderComponent model="page" content={page} />
}
	
