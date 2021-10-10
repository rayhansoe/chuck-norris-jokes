import { lazy, Suspense } from 'react'
import styles from './SearchSection.module.css'
const Button = lazy(() => import('../commons/Button/Button'))

const SearchSection = () => {
	return (
		<div className={styles.searchSection}>
			<div className={styles.searchWrapper}>
				<input
					type='text'
					className={styles.searchBox}
					onChange={() => 'hh'}
					placeholder={'Search...'}
				/>
				<Suspense fallback={<h1>Loading</h1>}>
					<Button label='search!' />
				</Suspense>
			</div>
		</div>
	)
}

export default SearchSection
