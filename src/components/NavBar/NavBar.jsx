import styles from './NavBar.module.css'

const NavBar = () => {
	const slug = !false
	return (
		<nav className={styles.navBg}>
			<div className={styles.navbar}>
				{slug && (
					<a className={styles.navButton} href='/'>
						👈🏿
					</a>
				)}
				<h1 className={styles.logo}>Chuck Norris</h1>
			</div>
		</nav>
	)
}

export default NavBar
