import { lazy, Suspense } from 'react'
import styles from './JokesSection.module.css'
const Button = lazy(() => import('../commons/Button/Button'))

const JokesSection = () => {
	const jokes = '“Chuck Norris is so awesome when he touches your house it burns down.”'
	return (
		<div className={styles.jokesSection}>
			<div className={styles.jokesWrapper}>
				<img src={process.env.PUBLIC_URL + '/images/chuck-norris 1.png'} alt='chuck norris' />
				<p className={styles.jokes}>{jokes}</p>
				<Suspense fallback={<h1>Loading.... </h1>}>
					<Button label='Another!' />
				</Suspense>
			</div>
		</div>
	)
}

export default JokesSection
