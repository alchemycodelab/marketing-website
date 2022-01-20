import { Builder, BuilderComponent } from '@builder.io/react';
import registerComponents from './register-components.js';
import GlobalContext from '../GlobalContext.js';

registerComponents(Builder);

export default function BuilderClient({ page, cohorts }) {
	return (
		<GlobalContext.Provider value={{ cohorts }}>
			<BuilderComponent name="page" content={page} />
		</GlobalContext.Provider>
	);
}