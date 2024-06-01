import * as yup from "yup"

export const FarmerSchema = yup.object({
  Names: yup.string().required(),
  email: yup.string().required().email()


});

export type Farmer = yup.InferType<typeof FarmerSchema>
