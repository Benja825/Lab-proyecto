    function calcularTotal() {
      const tipoPapa = document.getElementById("tipoPapa").value;
      const cantidad = parseInt(document.getElementById("cantidad").value);
      const medioPago = document.getElementById("medioPago").value;

      if (medioPago == "Mayorista" && cantidad <10) {
        alert("Cantidad insuficiente para descuento mayorista");
        document.getElementById("total").textContent = "La compra tiene que ser mayor a 10 unidades"
        return;
      }

    
      let precioUnitario = 0;

      switch (tipoPapa) {
        case "Huevo_y_Proteina":
          precioUnitario = 1500;
          break;
        case "Almendras_y_Clara":
          precioUnitario = 1750;
          break;
        case "Huevo_y_Barbacoa":
          precioUnitario = 1800;
          break;
        case "Huevo_y_Cheddar":
            precioUnitario = 1900;
            break;
      }

      let subtotal = precioUnitario * cantidad;
      let descuento = 0;

      switch (medioPago) {
        case "efectivo":
          descuento = 0.10;
          break;
        case "debito":
          descuento = 0.05;
          break;
        case "Mayorista":
          descuento = 0.15;
          break;
      }

      const total = subtotal - (subtotal * descuento);
      

      document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
    }