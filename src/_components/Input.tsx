import { useState } from "react"
import styles from './Input.module.css'
import Image from 'next/image'
import eyeOn from "@/src/assets/icons/eye-on.png"
import eyeOff from "@/src/assets/icons/eye-off.png"

export default function Input({ inputType='password' }) {
  const [showPassword, setShowPassword] = useState(true);
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);

  const ERROR_TEXT = '내용을 다시 작성해주세요';

  const toggleInputType = () => {
    setShowPassword(!showPassword);
  }
  
  const toggleImage = showPassword ? eyeOn : eyeOff;

  const handleChange = (e: any) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsError(newValue.trim() === '');
  }

  return (
    <>
      <div>
        <input className={styles.Input} placeholder="내용 입력" type={showPassword ? 'text' : 'password'} onChange={handleChange}></input>
        {inputType === 'password' && (
          <button className={styles.ButtonToggle} onClick={toggleInputType}>
            <Image className={styles.ImageToggle} src={toggleImage} alt="비밀번호 보기/가리기."></Image>
          </button> 
        )}      
        {isError && <p className={styles.ErrorText}>{ERROR_TEXT}</p>}
      </div>
    </>
  )
}