"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = validateSchema;
const zod_1 = require("zod");
const http_status_codes_1 = require("http-status-codes");
const config_1 = require("../config");
function validateSchema(schema) {
    return (req, res, next) => {
        try {
            const validatedData = schema.parse(req.body);
            req.body = validatedData;
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                const errorMessages = error.errors.map((issue) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }));
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    error: http_status_codes_1.StatusCodes.BAD_REQUEST.toString,
                    errorMessages,
                });
                config_1.logger.error(error);
            }
            else {
                config_1.logger.info(error);
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
                    error: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR.toString,
                });
            }
        }
    };
}
