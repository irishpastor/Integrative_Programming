
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

const firebaseConfig = {
    apiKey: "AIzaSyD9PqwzWnLTTZykOM-wdBHsuboiqDuJeIg",
    authDomain: "niche-art-bazaar.firebaseapp.com",
    projectId: "niche-art-bazaar",
    storageBucket: "niche-art-bazaar.appspot.com",
    messagingSenderId: "292480179725",
    appId: "1:292480179725:web:42a6dfbe03e8c5cf72bf44",
    measurementId: "G-P70XMSX33V"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Query the image collection
db.collection("WebsiteProducts").get().then((querySnapshot) => {
    // Iterate through the query snapshot
    querySnapshot.forEach((doc) => {
      // Get the image URL from the document data
      const img_url = doc.data().img_url;
  
      // Create an img element
      const img = document.createElement("img");
      
      // Set the src attribute to the Firestore image URL
      img.src = img_url;
      
      // Set any additional attributes or styles for the image
      img.alt = "Artwork";
      
      // Append the img element to the container
      imageContainer.appendChild(img);
    });
  }).catch((error) => {
    console.log("Error getting documents: ", error);
  });
  

  

  

