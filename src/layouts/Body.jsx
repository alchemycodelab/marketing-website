 import HeaderBar from '../components/HeaderBar/HeaderBar.jsx'
import Footer from '../components/Footer/Footer.jsx';
import { Builder, BuilderComponent } from '../components/Builder/builder.js'
import registerComponents from '../components/Builder/register-components.js';

export default function Body({ pages, page, children }) {
	
	console.log('Builder page', page, children);

	registerComponents(Builder);
	
	return (
		<>
			<HeaderBar pages={pages} page={page}/>

			<main>
				<BuilderComponent page={page}/>
			</main>	
			
			<Footer pages={pages} page={page} />
		</>
	);
}	
	
