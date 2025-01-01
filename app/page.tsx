"use client";
import styles from "./page.module.css";
import {useState} from "react";
import fetchMonsterImg from "@/app/lib/getImgApi";
import MonsterForm from "@/app/components/MonsterForm";

export default function Home() {
  const [formData, setFormData] = useState({description: "", attribute: ""});
  const [monsterImg, setMonsterImg] = useState("");

  const handleFormSubmit = async (description: string, attribute: string) => {
    setFormData({description: description, attribute: attribute});
    const imageUrl: string = await fetchMonsterImg({description: description, attribute: attribute});
    setMonsterImg(imageUrl);
  }
  return (<div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Ai Monster Generator
      </h1>
      <MonsterForm onSubmit={handleFormSubmit} />
      <div className={styles.imageContainer}>
        {monsterImg && <img src={monsterImg} alt="Generated Monster" className={styles.monsterImage} width={300} height={300} />}
      </div>
    </main>


  </div>);
}
