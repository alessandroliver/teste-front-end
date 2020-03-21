import React, { useState } from 'react'

const AddProductForm = props => {
	const initialFormState = { id: '', model: '', price: '', brand: '', color: '', startDate: '', endDate: '' }
	const [ product, setProduct ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	function setMinDate (){
		var dateOneDay = new Date(document.getElementById("inicDate").value)
		var d = dateOneDay.getFullYear() + "-" + ("0" + (dateOneDay.getMonth() + 1)).slice(-2)
				+ '-' + (dateOneDay.getDate() +2)
		document.getElementById("finalDate").setAttribute("min", d)
	}


	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!product.model || !product.price || !product.brand || !product.color || !product.startDate || !product.endDate) return

				props.addProduct(product)
				setProduct(initialFormState)
			}}
		>
			<label>Modelo</label>
			<input type="text" name="model" title="Não é permitido espaço em branco!" pattern="[^' ']+" minLength="2" maxLength="255" value={product.model} onChange={handleInputChange} />	
			<label>Preço</label>
			<input type="number" name="price" min="0.01" step="0.01" value={product.price} onChange={handleInputChange} />
			<label>Marca</label>
			<input type="text" name="brand" title="Não é permitido espaço em branco!" minLength="2" pattern="[^' ']+" maxLength="255" value={product.brand} onChange={handleInputChange} />
			<label>Cor</label>
      		<select name="color" size="1" value={product.color} onChange={handleInputChange}>
			  	<option></option>
        		<option value="Black">BLACK</option>
        		<option value="White">WHITE</option>
        		<option value="Gold">GOLD</option>
        		<option value="Pink">PINK</option>
      		</select>
			<label>Início das vendas</label>
			<input type="date" name="startDate" id = "inicDate"  min="2018-12-26" value={product.startDate} onChange={handleInputChange} />
			<label>Fim das vendas</label>
			<input type="date" name="endDate" id = "finalDate" onClick = {setMinDate} value={product.endDate} onChange={handleInputChange} />
			<br />
			<button onClick={() => props.updateProduct()} className="button muted-button">
        		Voltar
      		</button>
			<button>Salvar</button>
		</form>
	)
}

export default AddProductForm
