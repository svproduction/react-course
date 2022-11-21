import { useForm, Controller } from "react-hook-form";
const About = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });
  return (
    <div>
      <h1>About</h1>
      <p>Some content</p>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => {
            return <input type="checkbox" {...field} />;
          }}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default About;
