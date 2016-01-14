/**
 * Created by Briana on 1/2/16.
 */
var PRODUCTS = [
    {
        "id": 1, "name": "Bag of suck", "price": 100,
        "details": "You don't want to own this!"
    },
    {
        "id": 2, "name": "Bag of luck", "price": 200,
        "details": "You might want to own this!"
    },
    {
        "id": 3, "name": "Bag of tuck", "price": 300,
        "details": "You really want to own this!"
    }
];

var ItemsList = React.createClass({
    getInitialState: function() {
    return {
        expandedProductId: null
    };
},

handleProductClick: function(product) {
    var newSelectedProductId = product.id;

    if (this.state.expandedProductId === product.id) {
        newSelectedProductId = null;
    }

    this.setState({expandedProductId: newSelectedProductId});
},

render: function() {
    var self = this, noneSelected = this.state.expandedProductId === null;

    var products = PRODUCTS.map(function(product) {
        var details, isExpanded = self.state.expandedProductId === product.id;

        if (isExpanded) {
            details = <div>{product.details}</div>;
    }

    return (
        <li key={product.id}
onClick={self.handleProductClick.bind(self, product)}
className={isExpanded || noneSelected ? '' : 'collapsed'}>
{product.name} ({product.price})
{details}
</li>
);
});

return (
    <ul>
    {products}
    </ul>
);
}
});

React.render(<ItemsList />, document.body);