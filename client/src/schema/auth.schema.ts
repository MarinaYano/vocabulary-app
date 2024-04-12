import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
 
export const authSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be more than 2 letters."
    })
    .max(50, {
    message: "Username must be less than 50 letters."
    }),
  password: z
    .string({
      invalid_type_error: "Enter password."
    })
    .min(8, {
      message: "Password must be more than 8 letters."
    })
})

export type AuthSchema = z.infer<typeof authSchema>;
export const authResolver = zodResolver(authSchema);