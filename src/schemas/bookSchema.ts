import { z } from 'zod';

// export type book = z.infer<typeof bookSchema>;

export const createBookSchema = z.object({
    title: z.string().max(30).nonempty(),
    description: z.string().nonempty(),
});
