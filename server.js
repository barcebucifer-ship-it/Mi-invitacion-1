const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos de la página
app.use(express.static(path.join(__dirname, "public")));

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Comprobar que el servidor funciona
app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "Mi Invitación está funcionando"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Mi Invitación funcionando en el puerto ${PORT}`);
});
