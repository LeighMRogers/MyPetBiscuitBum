
//Represent your pet: Create an object that represents your pet.

const biscuitBum = {
    name: "Biscuit",
    species: "cat",
    nicknames: ["Biscuit Bum", "Stupid Cat"],
    age: 4,
    meow: function () {
        window.alert("Meow.");
    },
    purr: function () {
        window.alert("PHRRRRRRR");
    },
    cry: function () {
        window.alert("WAAAAA!!! WAAAAA!!!")
    }
}

biscuitBum.meow()
biscuitBum.purr()
biscuitBum.cry()
console.log(biscuitBum);