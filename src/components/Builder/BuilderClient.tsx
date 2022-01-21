import { Builder, BuilderComponent } from '@builder.io/react';
import registerComponents from './register-components.js';

registerComponents(Builder);

export default function BuilderClient({ page }) {
	return <BuilderComponent name="page" content={page} />;
}