export function getLoadAll(className, loadingFn) {
  let loaded = new WeakSet();

  return function () {
    const nodes = document.querySelectorAll(className);
    // console.log('loading', className, nodes);

    nodes.forEach((node) => {
      // prevent attaching multiple listeners...
      if (loaded.has(node)) return;

      loaded.add(node);
      loadingFn(node);
    });
  };
}
