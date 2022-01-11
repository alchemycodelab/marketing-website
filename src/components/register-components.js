import Test from './Test';

export default function registerComponents(Builder) {

  function register(Component) {
    Builder.registerComponent(Component, Component.config || {});
  }

  register(Test);
}
