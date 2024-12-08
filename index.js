
const obj = {
    x: 30,
    funcc: function(){
        const nested = ()=>{
            console.log("Int heneseed")
            console.log(this)
        }
        nested()
    }
}


const obj2 ={
    x: 45,
    y:2
}

// obj.funcc()
// obj.funcc.call(obj2)

const button = {
    label: "Click me",
    handleClick: function() {
        console.log("Button label:", this.label);
    }
};

// // Use `.bind()` to fix `this`
// const simulateClick = button.handleClick.bind(button);
// simulateClick(); // Button label: Click me
const simulateClick = button.handleClick;
simulateClick.call(button); // Button label: Click me


const button2 = {
    label: "Click me",
    handleClick: function() {
        const nested = () => {
            console.log("Button label:", this.label);
        };
        nested();
    }
};

button2.handleClick(); // Button label: Click me
