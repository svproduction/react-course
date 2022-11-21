import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup
      .number("Need number data")
      .integer()
      .min(18, "18")
      .max(65, "65")
      .required(),
  })
  .required();

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div>
      <h1>Home</h1>
      <p>This home page</p>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("firstName")} />
        <p>{errors.firstName?.message}</p>

        <input {...register("age")} />
        <p>{errors.age?.message}</p>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Home;
