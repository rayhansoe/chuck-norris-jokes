import styles from './NavBar.module.css'

const NavBar = () => {
	const slug = !false
	return (
		<nav className={styles.navBg}>
			<div className={styles.navbar}>
				{slug && (
					// <a className={styles.navButton} href='/'>
					// 	<img src={process.env.PUBLIC_URL + '/images/left-arrow-Icon lg.png'} alt='' />
					// </a>
					<img
						className={styles.navButton}
						src={process.env.PUBLIC_URL + '/images/left-arrow-Icon lg.png'}
						alt=''
					/>
				)}
				<h1 className={styles.logo}>Chuck Norris</h1>
			</div>
		</nav>
	)
}

export default NavBar
