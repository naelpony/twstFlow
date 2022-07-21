import React from 'react';
import style from './stylemodule/list.module.sass'




function Listitems({ erorrs, options, value, onChange, op }) {	

	if (erorrs){
		return <p>Error</p>
	} else{
		return (
			<select className={style.select} 
				value = {value}
				onChange = {e => onChange(e.target.value)}
			>
				<option disabled value="">Марка</option>
				{options.map((models) => 
				<option className={style.option} key={models} value={op.title}>
					{models}
				</option>
				)}
			</select>
		)
	}



}

export default Listitems;