import pkg from '@builder.io/react';
const { Builder, BuilderComponent } = pkg;
import registerComponents from './register-components.js';

registerComponents(Builder);

export default function BuilderServer({ page }) {
	
  if (!page && !Builder.isEditing && !Builder.isPreviewing) {
    return null; //<PageNotFound />;
  }

  return <BuilderComponent name="page" content={page} />;
}