async function salesAsyncData($fire) {
  let collection = $fire.firestore.collection('orders')
  let documents = await collection.get()

  let usersRef = $fire.firestore.collection('users')
  let userDocs = await usersRef.get()

  let users = [];
  await Promise.all(userDocs.docs.map(document => { //remove map for single document
      users.push({id: document.id, ...document.data()})
  }))

   let orders = []
   await Promise.all(documents.docs.map(document => { //remove map for single document
      orders.push({id: document.id, ...document.data()})
  }))

  let pending = orders.filter(document => document.orderStatus == "Pending" || document.orderStatus == "Shipping")
  let pendingSum = pending.length

  let fulfilled = orders.filter(document => document.orderStatus == "Fulfilled")
  let fulfilledSum = fulfilled.length

  let cancelled = orders.filter(document => document.orderStatus == "Cancelled")
  let cancelledSum = cancelled.length

  let paid = orders.filter(document => document.paymentStatus == "Paid")
  let paidSum = paid.length

  let unpaid = orders.filter(document => document.paymentStatus == "Unpaid")
  let unpaidSum = unpaid.length

  let ordersSum = orders.length

  users = users.filter(document => document.role != "admin")
  let usersSum = users.length

  let repeatSum = 0
  let uniqueSum = 0

  for(var i = 0; i < users.length; i++){
      var ctr = 0;
      for(var j = 0; j < orders.length; j ++){
          if(orders[j].userId == users[i].id)
              ctr++;
          if(ctr == 2){
              repeatSum++
              break;
          }
      }
      if(ctr == 1)
          uniqueSum++
  }

  return{pendingSum, fulfilledSum, cancelledSum, paidSum, unpaidSum, ordersSum, usersSum, repeatSum, uniqueSum}
};

export { salesAsyncData };
