import '../styles/reset.scss';
import '../styles/globals.scss';
import '../styles/typography.scss';
import '../styles/color.scss';
import HeaderBar from '../components/HeaderBar/HeaderBar.jsx'
import Footer from '../components/Footer/Footer.jsx';

export default function Page({ children, pages, page }) {
	return (
		<>
			<HeaderBar pages={pages} page={page}/>
			
			<main>
				{children}
			</main>
			
			<Footer pages={pages} page={page} />
		</>
	);
}	
	
