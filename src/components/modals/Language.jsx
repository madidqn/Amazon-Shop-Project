import styles from "./Language.module.css";

function Language() {
  return (
    <div className={styles.modalLanguage}>
      <span>
        Change language
        <a href="#"> Learn more</a>
      </span>
      <div className={styles.selectLanguage}>
        <div>
          <input type="radio" id="en" name="language" />
          <label htmlFor="en">English - EN</label>
        </div>
        <div>
          <input type="radio" id="es" name="language" />
          <label htmlFor="es">español - ES</label>
        </div>
        <div>
          <input type="radio" id="ar" name="language" />
          <label htmlFor="ar">العربية - AR</label>
        </div>
        <div>
          <input type="radio" id="de" name="language" />
          <label htmlFor="de">Deutsch - DE</label>
        </div>
        <div>
          <input type="radio" id="he" name="language" />
          <label htmlFor="he">עברית - HE</label>
        </div>
        <div>
          <input type="radio" id="ko" name="language" />
          <label htmlFor="ko">한국어 - KO</label>
        </div>
        <div>
          <input type="radio" id="pt" name="language" />
          <label htmlFor="pt">português - PT</label>
        </div>
        <div>
          <input type="radio" id="zh" name="language" />
          <label htmlFor="zh">中文 (简体) - ZH</label>
        </div>
      </div>
      <div className={styles.changeCurrency}>
        <p>
          <span> Change currency</span>
          <a href="#">Learn more</a>
        </p>
        <p>
          <span> $ - USD - US Dollar</span>
          <a href="#">Change</a>
        </p>
      </div>
      <div className={styles.region}>
        <div>
          <img src="/language.avif" alt="language" />
          <p>you are shopping on Amazon.com</p>
        </div>
        <a href="#">Change country/region</a>
      </div>
    </div>
  );
}

export default Language;
