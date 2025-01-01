import React, {useState} from 'react';
import styles from "./MonsterForm.module.css";
import {MONSTER_ATTRIBUTES} from "@/app/constants/attributes";

type MonsterFormProps = {
  onSubmit: (description: string, attribute: string) => void;
}

const MonsterForm = ({onSubmit}: MonsterFormProps) => {
  const [description, setDescription] = useState("");
  const [attribute, setAttribute] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(description, attribute);
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>dscription</label>
        <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="example:cute" required className={styles.input} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="attribute" className={styles.label}>
          モンスターの属性を選択
        </label>
        <select id="attribute" value={attribute} onChange={e => setAttribute(e.target.value)} required className={styles.select}>
          <option value="">選択してください</option>
          {MONSTER_ATTRIBUTES.map((attribute) => (
            <option key={attribute.en} value={attribute.en}>{attribute.ja}</option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.button}>
        モンスターの画像生成
      </button>
    </form>
  );
}

export default MonsterForm;