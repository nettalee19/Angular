var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           data = customers[i];
           break;
        }
    }  
    res.json(data);
});

app.get('/customers', function(req, res) {
    res.json(customers);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/orders', function(req, res) {
    var orders = [];
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].orders) {
            for (var j=0,ordersLen=customers[i].orders.length;j<ordersLen;j++) {
                orders.push(customers[i].orders[j]);   
            }
        }
    }  
    res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
    var customerId = parseInt(req.params.id);
    var data = { status: true };
    for (var i=0,len=customers.length;i<len;i++) {
        if (customers[i].id === customerId) {
           customers.splice(i,1);
           data = { status: true };
           break;
        }
    }  
    res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

var customers = [
    {
        id: 11, 
        joined: '2000-12-02', 
        name:'Cool Shirt', 
        miniDes:'Plain yellow shirt',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum labore aspernatur perferendis dolores doloremque accusamus molestiae laudantium minus quaerat id!",
        price: 9.9956,
        category:'shirts',
        size:['S','M','L','XL'],
        img:"https://www.sneak-a-venue.com/files/image/id/52145/fixed/1/w/2000/h/2000/n/champion-reverse-weave-crewneck-t-shirt-yellow-210971-ys001-1.jpg",
        orders: [
            {
                id: 1,
                product: 'Cool Shirt',
                total: 9.9956,
                img:"https://www.sneak-a-venue.com/files/image/id/52145/fixed/1/w/2000/h/2000/n/champion-reverse-weave-crewneck-t-shirt-yellow-210971-ys001-1.jpg",
        
            }
        ]
    }, 
    {
        id: 2, 
        joined: '1965-01-25',
        name:'Pants', 
        miniDes:'Cozy red pants',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum labore aspernatur perferendis dolores doloremque accusamus molestiae laudantium minus quaerat id!", 
        price: 19.99,
        category:'pants',
        img:"https://www.montane.com/images/montane-on-sight-pants-p895-34579_zoom.jpg",
        
        orders: [
            {
                id: 2,
                product: 'Baseball',
                total: 9.995
            },
            {
                id: 3,
                product: 'Bat',
                total: 9.995
            }
        ]
    },
    {
        id: 3, 
        joined: '1944-06-15',
        name:'Sneakers', 
        miniDes:'Coolest sneakers ever', 
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum labore aspernatur perferendis dolores doloremque accusamus molestiae laudantium minus quaerat id!",
        price:44.99,
        category:'shoes',
        img:"https://cdn.kickscrew.com/media/catalog/product/cache/dd3ae58018643bb67b4bf8f0a77873b1/C/G/CG6211_adidas_Falcon_W_Multi_a.jpg",
        
        orders: [
            {
                id: 4,
                product: 'Headphones',
                total: 44.99
            }
        ]
    }, 
    {
        id: 4, 
        joined: '1995-03-28',
        name:'Dress', 
        miniDes:'Cutest dress', 
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum labore aspernatur perferendis dolores doloremque accusamus molestiae laudantium minus quaerat id!",
        price:49.90,
        category:'dresses',
        img:"data:image/jpeg;base64,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",
        
        orders: [
            {
                id: 5,
                product: 'Kindle',
                total: 101.50
            }
        ]
    },
    {
        id: 5, 
        joined: '1995-03-28',
        name:'Skirt', 
        miniDes:'Rainbow skirt',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum labore aspernatur perferendis dolores doloremque accusamus molestiae laudantium minus quaerat id!", 
        price:34.90,
        category:'skirts',
        img:"https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/30/301/8187/101/5/774140410/774140410_1_720x928.jpg",
        
        orders: [
            {
                id: 5,
                product: 'Kindle',
                total: 101.50
            }
        ]
    },
    {
        id: 6, 
        joined: '1995-03-28',
        name:'Handbag', 
        miniDes:'Elegant handbag',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum labore aspernatur perferendis dolores doloremque accusamus molestiae laudantium minus quaerat id!", 
        price:101.50,
        category:'bags',
        img:"https://cdn-images.farfetch-contents.com/16/32/18/51/16321851_31394452_480.jpg",
        
        orders: [
            {
                id: 5,
                product: 'Kindle',
                total: 101.50
            }
        ]
    },
    {
        id: 7, 
        joined: '1995-03-28',
        name:'Handbag', 
        miniDes:'Pink handbag',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum labore aspernatur perferendis dolores doloremque accusamus molestiae laudantium minus quaerat id!", 
        price:400,
        category:'bags',
        img:"https://cdn-images.farfetch-contents.com/15/94/05/15/15940515_29643654_1000.jpg",
        
        orders: [
            {
                id: 5,
                product: 'Kindle',
                total: 101.50
            }
        ]
    },
];