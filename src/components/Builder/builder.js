import pkg, { builder as b, Builder as B, BuilderComponent as BC } from '@builder.io/react';

const builder = pkg.builder || b;
const Builder = pkg.Builder || B;
const BuilderComponent = pkg.BuilderComponent || BC;

builder.init('b9c103cda0f24735921c917287d4fc23');

export { builder, Builder, BuilderComponent };