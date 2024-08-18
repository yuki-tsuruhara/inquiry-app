import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPT_FILE_TYPE = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const formSchema = z.object({
  username: z.string().min(2, { message: "you must be type 2 character" }),
  subject: z.string().min(2, { message: "you must be type 2 character" }),
  email: z.string().email({ message: "invalid email" }),
  content: z
    .string()
    .min(10, { message: "you must be type more than 10 character" })
    .max(160, { message: "you must be type less than 160 character" }),
  file: z
    .custom<FileList>()
    .refine((files) => files?.length > 0, "file is must")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "file size is less than 5mb"
    )
    .refine(
      (files) => ACCEPT_FILE_TYPE.includes(files?.[0]?.type),
      "invaild file type. you can use jpeg, jpg, png, webp"
    ),
});
