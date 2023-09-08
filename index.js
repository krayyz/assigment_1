
var name = "John";
var age = 20;
var money = 400000;


if (name === "") {
  console.log("Anda tidak boleh masuk!");
} else {

  if (age < 17) {
    
    if (money < 50000) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      money -= 50000;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    }
  } else {
    
    if (money < 300000) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      money -= 300000;
      console.log("Anda bisa pesan minum. Sisa uang anda: " + money);
    }
  }
}