export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;

  constructor(
    statusCode: number,
    code: string,
    message: string,
  ) {
    super(message);

    this.name = "AppError";
    this.statusCode = statusCode;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(
      404,
      "NOT_FOUND",
      message,
    );

    this.name = "NotFoundError";
  }
}
export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized") {
    super(
      401,
      "UNAUTHORIZED",
      message,
    );

    this.name = "UnauthorizedError";
  }
}
export class ForbiddenError extends AppError {
  constructor(message = "Forbidden") {
    super(
      403,
      "FORBIDDEN",
      message,
    );

    this.name = "ForbiddenError";
  }
}
export class BadRequestError extends AppError {
  constructor(message = "Bad request") {
    super(
      400,
      "BAD_REQUEST",
      message,
    );

    this.name = "BadRequestError";
  }
}