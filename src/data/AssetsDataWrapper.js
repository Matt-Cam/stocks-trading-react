import { tsPropertySignature } from '@babel/types';

const AssetsDataWrapper = props => {
  return props.render(staticData);
};
const staticData = {
  columnDefs: [
    {
      headerName: 'Stock',
      field: 'stock'
    },
    {
      headerName: 'Amount',
      field: 'amount'
    },
    {
      headerName: 'Current Price',
      field: 'currentPrice'
    },
    {
      headerName: 'Total',
      field: 'total'
    },
    {
      headerName: 'Sell',
      field: 'sell'
    }
  ],
  rowData: [
    {
      stock: 'FakeAppl',
      amount: 30,
      currentPrice: 500,
      total: 15000
    }
  ]
};

export default AssetsDataWrapper;
