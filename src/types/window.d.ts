// Augment the Window interface
declare global {
  interface Window {
    // Jest / Enzyme for testing ts & tsx
    describe: any;
    it: any;
    mount: any;
    render: any;
    shallow: any;
  }
}

export default Window;
