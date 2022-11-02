import { builder, Builder, BuilderComponent } from '@builder.io/react';
import { KEY } from './constants.js';
import registerComponents from './register-components.js';
// This needs to be here or the CSS is messed up in dev mode:
import HeaderBar from '../components/HeaderBar/HeaderBar.jsx';
import Footer from '../components/Footer/Footer.jsx';

builder.init(KEY);
registerComponents(Builder);

export default function CMS({ page, model }) {
  return <BuilderComponent model={model} content={page} />;
}
