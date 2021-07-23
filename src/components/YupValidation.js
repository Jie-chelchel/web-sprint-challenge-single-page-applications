import * as yup from "yup";

const YupValidation = yup.object().shape({
  pizzaName: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  size: yup.string().oneOf(["sm", "md", "lg", "xl"], "You must select a size"),
  pepperoni: yup.boolean().oneOf([true, false]),
  ham: yup.boolean().oneOf([true, false]),
  ground_beef: yup.boolean().oneOf([true, false]),
  Jalapenos: yup.boolean().oneOf([true, false]),
  tomatoes: yup.boolean().oneOf([true, false]),
  special_instruction: yup.string().notRequired(),
});

export default YupValidation;
