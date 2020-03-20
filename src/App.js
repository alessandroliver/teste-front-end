import React, { useState, Fragment } from 'react'
import AddProductForm from './forms/AddProductForm'
import EditProductForm from './forms/EditProductForm'
import ProductTable from './tables/ProductTable'

import './App.css'

import 'font-awesome/css/font-awesome.min.css'

const App = () => {
	const productsData = [
		{ id: 'xsf3ds23', model: 'XT2041-1', price: '1407.12', brand: 'Motorola', color: 'Black', startDate: '2020-03-15', endDate: '2020-06-14' },
		{ id: '2r4fdd34', model: 'XT2041-1', price: '1207.12', brand: 'Motorola', color: 'Black', startDate: '2020-03-15', endDate: '2020-06-14' },
	]

	const initialFormState = { id: '', model: '', price: '', brand: '', color: '', startDate: '', endDate: '' }

	return (
		<div className="container">
			<div className="flex-column">
				<div id = 'frame1' className="flex-large">
					<div className="flex-row">
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
	)
}

export default App