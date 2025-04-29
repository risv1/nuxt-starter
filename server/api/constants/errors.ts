type ErrorRes = {
  status: number;
  message: string;
  prettyMessage: string;
};

export const errors: Record<string, ErrorRes> = {
  ROUTE_NOT_FOUND: {
    status: 404,
    message: "Route not found",
    prettyMessage: "The requested route was not found on the server.",
  },
};
