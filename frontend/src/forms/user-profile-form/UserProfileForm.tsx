import { z } from "zod";


const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    addressLine1: z.string().min(1, "Address Line is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
})