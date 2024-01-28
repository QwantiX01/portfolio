import styles from "./Line.module.css";

const Line = ({ command, prefix, link = "", linkName = "" }) => {
  let px = "|",
    pxStyle;
  switch (prefix) {
    case "err":
      pxStyle = styles.error;
      break;
    default:
      pxStyle = styles.highlighted;
      break;
  }

  return (
    <>
      <p className={styles.line}>
        <span className={pxStyle}>{px}</span>{" "}
        <a className={styles.link} href={link}>
          {linkName}
        </a>{" "}
        {command}
      </p>
    </>
  );
};

export default Line;
