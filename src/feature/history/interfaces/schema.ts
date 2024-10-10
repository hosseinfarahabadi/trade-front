import { z } from "zod";

export const STrade = z.object({  
    RR: z
      .string({ invalid_type_error: "فیلد RR نمیتواند خالی باشد" })
      .min(1, "فیلد RR نمیتواند خالی باشد.")
      .max(4, "فیلد نام نمیتواند بیش از 4 کاراکتر باشد")

  });