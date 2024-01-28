import styles from "./Line.module.css";

const Line = ({ content, prefix }) => {
  let px = "~ ",
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
        <span className={pxStyle}>{px}</span> {content}
      </p>
    </>
  );
};

export default Line;
