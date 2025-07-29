import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import categories from "../NoneComponentsExport";

interface submitDataProps {
  onsubmit: (data: FormData) => void;
}

const schema = z.object({
  description: z.string().length(5),
  Amount: z.number().min(0.01),
  category: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

function ExpenseForm({ onsubmit }: submitDataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mb-3">
        <label htmlFor="exampleInputDesccriptio1" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="exampleInputdescriptio2"
          aria-describedby="descriptionHelp"
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputAmount1" className="form-label">
          Amount
        </label>
        <input
          {...register("Amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="exampleInputAmoun2"
        />
        {errors.Amount && <p>{errors.Amount.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputCategory1" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select"
          aria-label="Default select example"
        >
          <option value=""></option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      <button disabled={isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
