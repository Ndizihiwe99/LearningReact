import React from "react";
import styled from "styled-components";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().min(8, { message: "words must be over than 8 words" }),
  Telephone: z.number().min(10),
});

type FormData = z.infer<typeof schema>;

const FormAttributes = styled.form``;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const submitData = (data: FieldValues) => console.log(data);

  //handling onSubmit event using useRef hook
  /*const emailRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const person = { email: "", tel: 0 };

  //handling onSubmit event using useState hook
  const [person, setPerson] = useState({ Email: "", Tel: "" });

  const handleFormEvent = (Event: FormEvent) => {
    Event.preventDefault();
    /*if (emailRef.current != null)
      console.log((person.email = emailRef.current.value));
    if (telRef.current != null)
      console.log((person.tel = parseInt(telRef.current.value)));

    console.log(person);
  };*/

  return (
    <FormAttributes onSubmit={handleSubmit(submitData)}>
      <div className="mb-2">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          {...register("email")}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="mb-3 mt-5">
        <label htmlFor="exampleInputNumeber1" className="form-label ">
          TelephoneNumber
        </label>
        <input
          {...register("Telephone", { valueAsNumber: true })}
          /*onChange={(event) =>
            setPerson({ ...person, Tel: event.target.value })
          }*/ // used on useState hook
          //ref={telRef}: used on useRef hook
          //value={person.Tel}:  used on usestate hook
          type="number"
          className="form-control"
          id="exampleInputNumber1"
        />
        {errors.Telephone && <p>{errors.Telephone.message}</p>}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </FormAttributes>
  );
}
export default Form;
