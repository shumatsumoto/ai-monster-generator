"use client";
import styles from "./page.module.css";
import {useState} from "react";
import MonsterForm from "@/app/components/MonsterForm";

export default function Home() {
  const [formData, setFormData] = useState({description: "", attribute: ""});
  const handleFormSubmit = (description: string, attribute: string) => {
    setFormData({description: description, attribute: attribute});
  }
  return (<div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Ai Monster Generator
      </h1>
      <MonsterForm onSubmit={handleFormSubmit} />
    </main>


  </div>);
}
