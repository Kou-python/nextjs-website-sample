import styles from "./not-found.module.css"

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>
          <dd className={styles.text}>
            あなたがアクセスしようとしたページは存在しません
            <br />
            URLを再度ご確認ください
          </dd>
        </dt>
      </dl>
    </div>
  )
}
