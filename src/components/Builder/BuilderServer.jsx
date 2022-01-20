import pkg from '@builder.io/react';
const { Builder, BuilderComponent } = pkg;
import registerComponents from './register-components.js';
import GlobalContext from '../GlobalContext.js';

registerComponents(Builder);

export default function BuilderServer({ page, cohorts }) {
  return (
    <GlobalContext.Provider value={{ cohorts }}>
      <BuilderComponent name="page" content={page} />
    </GlobalContext.Provider>
  );
}