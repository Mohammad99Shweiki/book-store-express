"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookSchema = void 0;
const zod_1 = require("zod");
// export type book = z.infer<typeof bookSchema>;
exports.createBookSchema = zod_1.z.object({
    title: zod_1.z.string().max(30).nonempty(),
    description: zod_1.z.string().nonempty(),
});
