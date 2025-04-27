import React from "react";
import styles from './title.module.scss';

type TitleProps = {
 children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({children}) => {
    return(
        <div className={`${styles.title} title w-full relative flex justify-center`}>
          <h3>{children}</h3>
        </div>
    )
}

export default Title;