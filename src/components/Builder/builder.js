import pkg, { builder as b, Builder as B, BuilderComponent as BC } from '@builder.io/react';

const builder = b ?? pkg.builder;
const Builder = B ?? pkg.Builder;
const BuilderComponent = BC ?? pkg.BuilderComponent;

builder.init('b9c103cda0f24735921c917287d4fc23');

export { Builder, BuilderComponent };