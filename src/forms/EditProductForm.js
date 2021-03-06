import React, { useState, useEffect } from 'react'

const EditProductForm = props => {
  const [ product, setProduct ] = useState(props.currentProduct)

  useEffect(
    () => {
      setProduct(props.currentProduct)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  function setMinDate (){
		var dateOneDay = new Date(document.getElementById("inicDateEdit").value)
		var d = dateOneDay.getFullYear() + "-" + ("0" + (dateOneDay.getMonth() + 1)).slice(-2)
				+ '-' + (dateOneDay.getDate() +2)
		document.getElementById("finalDateEdit").setAttribute("min", d)
	}

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateProduct(product.id, product)
      }}
    >
      <label>Modelo</label>
      <input id = 'm1' type="text" name="model" title="Não é permitido espaço em branco!" pattern="[^' ']+"  minLength="2" maxLength="255" value={product.model} onChange={handleInputChange} />
      <label>Preço</label>
			<input type="number" name="price" step="0.01" value={product.price} onChange={handleInputChange} />
      <label>Marca</label>
			<input type="text" name="brand" title="Não é permitido espaço em branco!" pattern="[^' ']+" minLength="2" maxLength="255" value={product.brand} onChange={handleInputChange} />
      <label>Cor</label>
      <select name="color" size="1" value={product.color} onChange={handleInputChange}>
        <option></option>
        <option value="Black">BLACK</option>
        <option value="White">WHITE</option>
        <option value="Gold">GOLD</option>
        <option value="Pink">PINK</option>
      </select>
      <label>Início das vendas</label>
			<input type="date" name="startDate" id = "inicDateEdit" min="2018-12-26" value={product.startDate} onChange={handleInputChange} />
      <label>Fim das vendas</label>
			<input type="date" name="endDate" id = "finalDateEdit" onClick = {setMinDate} value={product.endDate} onChange={handleInputChange} />
      <br />
      <button onClick={() => props.updateProduct()} className="button muted-button">
        Voltar
      </button>
      <button>Salvar</button>
    </form>
  )
}

export default EditProductForm
