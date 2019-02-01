  # Followings APIs created
  ## Add New Category
   - POST
   - Body {
	          "name":"Python",
	          "child_categories":[],
	          "products":[]
           }
   - [http://localhost:4000/api/category](http://localhost:4000/api/category)
    
  ## Add New Category maped with parent category
   - POST
   - Body {
	          "name":"Python3",
	          "child_categories":[],
	          "products":[]
           }
   - [http://localhost:4000/api/category?name=Python](http://localhost:4000/api/category?name=Python)    
   
 ## Get list of all categories
   - GET
   - [http://localhost:4000/api/category](http://localhost:4000/api/category) 
   
  ## Add new product
   - POST
   - Body {
	          "name":"Web2py",
	          "details":"Full stack fram-work",
	          "price":"1"
          }
   - [http://localhost:4000/api/product](http://localhost:4000/api/product) 
   
   ## Add new product mapped with category
   - POST
   - Body {
	          "name":"Web2py",
	          "details":"Full stack fram-work",
	          "price":"1"
          }
   - [http://localhost:4000/api/product?name=Python](http://localhost:4000/api/product?name=Python) 
   
   ## Get product list
   - GET
   - [http://localhost:4000/api/product](http://localhost:4000/api/product)    
   
   
   ## Get products by a category
   - GET
   - [http://localhost:4000/api/category/5c53248373c40e25c86d362e](http://localhost:4000/api/category/5c53248373c40e25c86d362e) 
   
   ## Update product details
   - PATCH
   - Body {
            "price":"1000"
          }
   - [http://localhost:4000/api/product/5c532c3d55241129cc31f957](http://localhost:4000/api/product/5c532c3d55241129cc31f957)    
   
