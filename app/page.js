"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

const [question, setQuestion ] = useState(null)
const [answer, setAnswer] = useState(null)
  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
     .then((res) => res.json())
     .then((data) => {
        console.log(data);

        setQuestion(data.setup)
        setAnswer(data.punchline)
      })
     .catch((err) => {
        console.error(err);
      });
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="modal">
        <p>wanna hear a joke?</p>
        <div className="text-white flex gap-5">
          <button className=" w-16 p-1 rounded-md bg-red-500">No</button>
          <button onClick={fetchJoke} className="bg-green-500 w-16 p-1 rounded-md">Yes</button>
        </div>
      </div>

      {answer && <section>
        <p>{question}</p>
        <p>{answer}</p>
        </section>}
    </main>
  );
}
