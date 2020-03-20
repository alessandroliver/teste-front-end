import React, { useState, Fragment } from 'react'
import AddProductForm from './forms/AddProductForm'
import EditProductForm from './forms/EditProductForm'
import ProductTable from './tables/ProductTable'

import Header from '../src/template/Header'
import Footer from '../src/template/Footer'

import './App.css'

import 'font-awesome/css/font-awesome.min.css'

const App = () => {
	const productsData = [
		{ id: 'xsf3ds23', model: 'XT2041-1', price: '1407.12', brand: 'Motorola', color: 'Black', startDate: '2020-03-15', endDate: '2020-06-14' },
		{ id: '2r4fdd34', model: 'XT2041-1', price: '1207.12', brand: 'Motorola', color: 'Black', startDate: '2020-03-15', endDate: '2020-06-14' },
	]

	const initialFormState = { id: '', model: '', price: '', brand: '', color: '', startDate: '', endDate: '' }

	const [ products, setProducts ] = useState(productsData)
	const [ currentProduct, setCurrentProduct ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	function init(e) {
		document.getElementById("frame2").style.display = "none";
		document.getElementById("frame1").style.display = "block";	

	}

	document.addEventListener("DOMContentLoaded", function()
	{
		 init();
	 }, false);
	 
	
	 function codeGenerator() {
		let codeRandom =  Math.random().toString(36).slice(-8);
		for (let index = 0; index < products.length; index++) {
			if (products[index].id.localeCompare(codeRandom) === true){
				codeGenerator()
			}
			
		}
		return codeRandom
	}

	const addProduct = product => {
		document.getElementById("frame2").style.display = "none";
		document.getElementById("frame1").style.display = "block";

		product.id = codeGenerator()
		setProducts([ ...products, product ])
	}

	const deleteProduct = id => {
		setEditing(false)

		setProducts(products.filter(product => product.id !== id))
	}

	const updateProduct = (id, updatedProduct) => {
		document.getElementById("frame2").style.display = "none";
		document.getElementById("frame1").style.display = "block";


		setEditing(false)

		setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
	}

	const editRow = product => {
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";


		setEditing(true)

		setCurrentProduct({ id: product.id, model: product.model, price: product.price, brand: product.brand, color: product.color, startDate: product.startDate, endDate: product.endDate })
	}

	function demoDisplay() {
		document.getElementById("frame1").style.display = "none";
		document.getElementById("frame2").style.display = "block";
		//document.getElementById('footer1').setAttribute('position', 'absolute')
		//console.log(document.getElementById('footer1').getAttribute('position'))

	}

	

	document.addEventListener("DOMContentLoaded", function (event) {
		//document.getElementById('footer1').setAttribute('position', 'relative')

	}, false);


	return (
		<React.Fragment>
			<div id= 'englobeall'>
			<Header />
			<br />
			<div className="container">
				<div className="flex-column">
					<div id = 'frame1' className="flex-large">
						<div className="flex-between">
							<p><strong>Produtos</strong></p>
							<button onClick = {demoDisplay}>+ <i class="fa fa-mobile fa-1x"></i>  Adicionar</button>
						</div>
						<ProductTable products={products} editRow={editRow} deleteProduct={deleteProduct} />
					</div>
					<div id = 'frame2' className="flex-large">
						{editing ? (
							<Fragment>
								<p><strong>Detalhes do produto</strong></p>
								<EditProductForm
									editing={editing}
									setEditing={setEditing}
									currentProduct={currentProduct}
									updateProduct={updateProduct}
								/>
							</Fragment>
						) : (
							<Fragment>
								<p><strong>Detalhes do produto</strong></p>
								<AddProductForm 
									addProduct={addProduct}
									updateProduct={updateProduct}
								/>
							</Fragment>
						)}
					</div>
				</div>
			</div>
			<br />
			<Footer />
			</div>
		</React.Fragment>
	)
}

export default App