import { connection as db } from "../config/index.js";

class Cart {
  fetchCart(req, res) {
    const dbQry = `
      SELECT cartID, userID, prodID, quantity
      FROM cart;`;
    db.query(dbQry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results
      });
    });
  }

  fetchCartById(req, res) {
    const prodID = db.escape(req.params.id);
    const dbQry = `
      SELECT cartID, userID, prodID, quantity
      FROM cart
      WHERE prodID = ${prodID};`;
    db.query(dbQry, (err, results) => {
      if (err) throw err;
      if (results.length === 0) {
        res.json({
          status: res.statusCode,
          msg: 'No results found for the given product ID'
        });
      } else {
        res.json({
          status: res.statusCode,
          result: results[0]
        });
      }
    });
  }

  deleteCart(req, res) {
    const dbQry = `
      DELETE FROM cart
      WHERE cartID = ?;`;
    db.query(dbQry, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'Product was deleted from cart!'
      });
    });
  }

  deleteCartItem(req, res) {
    const dbQry = `
      DELETE FROM cart
      WHERE prodID = ?;`;
    db.query(dbQry, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'Product was deleted from cart!'
      });
    });
  }
}

export { Cart };
