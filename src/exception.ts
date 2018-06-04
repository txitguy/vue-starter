export default class Exception extends Error {
  constructor(error: string) {
    super();
    try {
      // Send to API
    } finally {
      console.error(error);
    }
  }
}
