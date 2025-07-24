import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  description: z.string().length(5),
  Amount: z.number(),
});

type FormData = z.infer<typeof schema>;

function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const submitForm = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Amount
        </label>
        <input
          {...register("Amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="exampleInputPassword1"
        />
        {errors.Amount && <p>{errors.Amount.message}</p>}
      </div>
      <div className="mb-3 ">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputCategory1" className="form-label">
          Category
        </label>
      </div>

      <button disabled={isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
