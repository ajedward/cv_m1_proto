

var Portfolio = Backbone.Model.extend({
    initialize: function() {
	console.log('Hello world');
	return {
	    name: 'Portfolio inconnu',
            //order: bbPortfolios.nextOrder(),
	    id: -1,
	};
    },
    defaults: {
	name: "Portfolio inconnu",
	id: -1
    }
});

var bbPortfolioPointG = new Portfolio();
bbPortfolioPointG.set({
    name: 'Point G',     
    id: 0,
    curItemIdx: 0,
    description: 'Point G est un magasin spécialisé dans les produits fins.',
    items: [0,1,2,3,4,5]
});
var bbPortfolioHedda = new Portfolio();
bbPortfolioHedda.set({
    name: 'Hedda',     
    id: 1,
    curItemIdx: 0,
    description: 'Hedda fait toutes sortes de produits pour les cheveux.',
    items: [6,7,8,9,10,11]
});

// The collection of portfolios is backed by *localStorage* instead of a remote
// server.
var PortfolioList = Backbone.Collection.extend({
    
    // Reference to this collection's model.
    model: Portfolio,
    
    // Save all of the todo items under the `"todos-backbone"` namespace.
    localStorage: new Backbone.LocalStorage("portfolios-backbone"),
    
    // We keep the Portfolios in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
	if (!this.length) return 1;
	return this.last().get('order') + 1;
    },
    
    // Todos are sorted by their original insertion order.
    comparator: 'order'
    
});

// Create our global collection of **Portfolios**.
var bbPortfolios = new PortfolioList();

var portfolios = [{"id":0,
	           "curItemIdx":0,
	           "domId": 'client01_image01',
		   "name":"Point G",
                   "description":"Point G est un magasin spécialisé dans les produits fins.",
                   items : [0, 1, 2, 3, 4, 5]
                  },
                  {"id":1,
   	           "curItemIdx":0,
   	           "domId": 'client01_image01',
                   "name":"Hedda",
                   "description":"Hedda fait toute sorte de produits pour les cheveux, etc.",
        	   items : [6, 7, 8, 9, 10, 11]}
                 ];

var portfolioItems = [{'id':0, 'name':'Point G - Item 1', 'description':'',
		       'portfolioId': 0,
                       'src' : 'img/client01_image01.jpg',
                       'domId' : 'client01_image01'},
                      {'id':1, 'name':'Point G - Item 2', 'description':'',
   		       'portfolioId': 0,
                       'src' : 'img/client01_image02.jpg',
                       'domId' : 'client01_image02'},
                      {'id':2, 'name':'Point G - Item 3', 'description':'',
       		       'portfolioId': 0,
                       'src' : 'img/client01_image03.jpg',
                       'domId' : 'client01_image03'},
                      {'id':3, 'name':'Point G - Item 4', 'description':'',
       		       'portfolioId': 0,
                       'src' : 'img/client01_image04.jpg',
                       'domId' : 'client01_image04'},
                      {'id':4, 'name':'Point G - Item 5', 'description':'',
       		       'portfolioId': 0,
                       'src' : 'img/client01_image05.jpg',
                       'domId' : 'client01_image05'},
                      {'id':5, 'name':'Point G - Item 6', 'description':'',
       		       'portfolioId': 0,
                       'src' : 'img/client01_image06.jpg',
                       'domId' : 'client01_image06'},
                      {'id':6, 'name':'Point G - Item 1', 'description':'',
       		       'portfolioId': 1,
                       'src' : 'img/client02_image01.jpg',
                       'domId' : 'client02_image01'},
	              {'id':7, 'name':'Point G - Item 2', 'description':'',
       		       'portfolioId': 1,
	               'src' : 'img/client02_image02.jpg',
                       'domId' : 'client02_image02'},
	              {'id':8, 'name':'Point G - Item 3', 'description':'',
       		       'portfolioId': 1,
	               'src' : 'img/client02_image03.jpg',
                       'domId' : 'client02_image03'},
	              {'id':9, 'name':'Point G - Item 4', 'description':'',
       		       'portfolioId': 1,
	               'src' : 'img/client02_image04.jpg',
                       'domId' : 'client02_image04'},
	              {'id':10, 'name':'Point G - Item 5', 'description':'',
       		       'portfolioId': 1,
	               'src' : 'img/client02_image05.jpg',
                       'domId' : 'client02_image05'},
	              {'id':12, 'name':'Point G - Item 6', 'description':'',
       		       'portfolioId': 1,
	               'src' : 'img/client02_image06.jpg',
                       'domId' : 'client02_image06'}];
