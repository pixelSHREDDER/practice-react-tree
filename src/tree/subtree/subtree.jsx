import React, { useEffect, useRef, useState } from 'react';
import styles from './subtree.module.css';
import clsx from 'clsx';
import { getReadableText } from '../../util/transforms';

export default function Subtree({open, header, children}) {
    const [isOpen, setIsOpen] = useState(open);
    const [height, setHeight] = useState(open ? undefined : 0);
    const ref = useRef(null);
    const readableHeader = getReadableText(header);

    useEffect(() => {
        if (!height || !isOpen || !ref.current) {
            return undefined;
        }

        const resizeObserver = new ResizeObserver(el => setHeight(el[0].contentRect.height));

        resizeObserver.observe(ref.current);

        return () => resizeObserver.disconnect();
    }, [height, isOpen]);
    
    useEffect(() => {
        if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
        else setHeight(0);
    }, [isOpen]);
  
    return (
        <li className={styles.subtree}>
            <div>
                <div className={styles.subtreeHeader}>
                    <button
                        type="button"
                        className={styles.subtreeIconButton}
                        onClick={() => setIsOpen((prev) => !prev)}>
                        <i
                            className={clsx([styles.subtreeArrow,
                                isOpen ? styles.subtreeArrowDown : styles.subtreeArrowRight
                            ])} />
                    </button>
                    <div className={styles.subtreeTitle}>{readableHeader}</div>
                </div>
            </div>
            <div className={styles.subtreeContent} style={{ height }}>
                <div ref={ref}>
                    <ul className={styles.subtreeContentContainer}>{children}</ul>
                </div>
            </div>
        </li>
    );
}