import {
    connection as db
} from "../config/index.js"

class Products {
    fetchProducts(req, res) {
        const qry = `
        SELECT prodID, prodName, prodQuantity,
        prodPrice, prodURL, 
        FROM Products;
        `
        db.query(qry, (error, results) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                results
            })
        })
    }
    fetchProduct(req, res) {
        const qry = `
        SELECT prodID, prodName, quantity,
        amount, Category, prodURL, prodDesc
        FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, (error, result) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                result: result[0]
            })
        })
    }
    addProduct(req, res) {
        const qry = `
        INSERT INTO Products
        SET ?;
        `
        db.query(qry, [req.body], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: 'New product added successfully'
            })
        })
    }
    updateProduct(req, res) {
        const qry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id};
        `
        db.query(qry, [req.body], (error) => {
            if (error) throw error
            res.json({
                status: res.errorCode,
                message: "Success! Product updated"
            })
        })
    }
    deleteProduct(req, res) {
        const dbQry = `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(dbQry, (error) => {
            if (error) throw error
            res.json({
                status: res.statusCode,
                message: "Product successfully deleted."
            })
        })
        }
        deleteProducts(req,res){
            const qry=`DELETE FROM products ;`
       
            db.query(qry, (err)=>{
              if(err) throw err
              
              res.json({
                status: res.statusCode,
                msg:'Success! Product was deleted!'
              })
       
            })
        }
        deleteProduct(req, res) {
            const qry = `DELETE FROM products WHERE prodID=${db.escape(req.params.id)};`;
           
            db.query(qry, (err) => {
              if (err) {
                throw err;
              } else {
                res.json({
                  status: res.statusCode,
                  msg: 'Product is deleted!',
                });
              }
            });
           }
}

export {
    Products
}