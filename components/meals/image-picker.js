'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
	const imageInputRef = useRef();
	const [pickedImage, setPickedImage] = useState();

	function handlePick() {
		imageInputRef.current.click();
	}

	function handleImageChange(event) {
		const file = event.target.files[0];
		if (!file) {
			setPickedImage(null);
			return;
		}
		const fileReader = new FileReader();

		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && <Image src={pickedImage} fill alt='someimg' />}
				</div>
				<input
					className={classes.input}
					type='file'
					id={name}
					onChange={handleImageChange}
					accept='image/png, image/jpeg'
					name={name}
					ref={imageInputRef}
				/>
				<button className={classes.button} type='button' onClick={handlePick}>
					Pick an Image
				</button>
			</div>
		</div>
	);
}
