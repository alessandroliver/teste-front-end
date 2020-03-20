import React from 'react'

function dateFormat (dateToFormat){
  var dateOneDay = new Date(dateToFormat)
  var d = (dateOneDay.getDate() +1) + "/" + ("0" + (dateOneDay.getMonth() + 1)).slice(-2)
      + '/' +  dateOneDay.getFullYear()
      return d
}

const ProductTable = props => (
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Modelo</th>
        <th>Preço</th>
        <th>Marca</th>
        <th>Cor</th>
        <th>Início das vendas</th>
        <th>Fim das vendas</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.products.length > 0 ? (
        props.products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.model}</td>
            <td>{'R$ ' + product.price}</td>
            <td>{product.brand}</td>
            <td>{product.color}</td>
            <td>{dateFormat(product.startDate)}</td>
            <td>{dateFormat(product.endDate)}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(product)
                }}
                className="button muted-button"
              >
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
              <button
                onClick={() => props.deleteProduct(product.id)}
                className="button muted-button"
              >
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Sem produtos</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ProductTable
