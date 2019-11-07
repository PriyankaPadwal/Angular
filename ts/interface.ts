interface A{
    display()
}

class B implements A{
    display(){
        console.log("hello......!");
    }
    
}

let b=new B();
b.display();