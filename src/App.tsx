import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface DefaultValues {
  name: string;
  nim: string;
  email: string;
}

const App = () => {
  const [nim, setNim] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const { register, handleSubmit, resetField } = useForm<DefaultValues>();

  const onSubmit = handleSubmit((e) => {
    if (!e.nim || !e.name || !e.email) {
      toast.error("Lengkapi data");
      return;
    }

    setNim(e.nim);
    setName(e.name);
    setEmail(e.email);
    resetField("nim");
    resetField("name");
    resetField("email");
  });

  return (
    <main className="grid grid-cols-2 bg-gray-100 h-screen p-8 place-items-center">
      <section className="flex flex-col gap-6 w-[50%]">
        <section className="flex flex-col gap-2">
          <label htmlFor="nim">NIM</label>
          <input
            type="text"
            {...register("nim")}
            id="nim"
            placeholder="Masukkan NIM"
            className="p-2 rounded-md"
          />
        </section>
        <section className="flex flex-col gap-2">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            {...register("name")}
            id="name"
            placeholder="Masukkan nama lengkap"
            className="p-2 rounded-md"
          />
        </section>
        <section className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Masukkan email"
            className="p-2 rounded-md"
          />
        </section>
        <button
          className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600 mt-4"
          onClick={onSubmit}
        >
          Submit
        </button>
      </section>
      <section>
        <h2 className="font-bold text-lg text-center">{nim}</h2>
        <h2 className="font-bold text-lg text-center">{name}</h2>
        <h2 className="font-bold text-lg text-center">{email}</h2>
      </section>
    </main>
  );
};

export default App;
