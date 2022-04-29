import { builder, Builder, BuilderComponent } from '@builder.io/react';
import registerComponents from './register-components.js';
// This needs to be here or the CSS is messed up in dev mode:
import HeaderBar from '../components/HeaderBar/HeaderBar.jsx'
import Footer from '../components/Footer/Footer.jsx';

builder.init('b9c103cda0f24735921c917287d4fc23');
registerComponents(Builder);
	
export default function CMS({ page }) {
  return <BuilderComponent model="page" content={page} />;
}  
