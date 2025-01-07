
        class Cart{
            constructor(){
                this.arr=[]
                this.totalcost=0
            }
            addItems(obj){
                let t=obj.price-obj.price*obj.discount/100
               this.totalcost+=t
               this.arr.push({name:obj.name,price:t,totalprice:this.totalcost})

            }
            getItems(){
                return this.arr
            }
        }
        class Item{
            constructor(name,price,discount,quantitiy){
                this.name=name
                this.price=price
                this.discount=discount
                this.quantitiy=quantitiy

            }
            getDetils(){
                return {name:this.name,price:this.price,discount:this.discount,quantity:this.quantity}
            }
        }
        let items=[]
        const cart=new Cart()
        for(let i=0;i<10;i++){
            let item=new Item("rdf",(i+1)*50,(i+1)*1,i+1)
            items.push(item.getDetils())
            cart.addItems(item.getDetils())
            
        }
        console.log(cart.getItems())
