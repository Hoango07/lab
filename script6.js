const user = {
    currentBalance: 5000,
    transactionsMonthToDate: [{}],
  };
  
  const order = {
    orderItems: [
      {
        id: 'M40',
        item: 'T-shirt',
        price: 29.9,
        quantity: 5,
        gender: 'm',
        category: 'Summer',
      },
      {
        id: 'M32',
        item: 'Hoodie',
        price: 99.9,
        quantity: 2,
        gender: 'm',
        category: 'Winter',
      },
      {
        id: 'M11',
        item: 'Sandals',
        price: 19.9,
        quantity: 1,
        gender: 'm',
        category: 'Summer',
      },
      {
        id: 'M12',
        item: 'Shorts',
        price: 29.9,
        quantity: 1,
        gender: 'm',
        category: 'Summer',
      },
      {
        id: 'M13',
        item: 'Exercise Shorts',
        price: 29.9,
        quantity: 5,
        gender: 'm',
        category: 'Exercise',
      },
      {
        id: 'M41',
        item: 'Shoes',
        price: 19.9,
        quantity: 1,
        gender: 'm',
        category: 'Summer',
      },
      {
        id: 'M49',
        item: 'Socks',
        price: 5.9,
        quantity: 10,
        gender: 'm',
        category: 'Undergarment',
      },
      {
        id: 'M01',
        item: 'Belt',
        price: 15.9,
        quantity: 1,
        gender: 'm',
        category: 'Accessory',
      },
      {
        id: 'M42',
        item: 'Underwear',
        price: 19.9,
        quantity: 10,
        gender: 'm',
        category: 'Undergarment',
      },
      {
        id: 'F71',
        item: 'T-shirt',
        price: 39.9,
        quantity: 5,
        gender: 'f',
        category: 'Summer',
      },
      {
        id: 'F81',
        item: 'Dress',
        price: 49.9,
        quantity: 5,
        gender: 'f',
        category: 'Summer',
      },
      {
        id: 'F91',
        item: 'Skirt',
        price: 39.9,
        quantity: 5,
        gender: 'f',
        category: 'Summer',
      },
      {
        id: 'F01',
        item: 'Shoes',
        price: 19.9,
        quantity: 10,
        gender: 'f',
        category: 'Summer',
      },
      {
        id: 'F32',
        item: 'Hoodie',
        price: 99.9,
        quantity: 2,
        gender: 'f',
        category: 'Winter',
      },
      {
        id: 'F34',
        item: 'Sandals',
        price: 19.9,
        quantity: 2,
        gender: 'f',
        category: 'Summer',
      },
      {
        id: 'F36',
        item: 'Shorts',
        price: 39.9,
        quantity: 3,
        gender: 'f',
        category: 'Summer',
      },
      {
        id: 'F12',
        item: 'Exercise Shorts',
        price: 29.9,
        quantity: 5,
        gender: 'f',
        category: 'Exercise',
      },
      {
        id: 'F19',
        item: 'Sleeping',
        price: 39.9,
        quantity: 3,
        gender: 'f',
        category: 'Undergarment',
      },
      {
        id: 'F42',
        item: 'Socks',
        price: 5.9,
        quantity: 10,
        gender: 'f',
        category: 'Undergarment',
      },
      {
        id: 'F43',
        item: 'Underwear',
        price: 39.9,
        quantity: 10,
        gender: 'f',
        category: 'Undergarment',
      },
      {
        id: 'F44',
        item: 'Bra',
        price: 29.9,
        quantity: 10,
        gender: 'f',
        category: 'Undergarment',
      },
      {
        id: 'F01',
        item: 'Belt',
        price: 15.9,
        quantity: 1,
        gender: 'f',
        category: 'Accessory',
      },
    ],
  };
  // totalNumberOfTransaction = {}
  // act = () => {
  //     for (let index = 0; index < user.transactionsMonthToDate.length; index++) {
  //         const element = user.transactionsMonthToDate[index];
  //         console.log(totalNumberOfTransaction[element.amount])
  //         if(totalNumberOfTransaction[element.amount]){

  //         } else {
  //             totalNumberOfTransaction[element.amount] = 0
  //         }
  //         totalNumberOfTransaction[element.amount] += element.type
  //     }
  // }
  // act ()
  // console.log(totalNumberOfTransaction);

  

  const orders = order.orderItems;
  const sumOfItems = () => {
    const sum = orders.reduce((acc, order) => acc + order.quantity, 0);
    console.log('Sum of all items: ', sum);
  };
  const numberOfUniqueItems = () => {
    const allItemNames = orders.map(order => order.item);
    console.log(allItemNames);
  
    const uniqueItemNames = allItemNames.filter(
      name => allItemNames.indexOf(name) === allItemNames.lastIndexOf(name));
    console.log(uniqueItemNames);
  
    const result = uniqueItemNames.map(name => {
      return orders.find(order => order.item === name);
    });
    console.log(result);
  };
  const numberOfMaleItems = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.gender === 'm'), 0);
    console.log('Sum of all male items:', sum);
  };
  const numberOfFemaleItems = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.gender === 'f'), 0);
    console.log('Sum of all female items:', sum);
  };
  const numberOfSummerItems = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.category === 'Summer'), 0);
    console.log('Sum of all summer items:', sum);
  };
  const numberOfUndergarmentItems = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.category === 'Undergarment'), 0);
    console.log('Sum of all undergarment items:', sum);
  };
  const numberOfFemaleUndergarmentItems = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.category === 'Undergarment' && ord.gender === 'f'), 0);
    console.log('Sum of all female undergarment items:', sum);
  };
  const numberOfUniqueSummerItems = () => {
    const summerOrders = orders.filter(order => order.category === 'Summer');
    const allItemNames = summerOrders.map(order => order.item);
    console.log(allItemNames);
  
    const uniqueItemNames = allItemNames.filter(
      name => allItemNames.indexOf(name) === allItemNames.lastIndexOf(name));
    console.log(uniqueItemNames);
  
    const result = uniqueItemNames.map(name => {
      return orders.find(order => order.item === name);
    });
    console.log(result);
  };
  const sumOfSummerItems = () => {
    const sum = orders.reduce((acc, order) => acc + (order.quantity * (order.category === 'Summer')), 0);
    console.log('Sum of all summer items: ', sum);
  };
  const mutateObject = () => {
    const originalDate = () => {
      let today = new Date();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let year = today.getFullYear();
      return day + '/' + month + '/' + year;
    };
    const newOrders = orders.map(order => {
      let subtotal = order.price * order.quantity;
      return {
        ...order,
        originalDate: originalDate(),
        delivered: false,
        subtotal: subtotal.toFixed(2),
        saleTax: (subtotal * 0.07).toFixed(2),
        grandTotal: (subtotal * 1.07).toFixed(2),
      };
    });
    console.log(newOrders);
  };
  mutateObject();