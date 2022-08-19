class AppError extends Error {
  public readonly message: string;

  public readonly whereOccours: string;

  public readonly statusCode: number;

  constructor(
    message: string,
    statusCode = 400,
    whereOccours = 'Server error',
  ) {
    super();
    this.whereOccours = whereOccours;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
