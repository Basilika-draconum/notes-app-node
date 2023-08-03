const messages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
};
export const HttpError = (status, message = messages[status]) => { return { status, message }; };
//# sourceMappingURL=HttpError.js.map