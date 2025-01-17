class ApiResponse {
  constructor(statusCode, date, message = "success") {
    (this.statusCode = statusCode),
      (this.date = date),
      (this.message = message),
      (this.success = statusCode < 400);
  }
}

export { ApiResponse };
