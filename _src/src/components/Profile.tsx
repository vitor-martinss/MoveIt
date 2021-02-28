import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'


export function Profile() {
	const {level} = useContext(ChallengesContext)
	return (
		<div className={styles.profileContainer}>
			<img src="https://avatars.githubusercontent.com/u/37670851?s=460&u=23a41cf27b38ee6a6efad71cc2440bde915e3d2a&v=4" alt="avatar"/>
			<div>
				<strong>Vitor Martins</strong>
				<p>
					<img src="icons/level.svg" alt="level-icon"/>
					Level {level}
				</p>
			</div>
		</div>
	)
}