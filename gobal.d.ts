declare global {
    var mongoose: {
      conn: any;
      promise: Promise<any> | null;
    };
  }
  
  // This is required so that TypeScript recognizes this file as a module.
  export {};
  