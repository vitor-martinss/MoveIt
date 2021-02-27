import styles from '../styles/components/Profile.module.css'


export function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img src="https://i.pravatar.cc/300" alt=""/>
			<div>
				<strong>Vitor Martins</strong>
				<p>
					<img src="icons/level.svg" alt="level-icon"/>
					Level 1
				</p>
			</div>
		</div>
	)
}