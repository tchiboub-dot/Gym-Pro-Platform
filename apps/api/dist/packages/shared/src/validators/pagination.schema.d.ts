import { z } from "zod";
export declare const PaginationQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
    sortBy: z.ZodOptional<z.ZodString>;
    sortDir: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    sortDir: "asc" | "desc";
    sortBy?: string | undefined;
}, {
    page?: number | undefined;
    pageSize?: number | undefined;
    sortBy?: string | undefined;
    sortDir?: "asc" | "desc" | undefined;
}>;
export type PaginationQuery = z.infer<typeof PaginationQuerySchema>;
