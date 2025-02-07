class HttpExceptions extends Error {
  constructor(public status: number, public message: string) {
    super();
    this.status = status;
    this.message = message;
  }
}

export { HttpExceptions };
