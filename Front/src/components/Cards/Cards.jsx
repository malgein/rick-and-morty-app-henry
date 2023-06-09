import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
	
   return (
		<div className={styles.container}>
			{characters.map(({id, gender, species, name, image})=>{
				return <Card onClose={onClose} key={id} name={name} species={species} gender={gender}
					image={image} id={id}/>
			})}
   </div>
   )   
}
