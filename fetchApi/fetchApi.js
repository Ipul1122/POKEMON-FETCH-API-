
// deklarasi function fetchData tanpa parameter, memanggil button onclick = fetchData()
async function fetchData() {
    // try jika pokemon yang di cari ada
    try {

        // deklarasi variabel const pokemonName memanggil id pokemonName dari HTML
        // .value = menghasilkan apa yang di ketik
        // .toLowerCase = semua yang diketik tipe string huruf kecil
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        // deklarasi variabel respon = await fetch mengembalikan promise data pokemon yang di cari
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        // jika respon tidak ok, maka pokemon tidak dapat dicari
        if (!response.ok){
            throw new Error("sumber daya tidak bisa dicari ")
        }

        // deklarasi variabel data = await. Memanggil variabel response dan mengembalikan promise
        const data = await  response.json();
        // deklarasi variabel pokemonSprite = memanggil data yang sudah di promise dan memunculkan bagian depan pada gambar pokemon
        const pokemonSprite = data.sprites.front_default;
        // deklarasi variabel imgElement = memanggil id pokemonSprite dari HTML
        const imgElement = document.getElementById("pokemonSprite");

        // memanggil imgElemet.src untuk mengganti src dari imgElement dengan pokemonSprite
        imgElement.src = pokemonSprite;
        // memanggil imgElement dan membuat style display menjadi block
        imgElement.style.display = "block";
        // melihat data dari karakter pokemon
        console.log(data)
    } 
    // carch atau tangkap error jika tidak ada salah satu nama pokemon
    catch(error){
        console.log(error);
        alert("Pokemon tidak ditemukan. Silakan coba nama yang lain.");
    }
}















// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {

//         if (!response.ok){
//             throw new Error ("tidak bisa di cari sumber daya");
//         }
//         return response.json();
//     })
        
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error))