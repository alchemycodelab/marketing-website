
export function getLoadAll(className, loadingFn) {
  let loaded = new WeakSet();

  return function loadActives() {
    const nodes = document.querySelectorAll(className);
    // console.log('loading', className, nodes);
    nodes.forEach(node => {
      if (loaded.has(node)) return;
      loaded.add(node);
      loadingFn(node);
    });
  };
}
