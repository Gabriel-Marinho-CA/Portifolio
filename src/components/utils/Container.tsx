import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IContainer {
  children: JSX.Element | JSX.Element[];
  className?: string; // Torne opcional para maior flexibilidade
}

export const Container: React.FC<IContainer> = ({ children, className }) => {
  return (
    <div
      className={`${styles.container} ${className ? styles[className] : ""}`}
    >
      {children}
    </div>
  );
};
