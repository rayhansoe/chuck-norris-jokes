import styles from './SearchSection.module.css'

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
				<button className={styles.searchButton}>search!</button>
			</div>
		</div>
	)
}

export default SearchSection
