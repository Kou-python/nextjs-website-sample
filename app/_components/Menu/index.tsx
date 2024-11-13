"use client";
import styles from "./index.module.css"
import Link from "next/link"
import Image from "next/image"
import cx from "classnames"
import { useState } from "react";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return (
		<div>
			<nav className={cx(styles.nav, isOpen&&styles.open)}>
				<ul>
					<li className={styles.items}>
						<Link href="news">ニュース</Link>
					</li>
					<li className={styles.items}>
						<Link href="members">メンバー</Link>
					</li>
					<li className={styles.items}>
						<Link href="contact">お問い合わせ</Link>
					</li>
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            priority
          />
        </button>
			</nav>
			<button className={styles.button} onClick={open}>
				<Image src="/menu.svg" alt="menu" width={24} height={24} />
			</button>
		</div>
  );
}
