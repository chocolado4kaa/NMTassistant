import React from "react";
import styles from './title.module.scss';

type TitleSectionProps = {
 children?: React.ReactNode;
}

const TitleSection: React.FC<TitleSectionProps> = ({children}) => {
    return(
        <div className={`${styles.sectiontitle} w-full relative flex justify-start items-center h-50 bg-yellow-400 shadow-xl shadow-yellow-400/40`}>
          <h1>{children}</h1>
        </div>
    )
}

export default TitleSection;