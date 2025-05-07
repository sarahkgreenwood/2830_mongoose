// models/post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
dishname: {
   type: String,
   required: true,
   minlength: 3
},
ingredients: {
   type: Number,
   required: true,
   min: 0,
   max: 4
},
uploadDate: {
   type: Date,
   default: Date.now
},
interests: {
   type: [String],
   default: []
},
author: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "Author"
}  
});

document.getElementById("createForm").addEventListener("submit", async function (e) {
   e.preventDefault();

const payload = {
   dishname: document.getElementById("dishname").value,
   ingredients: document.getElementById("ingredients").value,
   uploadDate: document.getElementById("uploadDate").value
};

try {
   const res = await fetch("/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
   });

   const msg = await res.text();
   alert(msg);

   this.reset(); // optional
   } catch (err) {
      console.error(err);
      alert("Error saving post.");
   }
});

document.getElementById("updateForm").addEventListener("submit", async function (e) {
   e.preventDefault();
   const id = document.getElementById("updateId").value;
   
   const updatedData = {
      dishname: document.getElementById("updateDishname").value,
      ingredients: document.getElementById("updateIngredients").value,
      uploadDate: document.getElementById("updateDate").value
   };
   
   try {
      const res = await fetch(`/posts/${id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updatedData)
      });
   
      alert(await res.text());
   } catch (err) {
      alert("Failed to update post.");
   }
   });